/*

write a function to tell us if a full deck of cards shuffledDeck 
is a single riffle of two other halves half1 and half2.

We'll represent a stack of cards as an array of integers in the range 1..52 
(since there are 52 distinct cards in a deck).

*/

const amy = [];

for(let i = 1; i <= 52; i++){
    amy.push(i);
}

console.log(amy)


const isSingleRiffle = (firstHalf, secondHalf, shuffled) => {
    //first half [1,2,3]
    //second half [4,5,6]
    //shuffled could be

    //One riffle
    //1,4,2,5,3,6
    //1,2,4,5,3,6
    //1,2,3,4,5,6
    //4,5,6,1,2,3

    //Two riffle
    //1,5,4,3,2,6
    //1,2,5,3,4,6
    //1,2,3,4,5,6
    //4,5,6,1,2,3
}


/*

cut the deck into halves half1 and half2
grab a random number of cards from the top of half1 (could be 0, must be less than or equal to the number of cards left in half1) and throw them into the shuffledDeck
grab a random number of cards from the top of half2 (could be 0, must be less than or equal to the number of cards left in half2) and throw them into the shuffledDeck
repeat steps 2-3 until half1 and half2 are empty.

*/