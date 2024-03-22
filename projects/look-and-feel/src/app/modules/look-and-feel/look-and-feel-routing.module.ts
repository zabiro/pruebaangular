import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookAndFeelComponent } from './look-and-feel.component';

const routes: Routes = [
  {
    path: '',
    component: LookAndFeelComponent,
    loadChildren: () => import('./child-routes-look-and-feel.module').then((m) => m.ChildRoutesLookAndFeelModule )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookAndFeelRoutingModule { }
