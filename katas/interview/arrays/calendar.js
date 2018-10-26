function mergeRanges(meetings) {

    const allMeetingTimes = [];
    const meetingInProgress = 1;

    meetings.forEach(meeting => { // O(n)
        //for each meeting, mark the duration in the allMeetingTimes array
        for(let i = meeting.startTime; i < meeting.endTime; i++) {
            allMeetingTimes[i] = meetingInProgress;
        }
    });

    const result = [];
    let singleMeeting = {};

    for(let i = 0; i < allMeetingTimes.length; i++){ //O(n)
        
        const previousMeeting = allMeetingTimes[i - 1] || 0;
        const nextMeeting = allMeetingTimes[i + 1] || 0;

        const isMeeting = allMeetingTimes[i] === meetingInProgress;
        const isStart = previousMeeting === 0;
        const isEnd = nextMeeting === 0;

        if(isMeeting && isStart) {
            singleMeeting.startTime = i;
        }

        if(isMeeting && isEnd){
            singleMeeting.endTime = i + 1;
            result.push(singleMeeting);
            singleMeeting = {};
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