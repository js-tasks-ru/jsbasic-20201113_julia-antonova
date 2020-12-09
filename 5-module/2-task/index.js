function toggleText() {
  let text = document.getElementById('text');
  document.querySelector('.toggle-text-button').addEventListener('click', function() {
    if (text.getAttribute('hidden') === 'true') {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', 'true');
    }
  });
}
