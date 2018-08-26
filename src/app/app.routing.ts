import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
const AppRoutes : Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'client', component: ClientComponent },
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);