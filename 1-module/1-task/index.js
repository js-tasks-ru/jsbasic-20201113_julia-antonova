/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  for (let i = n; i > 1; i--) {
    n = n * (i - 1);
  }
  return n;
}
