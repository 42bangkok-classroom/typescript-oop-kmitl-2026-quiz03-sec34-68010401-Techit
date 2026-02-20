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
       const Firstname = this.Firstname || "";
       const Lastname = this.Lastname || "";
       return `${Firstname} ${Lastname}` .trim();
    }

    setFirstname(value : string): void{
        this.Firstname = value;
    }

    setLastname(value : string): void{
        this.Lastname = value;
    }
}
