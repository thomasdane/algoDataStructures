function findBusiestPeriod(data) {
    
    const periods = data;

    let existingCount = 0;
    let maxCount = 0;
    let matchingIndex = 0;
    let result = [maxCount, matchingIndex]

    
    periods.forEach((currentPeriod, index) => {

        let currentPeriodTimeStamp = currentPeriod[0];
        let currentPeriodCount = currentPeriod[1];
        let currentPeriodAction = currentPeriod[2];

        let nextPeriod = periods[index+1] || [];
        let nextPeriodTimestamp = nextPeriod[0];

        existingCount = updateCount(existingCount, currentPeriodCount, currentPeriodAction);
        
        if(isEndOfSection(currentPeriodTimeStamp, nextPeriodTimestamp)) {
            if(isNewMax(existingCount, maxCount)){
                maxCount = existingCount;
                matchingIndex = index;
            } 
        } 
    });

    const matchingPeriod = data[matchingIndex];
    const matchingTimeStamp = matchingPeriod[0];
    return matchingTimeStamp;
}

function isNewMax(existingCount, maxCount) {
    return existingCount > maxCount;
}

function isEndOfSection(currentTimeStamp, nextTimeStamp) {
    return currentTimeStamp !== nextTimeStamp;
}

function updateCount(previous, current, action){
    const isEnter = action === 1;
    return isEnter ? previous + current : previous - current;
}

let input = [
    // 0 
    [1487799425, 14, 1], // +14 
    [1487799425, 4,  0], // -4
    [1487799425, 2,  0], // -2
    // 8
    [1487800378, 10, 1], // +10
    // 18
    [1487801478, 18, 0], // -18
    [1487801478, 18, 1], // +18
    //18
    [1487901013, 1,  0], // -1
    //17
    [1487901211, 7,  1], // +7
    [1487901211, 7,  0]  // -7
]   //17
           
let expected = 1487800378;         
let actual = findBusiestPeriod(input);
console.log(expected === actual);

input = [[1487799426,21,1]]
expected = 1487799426
actual = findBusiestPeriod(input);
console.log(expected === actual);
 
input = [[1487799425,21,0],[1487799427,22,1],[1487901318,7,0]]
expected = 1487799427
actual = findBusiestPeriod(input);
console.log(expected === actual);
 
input = [[1487799425,21,1],[1487799425,4,0],[1487901318,7,0]]
expected = 1487799425
actual = findBusiestPeriod(input);
console.log(expected === actual);
 
input = [[1487799425,14,1],[1487799425,4,0],[1487799425,2,0],[1487800378,10,1],[1487801478,18,0],[1487801478,18,1],[1487901013,1,0],[1487901211,7,1],[1487901211,7,0]]
expected = 1487800378
actual = findBusiestPeriod(input);
console.log(expected === actual);
 
input = [[1487799425,14,1],[1487799425,4,1],[1487799425,2,1],[1487800378,10,1],[1487801478,18,1],[1487901013,1,1],[1487901211,7,1],[1487901211,7,1]]
expected = 1487901211
actual = findBusiestPeriod(input);
console.log(expected === actual);
 
input = [[1487799425,14,1],[1487799425,4,0],[1487799425,2,0],[1487800378,10,1],[1487801478,18,0],[1487801478,19,1],[1487801478,1,0],[1487801478,1,1],[1487901013,1,0],[1487901211,7,1],[1487901211,8,0]]
expected = 1487801478
actual = findBusiestPeriod(input);
console.log(expected === actual);
