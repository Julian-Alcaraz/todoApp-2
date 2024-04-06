import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
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
}
