//input name
let person = prompt("Welkom! Wat is je naam?")

//if anything is filled in then reply with greeting
if (person != null) {
    console.log("Hi " + person + "!");
}

//if anything is filled in then reply with greeting
let guessingGame = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");

// random number 
let awnser = Math.floor(Math.random() * 25 + 1);

while (guessingGame !== awnser) {
    let guessingGame = prompt("Voer een nummer in...")
    if (guessingGame == awnser) {
        console.log("GEFELICITEERD! Je hebt het getal geraden!");
        console.log("Dag " + person + ". Tot de volgende keer!");
    } else if (guessingGame > awnser) {
        console.log("Oops! Probeer eens een kleiner getal.");

    } else {
        console.log("Oops! Probeer eens een groter getal. ");
    }

}

