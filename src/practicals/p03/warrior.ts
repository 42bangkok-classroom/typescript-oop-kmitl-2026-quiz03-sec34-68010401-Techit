import { Character } from "./character";

export class Warrior extends Character {
  weapon : string = "";

  constructor(name : string, weapon : string, health : number){
    super(name, health);
    this.weapon = weapon;
  }
  getWeapon(){
    return this.weapon;
  }
  receiveDamage(damage: number) {
    const reducedDamage = damage * 0.9; // Reduce damage by 10%
    super.receiveDamage(reducedDamage);
    this.health -= reducedDamage;
    }
  }
