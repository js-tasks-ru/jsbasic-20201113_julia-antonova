/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
let rows = [
  {
    name: 'Вася',
    age: 25,
    salary: 1000,
    city: 'Самара'
  },
  {
    name: 'Петя',
    age: 30,
    salary: 1500,
    city: 'Москва'
  }
];
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.render();
  }
  render() {
    this.elem = document.createElement('table');
    this.elem.innerHTML = `<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead>`;
    for (let cell of this.data) {
      let row = `<tr>
        <td>${cell.name}</td>
        <td>${cell.age}</td>
        <td>${cell.salary}</td>
        <td>${cell.city}</td>
        <td><button onclick="this.parentNode.parentNode.remove()">X</button></td>
      </tr>`;
      this.elem.insertAdjacentHTML('beforeend', row);
    }
    document.body.append(this.elem);
  }
}
