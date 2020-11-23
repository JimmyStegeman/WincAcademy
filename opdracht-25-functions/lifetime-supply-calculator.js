const calculateSupply = function (age, amountPerDay) {
    const maxAge = 100;
    const totalNeeded = amountPerDay * 365 * (maxAge - age);
    let message =
        "You will need " +
        totalNeeded +
        " cups of tea to last until the ripe old age of " +
        maxAge;
    console.log(message);

};

calculateSupply(29, 3);
calculateSupply(30, 2);
calculateSupply(59, 1);