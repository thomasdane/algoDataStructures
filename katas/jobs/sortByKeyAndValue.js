/*
Let 'name-number' to be a string that consists of name and cardinal number.
Sort list of name-numbers by name and value of the cardinal number.

You may assume cardinal numbers are positive integers.

Example:
input: ['John Five', 'John One', 'Alex Six', 'John Thirty-Three']
output: ['Alex Six', 'John One', 'John Five', 'John Thirty-Three']
*/
class NameNumber {
  constructor(element){
    this.original = element;
    this.name = element.split(' ')[0];
    this.number = to_int(element.split(' ')[1]);
  }

  static get MAPPING() {
    return {
      'One': 1,
      'Two': 2,
      //...,
      'Nine': 9,
      'Ten': 10,
      'Eleven': 11,
      //...,
      'Nineteen': 19,
      'Twenty': 20,
      //...,
      'Ninety': 90,
    }
  }

  static get MULTIPLIERS() {
    return {
      'Hundred': 100,
      'Thousand': 1000,
      'Million': 1000000,
    }
  }

  // 234,567 = Two-Hundred-Thirty-Four-Thousand-Five-Hundred-Sixty-Seven
  // 23,000 = Twenty-Three-Thousand

  to_int(cardinal) {
    //split cardinal on hyphen
    var cardinals = cardinal.split('-');

    let operand;
    let multiplier;
    let result;


    for(let i =0; i < cardinals.length; i++){  // 5,023,000 = 'Five-Million-Twenty-Three-Thousand'
      let target = cardinals[i];

      if(MAPPING[target] !== null){
        operand += MAPPING[target]; // 5
      }

      if(MULTIPLIERS[target]!= null){
        multiplier = MULTIPLIERS[target];
        result += multiplier * operand;
        operand = 0;
      }

      result += operand;  // 23,004
    } 

    return result;   
  }
}

const input = ['John Five', 'John One', 'Alex Six', 'John Thirty-Three'];

const namesNumbers = input.map(function(el){ // el = 'John Five'
  return new NameNumber(el);
});


const foo = namesNumbers.sort(function(a,b) {
  if(a.name < b.name) {
    return -1;
  }

  if(b.name < a.name) {
    return 1;
  }

  if(a.number < b.number){
    return -1;
  }

  if(b.number < a.number) {
    return 1;
  }

  return 0;
});

/*
array.sort(function(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
*/


//key is index of array
//'john five'.
//name --> john
//number --> 5 