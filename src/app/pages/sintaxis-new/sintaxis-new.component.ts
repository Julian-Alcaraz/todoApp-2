import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sintaxis-new',
  standalone: true,
  imports: [],
  templateUrl: './sintaxis-new.component.html',
  styleUrl: './sintaxis-new.component.css'
})
export class SintaxisNewComponent {
    name= signal("Julian")
    tasks= [
      "APP 1",
      "APP 2",
      "APP 3",
      "APP 4"
    ];
    
}
