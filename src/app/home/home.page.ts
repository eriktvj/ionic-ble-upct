import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController } from '@ionic/angular';
import { DataSharingService } from '../data-sharing.service';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse, BackgroundGeolocationEvents } from '@ionic-native/background-geolocation/ngx';
import { interval, concat } from 'rxjs';
import { DatePipe } from '@angular/common';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';


export type postDataTemplate = {
    type: 'Feature';
    properties: {
      desc: 'A GeoJSON';
      session: number;
      ns: number;
      timestamp: Date;
      beacons: string[];
    },
    geometry: {
      type: 'Point';
      coordinates: [number, number]
    }
}

export type myConfig = {
  ID: number;
  UUID: string;
  work: number;
  scan: number;
  api: string;
  mail: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  devices = [];
  public myCfg;
  latitud = 0;
  longitud = 0;
  scanStatus: boolean = false;
  intervalo: any;
  timestamp: any;
  ns = 0;
  workingStatus = false;
  workingTime = 0;
  scanTime = 0;
  controller = 0 ;
  devMACs: any;
  private blob: Blob;
  singleController = false;
  testMessage: string = '';
  
  constructor(private email: EmailComposer, private file: File, public datepipe: DatePipe, private ble:BLE,private ngZone: NgZone, public navCtrl: NavController, private http: HTTP, public data: DataSharingService, private bgGeolocation: BackgroundGeolocation) 
  {
    this.data.dataModifications.subscribe( data => {
      this.myCfg = data;
    });
  }

  ngOnInit(){


    this.workingTime = parseInt(this.myCfg.wCycle);
    this.scanTime = parseInt(this.myCfg.sCycle);

    this.http.setHeader('*', 'Access-Control-Allow-Origin', '*');

    this.http.setHeader('*', 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH');

    this.http.setHeader('*', 'Accept', 'application/json');

    this.http.setHeader('*', 'content-type', 'application/json');

    this.http.setHeader('*', 'origin', '*');

    this.http.setHeader('*', 'x-requested-width', '*');

    this.http.setDataSerializer('json');

    this.file.createFile(this.file.dataDirectory, 'logger.txt', true);

    const config: BackgroundGeolocationConfig={
      desiredAccuracy: 10,
      distanceFilter: 5,
      debug: false,
      stopOnTerminate: false,
      startOnBoot: true,
      url: '',
      postTemplate: {
        id: '',
        lat: '@latitude',
        lng: '@longitude',
        test: '1'
      }
    };
    this.bgGeolocation.configure(config).then(() => {
      this.bgGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
        console.log(location);
        this.latitud = location.latitude;
        this.longitud = location.longitude;
        this.appendLog(Date.now() + ': Calling geolocation task...\n');
        this.bgGeolocation.finish();
      });
    });

    this.bgGeolocation.start();

    this.appendLog(Date.now() + ': Geolocation is ready...\n');
  }


  public onScanClicked(): void {
    if (!this.scanStatus) {
      this.appendLog(Date.now() + ': ---------------------------------------------------------------- \n');
      this.appendLog(Date.now() + ': STARTING NEW LOG \n');
      this.appendLog(Date.now() + ': ---------------------------------------------------------------- \n');
      this.startScanning();
      this.devMACs = [];
      this.devices = [];
      this.testMessage = '';
      this.scanStatus = true;
    } else {
      this.appendLog(Date.now() + ': STOPPING LOGGER \n');
      this.scanStatus = false;
      this.workingStatus = false;
      this.stopScanning();
    }
  }

  async appendLog(logMsg: string) {
    this.blob = new Blob([logMsg], {type: 'text/plain'});

    await this.file.writeFile(this.file.dataDirectory, 'logger.txt', this.blob, {append: true, replace: false});
  }

  async startScanning(){

    this.appendLog(Date.now() + ': Scanning...\n');
    await this.ble.scan([], this.scanTime).subscribe(
       async device => await this.onDeviceDiscovered(device)
    );



   if(this.controller === 0){
     this.controller++;
     this.workingStatus = true;
     this.workingState();
   }

  }

async workingState(){

  this.intervalo = interval(1000 * this.workingTime).subscribe(async (values) => {
    this.appendLog(Date.now() + ': Starting Work-Cycle iteration...\n');
    this.startScanning();
    let myDate = new Date();
    this.timestamp = this.datepipe.transform(myDate, 'yyyy/MM/dd-hh:mm:ss', 'UTC +2');


    this.devMACs = await this.devices.map(function (e) {
      return e.id;
    });

    if(this.latitud != 0 && this.longitud != 0 && this.devices.length > 0){
      await this.http.sendRequest(this.myCfg.API, {
        method: 'post',
        data: {
          "type": 'Feature',
          "properties": {
            "desc": 'A GeoJSON',
            "session": this.myCfg.ID,
            "ns": this.ns,
            "timestamp": this.timestamp,
            "beacons": this.devMACs
          },
          "geometry": {
            "type": 'Point',
            "coordinates": [this.latitud, this.longitud]
          }
        }
      }).then(response => {
        if(response){
          console.log(response);
          this.ns++;
          this.devMACs = [];
          this.devices = [];
          this.appendLog(Date.now() + ': Scan result sent...\n');
        }
      }).catch(response => {
        console.log(response);
        console.log(response.error);
      });
    } else {
      if(this.devices.length > 0){
        this.appendLog(Date.now() + ': Awaiting Geolocation Engine initialization... \n');
        this.devices = [];
        this.devMACs = [];
      } else {
        this.appendLog(Date.now() + ': No devices detected in this iteration, did not send anything...\n');
      }
    }
    this.appendLog(Date.now() + ': Finished Work-Cycle iteration...\n')
    });
}


  onDeviceDiscovered(device){
    this.ngZone.run(async ()=>{
        this.appendLog(Date.now() + ': Device found, applying filter... \n');
        const uuidArray = new Uint8Array(device.advertising);
        let fixedIndex = 0;
        let isIBeacon = false;
        await uuidArray.forEach((elem, index) => {
          if(elem === 26){
            if(uuidArray[index + 1] === 255 && uuidArray[index + 2] === 76 && uuidArray[index + 3] === 0){
              isIBeacon = true;
              fixedIndex = index+6;
            }
          }
        });
        const fixedArray =  [];
        if(isIBeacon){
           for(let i = fixedIndex; i < fixedIndex + 16; i++){
            if(uuidArray[i] < 10){
              fixedArray.push(
               '0' + uuidArray[i].toString(16)
              );
            } else
            fixedArray.push(
              uuidArray[i].toString(16)
            );
          }
          if(fixedArray.join('') === this.myCfg.UUID.replace(/-/g, '')){
            this.devices.push(device);
            this.appendLog(Date.now() + ': Found: -' +device.name+ '\n');
          }
        }
    })
  }

   stopScanning() {
    this.appendLog(Date.now() + ': Stopping scan and work cycle...\n');
    this.intervalo.unsubscribe();
    this.controller = 0;
    this.sendEmail();
   } 
  
   async sendEmail(){
    let email = {
      to: this.myCfg.mail,
      cc: this.myCfg.mail,
      attachments: [
        this.file.dataDirectory+'/logger.txt'
      ],
      subject: 'iBeacon Scanner Log - '+Date.now(),
      body: '',
      isHTML: true
    }

    if(email.cc !== '' || email.to !== ''){
      await this.email.open(email);
    }
   }

   async ngOnDestroy(){
    await this.bgGeolocation.stop();
    await this.file.removeFile(this.file.dataDirectory, 'logger.txt');
   }

   async singleMode(){
    this.ble.startScan([]).subscribe(
      device => this.onDeviceDiscovered(device)
    )

    setTimeout(() => {
      this.ble.stopScan().then(async () => {
        let myDate = new Date();
      this.timestamp = this.datepipe.transform(myDate, 'yyyy/MM/dd-hh:mm:ss a', 'UTC +2');
   
       console.log(this.devices);
       this.devMACs = this.devices.map((e) => {
        return e.id;
      });
      console.log(this.devMACs);
      if(this.devMACs.length > 0){
       await this.http.sendRequest(this.myCfg.API, {
         method: 'post',
         data: {
           "type": 'Feature',
           "properties": {
             "desc": 'A GeoJSON',
             "session": this.myCfg.ID,
             "ns": this.ns,
             "timestamp": this.timestamp,
             "beacons": this.devMACs
           },
           "geometry": {
             "type": 'Point',
             "coordinates": [this.latitud, this.longitud]
           }
         }
       }).then(response => {
         if(response){
           console.log(response);
           this.ns++;
           this.devMACs = [];
           this.testMessage = 'Single test Done!';
           this.appendLog(Date.now() + ': Scan result sent successfully...\n');
         }
       }).catch(response => {
         console.log(response);
         console.log(response.error);
       });
      }
      })
    }, this.scanTime*1000)
  }
}
