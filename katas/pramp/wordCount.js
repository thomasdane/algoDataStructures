function wordCountEngine(document) {
    const mapping = createMapping(document);
    return sortWords(mapping);
}

function createMapping(document){

    const words = document.split(' ');
    const mapping = new Map();

    words.forEach(word => {

        if(word === '') return;

        const validWord = format(word);
    
        if(mapping.has(validWord)){
            const value = parseInt(mapping.get(validWord));
            const increment = value + 1;
            mapping.set(validWord, increment.toString());
        } else {
            mapping.set(validWord, "1");
        }
    });

    return mapping;
}

function sortWords(mapping){

    const sorted = [];
    const output = [];

    for(const word of mapping){
        const count = word[1];
        const current = sorted[count] || [];
        current.push(word);
        sorted[count] = current; 
    }

    for(let i = sorted.length - 1; i > 0; i--){
        sorted[i].forEach(word => {
            output.push(word);
        });
    }

    return output;
}

function format(word){
    const lower = word.toLowerCase();
    const pattern = /[a-z]/g;
    const withoutPunctuation = lower.match(pattern);
    const result = withoutPunctuation.join('');
    return result;
}

let input = "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ";
let expected = [["and","4"],["every","3"],["is","3"],["a","3"],["quotation","3"],["all","2"],["book","1"],["house","1"],["out","1"],["of","1"],["forests","1"],["mines","1"],["stone","1"],["quarries","1"],["man","1"],["from","1"],["his","1"],["ancestors","1"]];
let actual = wordCountEngine(input);
console.log(expected.toString() === actual.toString())

input = "hello world";
expected = [['hello', 1], ["world", 1]];
actual = wordCountEngine(input);
console.log(expected.toString() === actual.toString())

input = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
expected = [ ["practice", "3"], ["perfect", "2"],
["makes", "1"], ["youll", "1"], ["only", "1"], 
["get", "1"], ["by", "1"], ["just", "1"] ];
actual = wordCountEngine(input);
console.log(expected.toString() === actual.toString())