const input = [1,2,3,4,5,6];

const badShuffle = input => {
    
    for(let i = 0; i < input.length; i++){
        const randomNumber = Math.floor(Math.random() * input.length);
        const randomElement = input[randomNumber];

        const element = input[i];
        input[i] = randomElement;
        input[randomNumber] = element;
    }

    return input;
};

// bad shuffle can swap any element with any other. 
// it produces n**n possible outcomes. In this case, 27
// because at each step, it generates n possible outcomes
// but the result should be n! or in this case, 6
// so we need a better algorithm that will leave sorted things untouched

const goodShuffle = input => {

    let unshuffled = input.length;

    while (unshuffled > 0) {
        
        //get a random number that is less than the unshuffled elements
        const randomNumber = Math.floor(Math.random() * unshuffled);

        // Decrease counter by 1
        unshuffled--;

        // And swap the last element with it
        let lastElement = input[unshuffled];
        input[unshuffled] = input[randomNumber];
        input[randomNumber] = lastElement;
    }

    return input;

}

console.log(goodShuffle(input))