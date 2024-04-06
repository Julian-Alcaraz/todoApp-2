import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import { LabsComponent} from './pages/labs/labs.component'
import { AppComponent } from './app.component';



export const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent // podria cambiar esto
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  },
];
