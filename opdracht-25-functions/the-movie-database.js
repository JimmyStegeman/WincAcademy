const movieDatabase = {
    title: "Casablanca",
    duration: 105,
    stars: ["Humprey Bogart", "Ingrid Bergman"]
};

const movieInfo = function (movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars + ".")
}

// movie wordt de variabele/argument dat verwijst naar het block movieDatabase

movieInfo(movieDatabase);
// need to call the function