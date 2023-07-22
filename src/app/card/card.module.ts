import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../shared';
import { CardRoutingModule } from './card-routing.module';
import { ListCardsComponent } from './pages';
import { CardComponent } from './pages/card.component';

@NgModule({
  imports: [SharedModule, CardRoutingModule, NgxSpinnerModule],
  declarations: [CardComponent, ListCardsComponent],
})
export class CardModule {}
