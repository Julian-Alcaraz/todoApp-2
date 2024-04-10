import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit, computed, effect, inject, signal } from '@angular/core';
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
export class HomeComponent implements OnInit {
  tasks = signal<Task[]>([])
  filter = signal<'all'|'pending'|'completed'>("all")
  tasksByFilter= computed(()=>{
    const filter=this.filter();
    const tasks=this.tasks();
    if (filter=="pending"){
      return tasks.filter(task => !task.completed)
    }
    if (filter=="completed"){
      return tasks.filter(task => task.completed)
    }
  
    return tasks
  })
  newTaskCtrl = new FormControl("",{
    nonNullable:true,
    validators:[
      Validators.required,
      Validators.pattern('^\\S.*$'),// no puede comenzar con ' '
      ]
    }
  )
  editingTaskCtrl = new FormControl("editingtask",{
    nonNullable:true,
    validators:[
      Validators.required,
      Validators.pattern('^\\S.*$'),// no puede comenzar con ' '
      ]
    }
  );
  injector = inject(Injector)

  ngOnInit(){
    const storage = localStorage.getItem('tasks')
    if(storage){
      const tasks = JSON.parse(storage)
      this.tasks.set(tasks)
    }
    this.trackTasks()
  }
  trackTasks(){
    effect(()=>{
      const tasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, {injector: this.injector})
  }
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
          return {
            ...task,
            editing:false
          };
        }

      })
    })
  }
  updateTaskEditingMode(index:number ){
    this.tasks.update(tasks => {
      return tasks.map((task,position)=>{
        if(position==index && !task.completed){
          return {
            ...task,
            editing: true
          }
        }else{
          return {...task,editing:false};
        }

      })
    })
  }
  updateTaskText(index:number, event: Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.tasks.update(tasks => {
      return tasks.map((task,position)=>{
        if(position==index){
          return {
            ...task,
            title: value ,
            editing: false
          }
        }else{
          return task
        }

      })
    })
  }
  changeFilter(filter:'all'|'pending'|'completed'){
    this.filter.set(filter)
  }
}
