import {Bst} from '../../../dataStructures/bst.js'
import {AddToBst} from '../../../dataStructures/bst.js'

test('Add_WhenEmptyBstAndValue_AddsNewRoot', () => {
    //Arrange
    var bst = new Bst();

    //Act
    var actual = AddToBst(bst, 1);

    //Assert
    expect(actual.root.value).toBe(1);
});


test('Add_WhenEmptyBstAndNull_ReturnsBst', () => {
    //Arrange
    var bst = new Bst();

    //Act
    var actual = AddToBst(bst, null);

    //Assert
    expect(actual.root).toBeNull;
});

test('Add_WhenValueLessThanRoot_AddsToLeft', () => {
    //Arrange
    var bst = new Bst();
    AddToBst(bst, 2);

    //Act
    var actual = AddToBst(bst, 1);

    //Assert
    expect(actual.root.left.value).toBe(1);
});


// test('Add_WhenValueLessThanRootLeft_AddsToLeft', () => {
//     //Arrange
//     var bst = new Bst();
//     AddToBst(bst, 3);
//     AddToBst(bst, 2);

//     //Act
//     var actual = AddToBst(bst, 1);
//     //console.log(bst);

//     //Assert
//     expect(actual.root.left.left).toBe(1);
// });