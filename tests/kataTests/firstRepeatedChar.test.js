import {firstRepeatedChar, firstRepeatedCharRecurse} from '../../../algoDataStructuresJS/katas/firstRepeatedChar.js';

test("WhenEmpty_ThenNull", () => {
    const input = "";

    const result = firstRepeatedChar(input);

    expect(result).toBeNull();
});

test("WhenSingleChar_ThenNull", () => {
    const input = "a";

    const result = firstRepeatedChar(input);

    expect(result).toBeNull();
});

test("WhenTwoCharsNoMatch_ThenNull", () => {
    const input = "ab";

    const result = firstRepeatedChar(input);

    expect(result).toBeNull();
});

test("WhenTwoCharsMatch_ThenChar", () => {
    const input = "bb";

    const result = firstRepeatedChar(input);

    expect(result[0]).toEqual('b');
});

test("WhenOneMatch_ThenChar", () => {
    const input = "abca";

    const result = firstRepeatedChar(input);

    expect(result[0]).toEqual('a');
});

test("WhenTwoMatch_ThenFirstChar", () => {
    const input = "bcaba";

    const result = firstRepeatedChar(input);

    expect(result[0]).toEqual('b');
});


test("WhenNoMatch_ThenFirstChar", () => {
    const input = "cab";

    const result = firstRepeatedChar(input);

    expect(result).toBeNull();
});


// //////////////////////////////////////////////////

test("WhenEmpty_ThenNull", () => {
    const input = "";

    const result = firstRepeatedCharRecurse(input);

    expect(result).toBeNull();
});

test("WhenSingleChar_ThenNull", () => {
    const input = "a";

    const result = firstRepeatedCharRecurse(input);

    expect(result).toBeNull();
});

test("WhenTwoCharsNoMatch_ThenNull", () => {
    const input = "ab";

    const result = firstRepeatedCharRecurse(input);

    expect(result).toBeNull();
});

test("WhenTwoCharsMatch_ThenChar", () => {
    const input = "bb";

    const result = firstRepeatedCharRecurse(input);

    expect(result[0]).toEqual('b');
});

test("WhenOneMatch_ThenChar", () => {
    const input = "abca";

    const result = firstRepeatedCharRecurse(input);

    expect(result[0]).toEqual('a');
});

test("WhenTwoMatch_ThenFirstChar", () => {
    const input = "bcaba";

    const result = firstRepeatedCharRecurse(input);

    expect(result[0]).toEqual('b');
});


test("WhenNoMatch_ThenFirstChar", () => {
    const input = "cab";

    const result = firstRepeatedCharRecurse(input);

    expect(result).toBeNull();
});