const findMovies = (flightLength, movies) => {

    const secondMovies = new Set();
    let result = false;

    movies.forEach(movieLength => {
        let timeLeft = flightLength - movieLength;

        if(secondMovies.has(movieLength)) result = true;

        if(timeLeft !== movieLength) secondMovies.add(timeLeft);
    });

    return result;
}

//example

//240, [100, 140] ==> true
//240, [100, 150] ==> false
//240, [120, 120] == false because same movie twice
//optimize for runtime
const flightTime = 240;

const matching = [100, 140];
const expectedTrue = findMovies(flightTime, matching);
console.log(expectedTrue === true);

const noMatch = [100, 150];
const expectedFalse = findMovies(flightTime, noMatch);
console.log(expectedFalse === false);

const matchThree = [120, 100, 20];
const expectedFalseThree = findMovies(flightTime, matchThree);
console.log(expectedFalseThree === false);

const noMatchSame = [120, 120];
const expectedFalseSame = findMovies(flightTime, noMatchSame);
console.log(expectedFalseSame === false);