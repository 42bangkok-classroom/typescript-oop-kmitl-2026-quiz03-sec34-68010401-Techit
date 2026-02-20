export class CreditCard {
    private cardNumber : string = "";
    constructor(accountName : string, cardNumber : string){
        this.cardNumber = cardNumber;
    }

    getCardNumber(){
        
    }

    processPayment(amount : number): boolean{
        if(amount <= 0){
            console.log("Invalid amount. Payment failed.");
            return false;
        }
        console.log(`Payment of $${amount} processed successfully.`);
        return true;
    }

    getPaymentFee(amount : number): number{
        if(amount <= 0){
            console.log("Invalid amount. No fee to calculate.");
            return 0;
        }
        const fee = amount * 0.02;
        console.log(`Payment fee for $${amount} is $${fee}.`);
        return fee;
    }
}
