// Solution:

function well(x){
  let ideas = x.filter(idea => idea === 'good').length;
  return ideas <= 0 ? 'Fail!' : ideas > 2 ? 'I smell a series!' : 'Publish!';
}

// Sample Tests:

well(['bad', 'bad', 'bad'])  // 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']) // 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) // 'I smell a series!'
