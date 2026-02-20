export class Car {
    brand : string = "";
    model : string = "";

    getBrand(){
        return this.brand;
    }

    getModel(){
        return this.model;
    }

    start(){
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    accelerate(){
        console.log(`${this.brand} ${this.model} is accelerating...`);
    }

    brake(){
        console.log(`${this.brand} ${this.model} is braking...`);
    }

    stop(){
        console.log(`${this.brand} ${this.model} is stopping...`);
    }
}
