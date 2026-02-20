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

    getFullName(): string{
        return `${this.Firstname} ${this.Lastname}`;
    }

    setFirstname(value : string): void{
        this.Firstname = value;
    }

    setLastname(value : string): void{
        this.Lastname = value;
    }
}
