//Write a program to find whether a given year is a leap year or not

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
ans = isLeapYear(2000);
if (ans) {
  console.log("It is a leap year.");
} else {
  console.log("It is a not leap year.");
}
