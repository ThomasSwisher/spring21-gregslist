import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";


//Private
function _draw() {
  // What are we drawing
  let items = ProxyState.items
  let template = ''
  // if a collection itterate over collection to generate template for each object
  items.forEach(item => {
    console.log(item)
    template += item.Template
  })
  // render to page
  document.getElementById('items').innerHTML = template
  document.getElementById('money').innerText = ProxyState.money

  let cartTemplate = ''
  let total = 0
  let element = document.getElementById('addToCart')
  if (ProxyState.cart.length > 0) {
    console.log(ProxyState.cart)
    ProxyState.cart.forEach(item => {
      cartTemplate += `
      <p>${item.title} ${item.price} <button onclick="app.itemsController.deleteCart('${item.id}')" class="btn btn-danger">X</button></p>`
      total += item.price
    })
  }
  document.getElementById('total').innerText = total
  element.innerHTML = cartTemplate
}

//Public
export default class ItemsController {
  constructor() {
    // OH oh more magic. you still know.....
    // 1st argument is name of the property in the AppState to 'watch' for changes
    // 2nd argument: name of the function to run when 1st argument property changes
    ProxyState.on('items', _draw);
    ProxyState.on('money', _draw)
    ProxyState.on('cart', _draw)


    // manually run draw the on page load
    _draw()
  }


  // createCar() {
  //   // if this method is triggered by an event (submit event) prevent the default action of reloding the page
  //   window.event.preventDefault()
  //   // grab the element from html that triggered this event
  //   const form = window.event.target
  //   // debugger
  //   let newCar = {
  //     // @ts-ignore
  //     make: form.make.value,
  //     // @ts-ignore
  //     model: form.model.value,
  //     // @ts-ignore
  //     year: form.year.value,
  //     // @ts-ignore  this converts the string to a number
  //     price: Number(form.price.value),
  //     // @ts-ignore
  //     description: form.description.value,
  //     // @ts-ignore
  //     imgUrl: form.imgUrl.value
  //   }
  //   carsService.createCar(newCar)

  //   // @ts-ignore
  //   form.reset()

  //   // get the modal and close (using jQuery's "$" selector) 
  //   $('#new-car-form').modal('hide')
  // }

  deleteItem(id) {
    itemsService.deleteItem(id)
  }

  bid(id) {
    carsService.bid(id)
  }

  addMoney() {
    itemsService.addMoney()
  }

  addToCart(id) {
    itemsService.addToCart(id)
  }
  deleteCart(id) {
    itemsService.deleteCart(id)
  }


}
