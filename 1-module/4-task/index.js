/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let suspiciousStrings = ['1xBet', 'XXX', 'казино азино'];
  suspiciousStrings = suspiciousStrings.map(el => el.toLowerCase());
  str = str.toLowerCase();
  for (let i = 0; i < suspiciousStrings.length; i++) {
    if (!str.match(suspiciousStrings[i])) {
    } else {
      return true;
    }
  }
  return false;
}
