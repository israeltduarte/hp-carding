import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card.component';
import { ListCardsComponent } from './pages';

const routes: Routes = [
  { path: '', component: ListCardsComponent },
  // { path: 'add', component: NewCardComponent },
  { path: 'list', component: ListCardsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
