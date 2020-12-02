/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let nums = str.match(/-?\d+\.?\d+/g).filter(el => parseInt(el));
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
  };
}
