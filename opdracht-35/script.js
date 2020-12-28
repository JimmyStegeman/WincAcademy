//a
// const addTheWordCool = ["nice", "awesome", "geweldig"];
// //addTheWordCool.push("cool");
// console.log(addTheWordCool.push("cool"))

const addTheWordCool = function (array) {
    array.push("cool");
    return array;
};

console.log("Add cool: " + addTheWordCool(["nice", "awesome", "geweldig"]));


//b
// const amountOfElementsInArray = ["appels", "peren", "citroenen"];
// console.log(amountOfElementsInArray.length);

const amountOfElementsInArray = function (array) {
    return array.length;
}

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

//c
// const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
// console.log(selectBelgiumFromBenelux[0]);

const selectBelgiumFromBenelux = function (array) {
    return array[0];
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//d
//const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];
//console.log(lastElementInArray[lastElementInArray.length - 1]);

const lastElementInArray = function (array) {
    return array[array.length - 1];
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//e
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
    //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
    const newArray = array.slice(1, 4);
    console.log("Nieuwe array: ", newArray, "De onaangetaste array", array);
    return newArray;
};

const impeachTrumpSplice = function (array) {
    const removedElement = array.splice(0, 1);
    console.log(
        "removed element:",
        removedElement,
        "De mutated array, Trump is missing:",
        array
    );
    return array;
};

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

//f
const stringsTogether = function (array) {
    return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

//g
const combineArrays = function (array1, array2) {
    return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));