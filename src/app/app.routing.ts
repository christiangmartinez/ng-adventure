import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);