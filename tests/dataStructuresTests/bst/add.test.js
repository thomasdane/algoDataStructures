import {Bst} from '../../../dataStructures/bst.js'

test('Add_WhenEmptyBstAndValue_AddsNewRoot', () => {
    //Arrange
    var bst = new Bst();

    //Act
    bst.Add(1);

    //Assert
    expect(bst.root.value).toBe(1);
});


test('Add_WhenEmptyBstAndNull_ReturnsBst', () => {
    //Arrange
    var bst = new Bst();

    //Act
    bst.Add(null);

    //Assert
    expect(bst.root).toBeNull;
});

test('Add_WhenValueLessThanRoot_AddsToLeft', () => {
    //Arrange
    var bst = new Bst();
    bst.Add(2);

    //Act
    bst.Add(1);

    //Assert
    expect(bst.root.left.value).toBe(1);
});


test('Add_WhenValueLessThanRootLeft_AddsToLeft', () => {
    //Arrange
    var bst = new Bst();
    bst.Add(3);
    bst.Add(2);

    //Act
    bst.Add(1);


    //Assert
    expect(bst.root.left.left.value).toBe(1);
});


test('Add_WhenValueMoreThanRoot_AddsToRight', () => {
    //Arrange
    var bst = new Bst();
    bst.Add(2);

    //Act
    bst.Add(3);

    //Assert
    expect(bst.root.right.value).toBe(3);
});

test('Add_WhenValueMoreThanRootRight_AddsToRight', () => {
    //Arrange
    var bst = new Bst();
    bst.Add(2);
    bst.Add(3);

    //Act
    bst.Add(4);


    //Assert
    expect(bst.root.right.right.value).toBe(4);
});

test('Add_WhenLargeTree_AddsToCorrectLocation', () => {
    //Arrange
    const nums = [3,7,4,6,5,1,10,2,9,8];
    const bst = new Bst();

    //Act
    nums.map(num => bst.Add(num));

    //Assert
    expect(bst.root.value).toEqual(3);
    expect(bst.root.left.value).toEqual(1);
    expect(bst.root.left.left).toBeNull();
    expect(bst.root.left.right.value).toEqual(2);
    expect(bst.root.left.right.left).toBeNull();
    expect(bst.root.left.right.right).toBeNull();
    expect(bst.root.right.value).toEqual(7);
    expect(bst.root.right.left.value).toEqual(4);
    expect(bst.root.right.left.left).toBeNull();
    expect(bst.root.right.left.right.value).toEqual(6);
    expect(bst.root.right.left.right.left.value).toEqual(5);
    expect(bst.root.right.left.right.left.right).toBeNull();
    expect(bst.root.right.left.right.left.left).toBeNull();
    expect(bst.root.right.right.value).toEqual(10);
    expect(bst.root.right.right.right).toBeNull();
    expect(bst.root.right.right.left.value).toEqual(9);
    expect(bst.root.right.right.left.right).toBeNull();
    expect(bst.root.right.right.left.left.value).toEqual(8);
    expect(bst.root.right.right.left.left.right).toBeNull();
    expect(bst.root.right.right.left.left.left).toBeNull();
});
