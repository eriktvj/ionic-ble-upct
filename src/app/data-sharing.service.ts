import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private dataSource = new BehaviorSubject(null);

  dataModifications = this.dataSource.asObservable();

  constructor() { }

  dataSend(data){
    this.dataSource.next(data);
  }
}
