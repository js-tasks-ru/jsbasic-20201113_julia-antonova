/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    let cells = Array.prototype.slice.call(rows[i].cells);

    if (cells[3].getAttribute('data-available') === 'true') {
      rows[i].classList.add('available');
    } else if (cells[3].getAttribute('data-available') === 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].setAttribute('hidden', true);
    }

    if (cells[2].innerText === 'm') {
      rows[i].classList.add('male');
    } else if (cells[2].innerText === 'f') {
      rows[i].classList.add('female');
    }

    if (parseInt(cells[1].innerText) < 18) {
      rows[i].style.textDecoration = 'line-through';
    }
  }
}
