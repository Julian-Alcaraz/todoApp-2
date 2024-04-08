import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabsComponent } from './pages/labs/labs.component';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { SharedService } from './services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    LabsComponent,
    Comp1Component,
    Comp2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  public data:any=true;
  constructor( private _sharedService: SharedService){
  this.data=true
 
  }
  ngOnInit(): void {
    this._sharedService.getData().subscribe({
      next: value=>{
        this.data= value
        console.log("componete app ", this.data)
      }
     })
  }


}
