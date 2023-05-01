

// function priceSubCou(obj, obj, obj){
// if (subscription && coupon){
//     let bestPrice= (pricePerRefill*refills*-1.25)-10
//     return bestPrice
// }
// };
// function priceSub(obj, obj, obj){
// if (subscription){
//     let subPrice=(pricePerRefill*refills*-1.25)
//     return subPrice
// }
// };
// function priceCou(obj, obj, obj){
// if (coupon){
//     let couPrice=(pricePerRefill * refills) -10
//     return couPrice
// }
// };


//TRY DOING A FUNCTION PER PERSOM
//ADD OBJECT FOR  PARAMETER
//USE A FOR LOOP WITH IF ELSE,ELSE
//  if  has both subscription and coupon return pricePerRefill * refills * -1.25 -10
//function if subscription return pricePerRefill * refills * -1.25
//function if coupon return pricePerRefill * refills & -10
//return equation for whatever is true
//then call
//add a message 
function priceTimmy() {
    for (let i = 0; i < timmy.length; i++) {
        if (subscription && coupon) {
            let bestPrice = (pricePerRefill * refills * -1.25) - 10
            console.log("Timmy's price is" + bestPrice)
            return bestPrice
        } else if (subscription) {
            let subPrice = (pricePerRefill * refills * -1.25)
            console.log("Timmy's price is" +subPrice)
            return subPrice
        }
        else {
            let couPrice = (pricePerRefill * refills) - 10
            console.log("Timmy's price is" +couPrice)
            return couPrice
        }
    }
};
function priceSarah() {
    for (let i = 0; i < sarah.length; i++) {
        if (subscription && coupon) {
            let bestPrice = (pricePerRefill * refills * -1.25) - 10
            console.log("Sarah's price is"+bestPrice)
            return bestPrice
        } else if (subscription) {
            let subPrice = (pricePerRefill * refills * -1.25)
            console.log("Sarah's price is"+subPrice)
            return subPrice
        }
        else {
            let couPrice = (pricePerRefill * refills) - 10
            console.log("Sarah's price is"+couPrice)
            return couPrice
        }
    }
};

function priceRocky() {
    let bestPrice;

    for (const price in rocky) {
        if (rocky.subscription && rocky.coupon) {
            bestPrice =(rocky.pricePerRefill * rocky.refills* -1.25) - 10
        } else if (rocky.subscription) {
            bestPrice = (rocky.pricePerRefill * rocky.refills * -1.25)
        }
        else {
            bestPrice = (rocky.pricePerRefill * rocky.refills) - 10
        }
        return bestPrice

    }
    console.log("Rockey's total is " + bestPrice)

};

//calling functions

priceTimmy()
priceSarah()
priceRocky()
