// make a sandwich
// step 1 put butter on the sandwich
// step 2 add cheese to the sandwich 
// step 3 fold the sanwich for a very Dutch experience

let makeCheeseSandwich = function () {
    console.log("Put butter on sandwich");
    console.log("Add cheese to the sandwich");
    console.log("Fold the sanwich for a very Dutch experience");

};

makeCheeseSandwich();

//parameter after function, hier is de functie 'gedeclareerd'
let makeSandwich = function (topping) {
    console.log("Put butter on sandwich");
    console.log("Add " + topping + " to sandwich");
    console.log("Fold the sanwich for a very Dutch experience");
    console.log("There you go, a sanwich with..." + topping);

};

makeSandwich("hagelslag");
//argument - hier is de functie 'called'   

makeSandwich("pindakaas");
//argument - hier is de functie 'called'

// //optie 1
// let calculateDiscountedPrice = function (totalAmount, discount) {
//     console.log(Math.round(totalAmount - discount))
// }

// calculateDiscountedPrice(70, 2.5)

//optie 2
// let calculateDiscountedPrice = function (totalAmount, discount) {
//     return Math.round(totalAmount - discount);
// }
// console.log(calculateDiscountedPrice(70, 2.5));

let discountedPrice = function (totalAmount, discount) {
    if (totalAmount > 25) {
        console.log(Math.round(totalAmount - discount));
    } else {
        console.log(totalAmount);
    }
};
discountedPrice(45, 2.3)


