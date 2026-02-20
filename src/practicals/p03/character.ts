export class Character {
    name : string = "";
    health : number = 100

    getName(){
        return this.name;
    }

    getHealth(){
        return this.health;
    }

    reciveDamage(damage : number){
        this.health -= damage;
    }
}
