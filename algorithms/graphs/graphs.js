const findMostCommonTitle = (id, getUser, degreesOfSeparation) => {
  let queue = [id];
  const seen = new Set();
  const jobs = {};
  
  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter((id) => !seen.has(id))
      .map(id => getUser(id))
      .map(user => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
        seen.add(user.id)
        return user;
      })
      .map((user) => user.connections)
      .reduce((acc, users) => acc.concat(users), []);
  };

  return Object.keys(jobs)
    .map((job) => [job, jobs[job]])
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    })[0][0]
};

export {findMostCommonTitle}