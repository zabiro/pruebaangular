import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:'main',
    component: MainComponent,
    loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
  },
  { path: "**", redirectTo: "/main", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
