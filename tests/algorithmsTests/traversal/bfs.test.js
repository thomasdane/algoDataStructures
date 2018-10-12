import {flattenTree, treeContains, Bst} from '../../../algorithms/traversal/bfs.js'


describe('breadthFirstTraverse', function() {

    it('When flatten Binary Tree, Should return each level in order', () => {

        const nums = [4, 2, 6, 1, 3, 5, 7];
        const bst = new Bst();
        nums.map(num => bst.add(num));

        const result = flattenTree(bst);

        expect(result).toEqual(nums);
    });

    it('When Binary Tree contains, should find', () => {

        const nums = [4, 2, 6, 1, 3, 5, 7];
        const bst = new Bst();
        nums.map(num => bst.add(num));
        const target = 6;

        const result = treeContains(bst, target);

        expect(result).toEqual(target);
    });
});

/*
                4
              /   \
             2     6
           /  \   /  \
          1    3  5   7      

*/
