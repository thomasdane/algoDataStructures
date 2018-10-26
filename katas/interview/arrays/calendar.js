/*
Write a function mergeRanges() that takes an array of multiple meeting time ranges
and returns an array of condensed ranges. That is, shows the total used time, removing duplicate times. 

For example, given:
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

Your function would return:

[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
*/

class Meeting {
    constructor(start, end){
        this.startTime = start;
        this.endTime = end;
    }
}

function mergeRanges(meetings) {

    let timeSpan = 2 * 24 * 7; 
    //2 meetings per hour * 24 hours in a day * 7 days in a week
    //You could increase this value to handle unix times. You would just need enough memory to look that far forward in the future. 
    const times = new Array(timeSpan).fill(0);
    
    meetings.forEach(meeting => { // O(n)
        for(let i = meeting.startTime; i < meeting.endTime; i++) {
            times[i] = 1;
        }
    });

    let meeting = {};
    let result = [];

    for(let i = 0; i < times.length; i++){ //O(n)
        
        let previous = times[i - 1] || 0;
        let next = times[i + 1] || 0;

        let isMeeting = times[i] === 1;
        let start = previous === 0;
        let end = next === 0;

        if(isMeeting && start) {
            meeting.startTime = i;
        }

        if(isMeeting && end){
            meeting.endTime = i+1;
            result.push(meeting);
            meeting = {};
        }
    }

    return result;
}

  // Tests
  
  let desc = 'meetings overlap';
  let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
  let expected = [{ startTime: 1, endTime: 4 }];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'meetings touch';
  actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
  expected = [{ startTime: 5, endTime: 8 }];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'meeting contains other meeting';
  actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
  expected = [{ startTime: 1, endTime: 8 }];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'meetings stay separate';
  actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
  expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'multiple merged meetings';
  actual = mergeRanges([
    { startTime: 1, endTime: 4 },
    { startTime: 2, endTime: 5 },
    { startTime: 5, endTime: 8 },
  ]);
  expected = [{ startTime: 1, endTime: 8 }];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'meetings not sorted';
  actual = mergeRanges([
    { startTime: 5, endTime: 8 },
    { startTime: 1, endTime: 4 },
    { startTime: 6, endTime: 8 },
  ]);
  expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'oneLongMeetingContainsSmallerMeetings';
  actual = mergeRanges([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 5 },
    { startTime: 6, endTime: 8 },
    { startTime: 9, endTime: 10 },
    { startTime: 10, endTime: 12 }
  ]);
  expected = [
    { startTime: 1, endTime: 12 }
  ];
  assertArrayEquals(actual, expected, desc);
  
  desc = 'sample input';
  actual = mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }, 
  ]);
  expected = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
  ];
  assertArrayEquals(actual, expected, desc);
  
  function assertArrayEquals(a, b, desc) {
    const arrayA = JSON.stringify(a);
    const arrayB = JSON.stringify(b);
    if (arrayA !== arrayB) {
      console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
    } else {
      console.log(`${desc} ... PASS`);
    }
  }