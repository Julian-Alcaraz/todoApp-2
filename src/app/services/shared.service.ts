import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data = new BehaviorSubject<any>(true)
  constructor() { }
  setData(value:any){
    this.data.next(value)
  }
  getData():Observable<any>{
    return this.data .asObservable();
  }





}
