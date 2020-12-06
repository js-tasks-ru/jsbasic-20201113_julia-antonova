/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friendsList) {
  let list = document.createElement('ul');
  for (let person of friendsList) {
    let friend = document.createElement('li');
    friend.innerText = `${person['firstName']} ${person['lastName']}`;
    list.appendChild(friend);
  }
  return list;
}
