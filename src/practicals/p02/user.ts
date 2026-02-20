export class User {
    Firstname : string = "";
    Lastname : string = "";
    private age : number = 0;
    static BIRTH_YEAR : number = 2000;

    setAge(value : number){
        this.age = value;
    }

    getAge(){
        return this.age;
    }

    getFullName(){
        console.log(`${this.Firstname} ${this.Lastname}`);
    }

    setFirstname(value : string){
        this.Firstname = value;
    }

    setLastname(value : string){
        this.Lastname = value;
    }
}
