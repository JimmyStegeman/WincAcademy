//A find spiderman 

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = superheroes.find((superhero) => {
    return superhero.name === "Spiderman"
});

console.log(findSpiderMan)

//B
const values = [1, 2, 3]

const doubleArrayValues = values.forEach((value) => {
    return value * 2
});

console.log(doubleArrayValues)

// result should be [2, 4, 6]

//C
const values = [1, 4, 3, 6, 7, 11]

const containsNumberBiggerThan10 = values.filter((value) => {
    return item >= 10
});

console.log(containsNumberBiggerThan10)

//D