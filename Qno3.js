//Write a program to find the factorial of a number.
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
n = 6;
ans = factorial(n);
console.log(ans);
