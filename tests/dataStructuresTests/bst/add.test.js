import Bst from '../../../dataStructures/bst.js';

test('Add_WhenValuAndEmptyTree_ReturnsRootNode', () => {

    let bst = new Bst();

    bst.add(1);

    expect(bst.root.value).toBe(1);
});

test('Add_WhenNoValueAndEmptyTree_ReturnsRootNode', () => {

    let bst = new Bst();

    bst.add(null);

    expect(bst.root).toBeNull;
});


test('Add_WhenValueSmallerThanRoot_AddsToLeft', () => {

    let bst = new Bst();

    bst.add(3);
    bst.add(4);
    bst.add(2);

    expect(bst.left.value).toBe(2);
});


test('Add_WhenValueSameAsRoot_AddsToLeft', () => {

    let bst = new Bst();

    bst.add(3);
    bst.add(3);

    expect(bst.left.value).toBe(3);
});

test('Add_WhenValueSameAsRoot_AddsToLeft', () => {

    let bst = new Bst();

    bst.add(3);
    bst.add(2);
    bst.add(4);

    expect(bst.right.value).toBe(4);
});

