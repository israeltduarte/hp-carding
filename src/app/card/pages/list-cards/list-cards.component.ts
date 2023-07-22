import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Card } from 'src/app/core/models/Card';
import { CardService } from 'src/app/core/services';
import data from '../../../../api/data.json';

@Component({
  selector: 'app-list-company',
  providers: [CardService],
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css'],
})
export class ListCardsComponent implements OnInit {
  cards: Card[] = [];
  searchText: string = '';
  cardStates: boolean[] = [];
  shouldShow: boolean = false;

  @ViewChild('dataToExport', { static: false })
  public dataToExport!: ElementRef;

  constructor(
    private cardService: CardService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.cards = this.getAllCards();
    this.cardStates = new Array(this.filteredCards.length).fill(false);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.shouldShow = true;
      this.spinner.hide();
    }, 0);
  }

  toggleCardState(index: number): void {
    this.cardStates[index] = !this.cardStates[index];
  }

  getAllCards() {
    return data.cards;
  }

  get filteredCards(): Card[] {
    return this.cards.filter((card: Card) => {
      const searchTerm = this.searchText.toLowerCase();

      let hasAttribute: boolean = this.searchText.startsWith('--');
      if (hasAttribute) {
        let attributeEnd = this.searchText.indexOf(' ');
        let attribute = this.searchText.substring(2, attributeEnd);
        let content = this.searchText.substring(attributeEnd + 1);

        switch (attribute) {
          case 'id':
            return card.id == parseInt(content);
          case 'name':
            return card.name.toLowerCase().includes(content);
          case 'type':
            return card.type.toLowerCase().toString().includes(content);
          case 'hp':
            return card.hp == parseInt(content);
          case 'magic':
            return card.magic == parseInt(content);
          case 'description':
            return card.description?.toString().includes(content);
          case 'isAnimagus':
            return card.isAnimagus;
          case 'isDarkWizard':
            return card.isDarkWizard;
          case 'usesBroomstick':
            return card.usesBroomstick;
          case 'canUseMagicWandless':
            return card.canUseMagicWandless;
        }
      }

      return (
        card.id.toString().includes(searchTerm) ||
        card.type.toLowerCase().includes(searchTerm) ||
        card.name.toLowerCase().includes(searchTerm) ||
        card.hp?.toString().includes(searchTerm) ||
        card.magic?.toString().includes(searchTerm) ||
        card.description?.toLowerCase().includes(searchTerm) ||
        card.isAnimagus?.toString().includes(searchTerm) ||
        card.isDarkWizard?.toString().includes(searchTerm) ||
        card.usesBroomstick?.toString().includes(searchTerm) ||
        card.canUseMagicWandless?.toString().includes(searchTerm) ||
        card.makesPotions?.toString().includes(searchTerm) ||
        card.belongsToDumbledoresArmy?.toString().includes(searchTerm) ||
        card.belongsToOrderOfThePhoenix?.toString().includes(searchTerm)
      );
    });
  }
}
