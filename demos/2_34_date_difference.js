// create date with today's date
let date1 = new Date();
// create date with the end of the program
let date2 = new Date("June 30, 2023");
// msec_per_date = milli sec in a sec * sec in a min * min in a hour * hour in a day
let msec_per_day = 1000 * 60 * 60 * 24;
console.log(`msec_per_day is ${msec_per_day}`);

let elapsedMilliseconds = date2.getTime() - date1.getTime();
let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);
console.log("The number of days between dates is " + numDays);
