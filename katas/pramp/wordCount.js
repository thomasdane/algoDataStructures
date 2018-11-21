function wordCountEngine(document) {
    const mapping = createMapping(document); //O(n)
    const unsortedWords = [...mapping]; //O(n)
    const sortedWords = sortWords(unsortedWords);
    return sortedWords;
  }
  
  function sortWords(unsorted){
    const foo = unsorted;
    
    foo.sort((first, second) => {
      const firstCount = first[1];
      const secondCount = second[1];
      
      if(firstCount > secondCount) {
        return -1;
      } else if (firstCount < secondCount) {
        return 1;
      } else { //same
        return -1;
      }
    });
    
    return foo;
  }
  
  function createMapping(document){
  
      const words = document.split(' ');
      const mapping = new Map();
    
      words.forEach(word => {
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
  
  function format(word){
    const lower = word.toLowerCase();
    const pattern = /[a-z]/g;
    const withoutPunctuation = lower.match(pattern);
    const result = withoutPunctuation.join('');
    return result;
  }
  
