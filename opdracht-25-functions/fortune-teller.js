const tellFortune = function (jobTitle, geoLocation, partner, numberOfKids) {
    let future =
        "You will be a " +
        jobTitle +
        " in " +
        geoLocation +
        " and married to " +
        partner +
        " with " +
        numberOfKids +
        " kids.";
    console.log(future);
};

tellFortune("journalist", "london", "Tim", 2);
tellFortune("actor", "paris", "Max", 0);
tellFortune("writer", "mexico", "joan", 200);