import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
    ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  colorCtrl= new FormControl
  widthCtrl= new FormControl(50,{validators:[Validators.required,Validators.min(10)]})
  heigthCtrl= new FormControl(50,{validators:[Validators.required,Validators.min(10)]})
  constructor(){
    this.colorCtrl.valueChanges.subscribe({next: (value)=>{console.log(value)}})
    this.widthCtrl.valueChanges.subscribe({next: (value)=>{console.log(value)}})
    this.widthCtrl.valueChanges.subscribe({next: (value)=>{console.log(value)}})
  }



  welcome="Bienvenidos";
  tasks= [
    "APP 1",
    "APP 2",
    "APP 3",
    "APP 4"
  ];
  name= "JULIAN";
  edad= 18;
  disabled=true;
  person={
    name: "julian",
    surname: "Alcaraz",
    edad: 18
  }
// con signals
  nameReactivo = signal("JUlian")
  tasks2=signal ([
    "APP 1",
    "APP 2",
    "APP 3",
    "APP 4"
  ]);

  pulsado(){
    alert("hola")
  }
  change(event:Event){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
    this.nameReactivo.set(input.value)
  }
  keydown(event:KeyboardEvent){
    // console.log(event)
    const input = event.target as HTMLInputElement;
    console.log(input.value)
    this.nameReactivo.set(input.value)

  }
}
