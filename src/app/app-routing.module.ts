import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from './card';

const routes: Routes = [
  { path: '', loadChildren: () => CardModule },
  { path: 'card', loadChildren: () => CardModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
