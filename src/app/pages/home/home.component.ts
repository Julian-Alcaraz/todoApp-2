import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {id: Date.now(),
      title: 'crear proyectos',
      completed: false
    },
    {id: Date.now(),
      title: 'crear proyectos',
      completed: false
    },
    {id: Date.now(),
      title: 'crear proyectos',
      completed: false
    },
  ])
  newTaskCtrl = new FormControl("",{
    nonNullable:true,
    validators:[
      Validators.required,
      Validators.pattern('^\\S.*$'),// no puede comenzar con ' '
      ]
    }
  );


  changeHandlerFormCtrl(){
    if(this.newTaskCtrl.valid){
      const value =this.newTaskCtrl.value.trim()
      this.addTask(value);
      this.newTaskCtrl.setValue("")

    }
  }


  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask =input.value
    this.addTask(newTask);
  }
  addTask(title:string){
    const newTask = {
      id: Date.now(),
      title:title,
      completed:false
    }
    this.tasks.update((tasks)=> [...tasks, newTask])
  }
  deleteTask(index:number){
    this.tasks.update((tasks)=> tasks.filter((task,posicion)=> posicion!=index));
  }
  updateTask(index:number){
    this.tasks.update(tasks => {
      return tasks.map((task,position)=>{
        if(position==index){
          return {
            ...task,
            completed: !task.completed
          }
        }else{
          return task;
        }

      })
    })
  }
}
