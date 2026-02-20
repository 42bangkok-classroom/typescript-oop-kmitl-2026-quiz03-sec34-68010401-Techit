import { EWallet } from "./ewallet";
import { CreditCard } from "./credit-card";
export class PaymentMethod {
    protected accountName : string = "";

    constructor(accountName : string){
        this.accountName = accountName;
    }
    
    getAccountName(){
        return this.accountName;
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
        const fee = amount * 0.01;
        console.log(`Payment fee for $${amount} is $${fee}.`);
        return fee;
    }

}
