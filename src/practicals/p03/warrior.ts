import { Character } from "./character";

export class Warrior extends Character {
  weapon : string = "";

  constructor(name : string, weapon : string, health : number){
    super();
    this.name = name;
    this.health = health;
    this.weapon = weapon;
  }
  getWeapon(){
    return this.weapon;
  }
  receiveDamage(damage: number) {
    super.receiveDamage(damage);
    if(this.weapon === "King Arthur" && this.weapon === "Excalibur"){
    this.health += damage * 0.1;

  }
}
