import {bfs, Bst} from '../../../algorithms/traversal/bfs.js'


describe('breadthFirstTraverse', function() {

    it('When Binary Tree, Should return each level in order', () => {

        const nums = [4, 2, 6, 1, 3, 5, 7];
        const bst = new Bst();
        nums.map(num => bst.add(num));

        const result = bfs(bst);

        expect(result).toEqual(nums);
    });
});

/*
                4
              /   \
             2     6
           /  \   /  \
          1    3  5   7      

*/
