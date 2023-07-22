export class Card {
  constructor(
    public id: number,
    public type: string,
    public name: string,
    public quantity: number,
    public imageUrl: string | null,
    public hp: number | null,
    public magic: number | null,
    public description: string | null,
    public observation: string | null,
    public isAnimagus: boolean | null,
    public isDarkWizard: boolean | null,
    public usesBroomstick: boolean | null,
    public canUseMagicWandless: boolean | null,
    public makesPotions: boolean | null,
    public belongsToDumbledoresArmy: boolean | null,
    public belongsToOrderOfThePhoenix: boolean | null
  ) {}
}
