import { PaymentMethod } from "./payment-method"; 

export interface Payable {
  processPayment(amount: number): boolean{
    if(amount <= 0){
        console.log("Invalid amount. Payment failed.");
        return false;
    }
    console.log(`Payment of $${amount} processed successfully.`);
    return true;
  }
  getPaymentFee(amount: number): number{
    if(amount <= 0){
        console.log("Invalid amount. No fee to calculate.");
        return 0;
    }
    const fee = amount * 0.01;
    console.log(`Payment fee for $${amount} is $${fee}.`);
    return fee;
  }
}
