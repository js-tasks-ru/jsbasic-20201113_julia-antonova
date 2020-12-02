/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');
  let arrCamelized = arr.map(function(el, index) {
    if (el !== '' && index !== 0) {
      return el.slice(0, 1).toUpperCase() + el.slice(1);
    } else {
      return el;
    }
  });
  return arrCamelized.join('');
}
