let person = {
    name: 'Jimmy',
    age: 29,
    evaluations: [7, 10, 9]
};

console.log(person);

console.log(person.name);

console.log(person.age);

console.log(person['name']);

console.log(person['age']);

console.log(person.evaluations);

let selectedColors = ["groen", "blauw", "rood"];

console.log(selectedColors);

console.log(selectedColors.length);

console.log(selectedColors[0]);

console.log(selectedColors[selectedColors.length - 1]);

selectedColors.push("geel");
// selectedColors[2] = "paars"; vervangt de derde in de array

console.log(selectedColors);

selectedColors.push(5);

console.log(selectedColors);

let greetingTotal = {
    greeting: "Hi ik ben een object",
}

selectedColors.push(greetingTotal);

console.log(selectedColors);

console.log(selectedColors[selectedColors.length - 1]);