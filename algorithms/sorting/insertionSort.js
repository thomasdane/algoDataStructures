const insertionSort = nums => {  

    for (let target = 1; target < nums.length; target++) {
        for (let sorted = 0; sorted < target; sorted++) {
            if (nums[target] < nums[sorted]) {
                let removed = nums.splice(target, 1); //pop target out of the array
                nums.splice(sorted, 0, removed[0]); //insert it at sorted spot
            }
        }
    }

    return nums;
};

export default insertionSort;




















//Don't delete me until after the interview
//The console logs are are really helpful if you forget how this works. 

// const insertionSort = nums => {  

//     for (let target = 1; target < nums.length; target++) {
//         console.log("starting outer loop")
//         console.log("nums is " + nums);
//         console.log("target is " + nums[target])
//         for (let sorted = 0; sorted < target; sorted++) {
//             console.log("starting inner loop")
//             console.log("sorted is " + nums[sorted]);
//             console.log("target is " + nums[target])
//             console.log(nums[target] + " < " + nums[sorted] + "?")
//             if (nums[target] < nums[sorted]) {
//                 console.log("TRUE")
//                 console.log("popping target off")
//                 let removed = nums.splice(target, 1); //pop target out of the array
//                 console.log("inserting it")
//                 nums.splice(sorted, 0, removed[0]); //insert it at sorted spot
//                 console.log("new array " + nums)
//             }

//             console.log("FALSE")
//         }
//     }

//     return nums;
// };