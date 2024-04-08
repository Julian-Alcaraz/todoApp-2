import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component implements OnInit {
    public value=false;
    public data:any;
  constructor( private _sharedService: SharedService){
    
  }
  cambiarData(){
    console.log("cambiar Data comp1"+ this.value)
    this._sharedService.setData(this.value)
  }
  ngOnInit(): void {
    this._sharedService.getData().subscribe({
      next: value=>{
        this.data= value
        console.log("componete1 ", this.data)
      }
     })
  }
}
