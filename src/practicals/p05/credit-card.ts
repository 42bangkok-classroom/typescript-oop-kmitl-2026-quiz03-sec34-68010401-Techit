export class CreditCard {
    private cardNumber : string = "";
    constructor(accountName : string, cardNumber : string){
        this.cardNumber = cardNumber;
    }

    getCardNumber(){
        return this.cardNumber;
    }

    processPayment(amount : number): boolean{
        return true;
    }

    getPaymentFee(amount : number): number{
        return amount * 0.02;
    }
}
