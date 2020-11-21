console.log("Hallo Winc Academy studenten");
/*let sum = 1230941 * 1823794;
console.log(sum);
let division = 637263 / 54;
console.log(division);*/
// dit is een regel comment met shortcut cmd + k + c

// let myAge = 19;

// if (myAge > 30) {

//     console.log("you are over 30!");

// } else if (myAge > 20) {
//     console.log("you are over 20!");

// } else if (myAge > 10) {
//     console.log("you are over 10!");

// } else {
//     console.log("you are not over 10!")
// }

const yourAge = 29;
const isFemale = false;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 120;

if (yourAge >= 18) {
    console.log("Je bent 18 jaar of ouder en mag naar binnen");
} else {
    console.log("Je bent nog geen 18 jaar en mag niet naar binnen");
}

if (yourAge >= 18 && <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Pech gehad!");
}

if (name === "Sarah" || "Bram") {
    console.log("Gefeliciteerd! Je krijgt een gratis biertje!");
} else {
    console.log("Jij mag gewoon voor je biertje betalen");
}

if (totalAmount > 25) {
    console.log("Je krijgt gratis (vega)bitterballen!");
} else if (totalAmount > 50) {
    console.log("Je krijgt gratis portie nachos!");
} else (totalAmount > 100) {
    console.log("Je krijgt een gratis fles champagne");
}


if (isFemale) {
    console.log("Welkom op de ladiesnight");
} else {
    console.log("Je zult op een andere avond terug moeten komen");
}


if (driverStatus === "bob") {
    console.log("Je bent de bob en mag rijden")
} else {
    console.log("Je bent niet de bob en mag niet rijden");
}
