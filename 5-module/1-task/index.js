function hideSelf() {
  document.querySelector('.hide-self-button').addEventListener('click', function () {
    this.setAttribute('hidden', true);
  });
}
