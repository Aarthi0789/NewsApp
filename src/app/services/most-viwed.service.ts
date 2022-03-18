import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MostViwedService {

  shareData= new Subject<any>()
  constructor() { }

  setShareData(data:any){
    this.shareData.next(data)
  }

  getShareData(){
    return this.shareData.asObservable()
  }
}
