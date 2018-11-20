function first_by_key(key, order, records) {
    const completeRecords = addMissingRecords(key, records); 
    const matchingIndex = getMatchingIndex(key, order, completeRecords);
    return records[matchingIndex];
}

function min_by_key(key, records) { 
    return first_by_key(key, "asc", records);
}

// Helper functions

function addMissingRecords(key, records){ 
    const implicitRecord = {[key]: 0};
    return records.map(record => key in record ? record : implicitRecord);
}

function getMatchingIndex(key, order, input){

    let matchingIndex = 0;
    const callback = getComparisonFunction(order);

    input.reduce((current, next, index) => {
        const winner = compare(current, next, callback, key);
        const isNewAnswer = winner[key] !== current[key];
        if(isNewAnswer) matchingIndex = index;
        return winner;
    });

    return matchingIndex;
}

function getComparisonFunction(order){
    const isAscending = order === "asc";
    return isAscending ? Math.min : Math.max;
}

function compare(first, second, callback, key) {
    const result = callback(first[key], second[key]);
    const isFirst = result === first[key];
    return isFirst ? first : second;
}
  
// Tests
function test_first_by_key() {
    let example1 = [{ a: 1 }],
        example2 = [{ b: 1 }, { b: -2 }, { a: 10 }],
        example3 = [{}, { a: 10, b: -10 }, {}, { a: 3, c: 3 }]

    assert_equal(first_by_key("a", "asc", example1), example1[0])
    assert_equal(first_by_key("a", "asc", example2), example2[0]) 
    assert_equal(first_by_key("a", "desc", example2), example2[2])
    assert_equal(first_by_key("b", "asc", example2), example2[1])
    assert_equal(first_by_key("b", "desc", example2), example2[0])
    assert_equal(first_by_key("a", "desc", example3), example3[1])

    console.log("Finished: test_first_by_key")
}
  
test_first_by_key() 
  
function test_min_by_key() {
    let example1 = [{ a: 1, b: 2 }, { a: 2 }],
        example2 = [{ a: 2 }, { a: 1, b: 2 }],
        example3 = [{}],
        example4 = [{ a: -1 }, { b: -1 }]

    assert_equal(min_by_key("a", example1), example1[0])
    assert_equal(min_by_key("a", example2), example2[1])
    assert_equal(min_by_key("b", example1), example1[1])
    assert_equal(min_by_key("a", example3), example3[0])
    assert_equal(min_by_key("b", example4), example4[1])

    console.log("Finished: test_min_by_key")
}

test_min_by_key()

// Test helper
function assert_equal(actual, expected) {
    if (JSON.stringify(actual) != JSON.stringify(expected)) {
      console.log(`Assertion failed: ${JSON.stringify(actual)} does not match expected ${JSON.stringify(expected)}`)
      //console.trace()
    }
}  