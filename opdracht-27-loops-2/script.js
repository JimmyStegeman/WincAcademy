const colors = ["yellow", "blue", "red", "orange"];

//while loop

let i = 0
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

//for loop

for (let i = 0; i < colors.length; i++) {
    console.log(colors);
}

//array forEach
colors.forEach((color) => console.log(color));

// 1. mijn while loop neemt 5 regels in beslag en mijn for loop 3 regels
// 2. 1 regel
// 3. leesbaarder door een regel ook eenvoudiger geen gebruik van extra parameter i, maar direct de inhoud van de array aanspreken.