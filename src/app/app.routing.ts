import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from 'app/components/home/home.component';

const appRoutes : Routes = [
   {
     path:'',
     redirectTo: '/',
     pathMatch: 'full'
   },
   {
     path: '',
     component: HomeComponent
   },
];

 export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);