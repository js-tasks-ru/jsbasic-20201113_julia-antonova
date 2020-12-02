/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let fittingUsers = users.filter(el => el.age <= age).map(el => `${el.name}, ${el.balance}`);
  return fittingUsers.join(`
`);
}
