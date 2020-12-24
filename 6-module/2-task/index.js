import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.data = product;
    this.render();
  }

  render () {
    let addToCart = function (e) {
      let addByClick = new CustomEvent("product-add", {detail: this.data.id, bubbles: true});
      e.currentTarget.dispatchEvent(addByClick);
    };
    this.elem = document.createElement('div');
    this.elem.classList.add('card');
    let template = `<div class="card__top">
      <img src="../../assets/images/products/${this.data.image}" class="card__image" alt="product">
      <span class="card__price">€${this.data.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${this.data.name}</div>
      <button onclick="addToCart()" type="button" class="card__button">
        <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>`;
    this.elem.insertAdjacentHTML('beforeend', template);


  }
}
