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
    super.receiveDamage(damage);

    if(this.weapon === "Excalibur"){
      this.health -= damage * 0.1;
    }
  }
}
