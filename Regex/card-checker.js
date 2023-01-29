//Creating a Regex for a Payment Card

//Function to check the cards
function cardChecker(num){

//Regex Patterns for Different cards

//MasterCard
let Mcard = /^5[1-5][0-9]{16}$/.exec(num)

//VisaCard
let visa = /^4[0-9]{12}(?:[0-9]{3})?$/.exec(num)

//American Express
let Amex = /^3[47][0-9]{13}$/.exec(num)

 if (Mcard != null) {
    console.log("Mastercard")
 } else if (visa != null) {
    console.log("Visa card")
 } else if (Amex != null){
    console.log("American Express card")
 } else {
    console.log("Invalid Card!!")
 }


}

console.log(cardChecker("5212546788907654"))