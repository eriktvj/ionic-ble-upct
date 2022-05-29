import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataSharingService } from '../data-sharing.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {

  sessionID: number;
  serviceUUID: string = '00000000-0000-0000-0000-000000000000';
  workCycle: number;
  scanCycle: number;
  apiHttp: string = 'example.com';
  logMail: string = '';

  constructor(public navCtrl: NavController, public data: DataSharingService) { }

  ngOnInit() {
  }


  acceptButton(){
    if (!this.sessionID) this.sessionID = 1;
    if (this.serviceUUID.length != 36) this.serviceUUID = '00000000-0000-0000-0000-000000000000';
    if (!this.workCycle) this.workCycle = 20;
    if (!this.scanCycle) this.scanCycle = 10;
    if (this.apiHttp === 'example.com') this.apiHttp = 'https://test-fake-api-demo.herokuapp.com/dispositivos';

    const myConfig = {
      ID: this.sessionID,
      UUID: this.serviceUUID,
      wCycle: this.workCycle,
      sCycle: this.scanCycle,
      API: this.apiHttp,
      Mail: this.logMail
    };

    this.data.dataSend(myConfig);
    this.navCtrl.navigateForward('/home');
  }
}
