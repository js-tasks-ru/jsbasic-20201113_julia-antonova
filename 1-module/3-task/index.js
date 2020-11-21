/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let capitalizedStr = str.slice(0, 1).toUpperCase() + str.slice(1);
  return capitalizedStr;
}
