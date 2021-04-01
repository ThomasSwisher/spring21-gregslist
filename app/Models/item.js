import { generateId } from "../Utils/GenerateId.js"

export default class Item {
  constructor(title, price, description, stock, imgUrl) {
    this.id = generateId()
    this.title = title
    this.price = price
    this.description = description
    this.stock = stock
    this.imgUrl = imgUrl
  }

  // NOTE 'get' signifies a FAKE property
  // GETters MUST return a value
  get Template() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h2 class="card-title">${this.title}</h2>
              <h3>$${this.price}</h3>
              <h6 class="card-text">${this.description}</h6>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-start">
          <h6 class="m-2">In Stock: ${this.stock}</h6>
              <button type="button" class="btn btn-info" onclick="app.itemsController.addToCart('${this.id}')">Add To Cart</button>
          </div>
      </div>
    </div>
    `
  }
}
