const findMostCommonTitle = (myId, getUser, degreesOfSeparation) => {
    //for a given user id
    //find the most common job title
    //within their connections
    //up to a certain degree of separation

    //first, get all the people who are within that degree of separation

    //for the starting node
    //get all connections
    //add each connection to a queue
    //for each connection, get all connections
    //add each connection to a queue
    //repeat until degress of separation reached
    //don't process same node twice
    //don't want to update the node value
    //so might need to put the processed nodes into a hash? then can check if it exists before processing. 
    //how would that work? 

    //for each node, look at connections. 
    //if already in hash, ignore it
    //if not in hash, add it to queue, and add to hash
    //for each item in the queue, repeat this process (look at connections)

    //then sort by job title
    //then find most common
  }

export {findMostCommonTitle}