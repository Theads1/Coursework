const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//Do 1 function per possible price 
// Use object as a parameter??
//        OBJECTS
//      1.calculate original total
//      2.if statements for subscription total
//      2.if statement for coupon total

function base(obj) {
    return obj["pricePerRefill"] * obj["refills"];
};
 let firstPrice= base(rocky)                                  //<=== Change to same name/object to test
// console.log(firstPrice)

//try 2.subscription *-.25
function sub(obj, firstPrice){
    let newPrice;
 if (obj["subscription"]===true){
    newPrice= firstPrice - (firstPrice * .25)
 }
 else{ 
    newPrice = firstPrice
        }
        return newPrice
};
let subPrice = sub(rocky, firstPrice)                        //<=== Change to same name/object to test
// console.log(subPrice)

//try 3. coupon -10
function newTotal(obj, subPrice){
    let finalPrice;
if (obj["coupon"]===true){
       finalPrice= subPrice - 10
    } else {
        finalPrice= subPrice
    }
    return finalPrice
   };
    let total = newTotal(rocky, subPrice)                      //<=== Change to same name/object to test
//    console.log(coupon)

   //the totals are correct, you just have to change all names / obj. how to automate? idk

console.log("Your grand total is $" + total)            