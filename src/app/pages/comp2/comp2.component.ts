import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component implements OnInit {
    public value=true;
    public data:any;
  constructor( private _sharedService: SharedService){
   
  }
  cambiarData(){
    console.log("cambiar Data comp2"+ this.value)
    this._sharedService.setData(this.value)
  }
  ngOnInit(): void {
    this._sharedService.getData().subscribe({
      next: value=>{
        this.data= value
        console.log("componete2 ", this.data)
      }
     })
  }
}
