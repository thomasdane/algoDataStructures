import {generateHashCode, HashTable} from '../../../dataStructures/hashTable.js';

test("WhenSameInput_ThenSameOutput", () => {

    //Arrange
    const firstInput = "foobar";
    const secondInput = "foobar";

    //Act
    const firstOutput = generateHashCode(firstInput,10);
    const secondOutput = generateHashCode(secondInput,10);

    //Assert
    expect(firstOutput).toEqual(secondOutput);
});

test("WhenDifferentInput_ThenDifferentOutput", () => {

    //Arrange
    const firstInput = "foo";
    const secondInput = "bar";

    //Act
    const firstOutput = generateHashCode(firstInput,256);
    const secondOutput = generateHashCode(secondInput,256);

    //Assert
    expect(firstOutput != secondOutput).toBe(true);
});

test("WhenMaxValue_HashLessThanMaxValue", () => {

    //Arrange
    const firstInput = "a much longer strings than the other ones";

    //Act
    const firstOutput = generateHashCode(firstInput,2);

    //Assert
    expect(firstOutput).toBeLessThan(2);
});

//Brian Holt tests

it('add and check', () => {
    const table = new HashTable(255);
    table.add('hi');
    table.add('this is fun');
    table.add('another thing');

    expect(table.check('hi')).toEqual(true);
    expect(table.check('this is fun')).toEqual(true);
    expect(table.check('another thing')).toEqual(true);

    expect(table.check('ih')).toEqual(false);
    expect(table.check('not in the list')).toEqual(false);
    expect(table.check('also not in the list')).toEqual(false);
});