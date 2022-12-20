// The setInterval function has the same or identical syntax as setTimeout but with one notable difference. 
// The setInterval will run the function regularly after the given time interval.


setInterval(() => console.log('tick tock, tick tock'), 3000);


// the clearInterval() function. This function takes
// one parameter, and that is the intervalId.
// Here is the code:

let intervalId = setInterval(() => console.log('tick tock, tick tock'), 3000);
console.log('No more tick, tock because we will clear it with clearInterval fn')
clearInterval(intervalId);