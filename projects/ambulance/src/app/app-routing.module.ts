import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent},
  { path: 'dashboard', 
    loadChildren:() => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'drivers',
    loadChildren:() => import('./drivers/drivers.module').then((m) => m.DriversModule)},
  { path: 'histories',
  loadChildren:() => import('./histories/histories.module').then((m) => m.HistoriesModule)},
  { path: 'medics',
  loadChildren:() => import('./medics/medics.module').then((m) => m.MedicsModule)},
  { path: 'users',
  loadChildren:() => import('./users/users.module').then((m) => m.UsersModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
