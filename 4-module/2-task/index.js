/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    let diagonalCell = Array.prototype.slice.call(rows[i].cells)[i];
    diagonalCell.style.backgroundColor = 'red';
  }
}
