import { ProxyState } from "../AppState.js";
import Item from "../Models/item.js";


class ItemsService {
  deleteItem(id) {
    // remove the car with that id from the array
    // trigger the update cycle by setting the value of ProxyState.cars

    // NOTE filter itterates over an array and only keeps things where the statement provided is true
    // here we remove the car with the id by only keeping cars that do not have that id
    // then we set the ProxyState array back to the result after the filter
    ProxyState.items = ProxyState.items.filter(item => item.id != id)
  }
  addMoney() {
    ProxyState.money += 100
  }

  addToCart(id) {
    let item = ProxyState.items.find(item => item.id === id)
    let cartItem = ProxyState.cart.find(i => i.id == id)
    if (cartItem) {
      cartItem.quantity++

    }
    ProxyState.cart.push(item)
    ProxyState.cart = ProxyState.cart
  }
  deleteCart(id) {
    console.log(id)
    // remove the car with that id from the array
    // trigger the update cycle by setting the value of ProxyState.cars

    // NOTE filter itterates over an array and only keeps things where the statement provided is true
    // here we remove the car with the id by only keeping cars that do not have that id
    // then we set the ProxyState array back to the result after the filter
    // debugger
    ProxyState.cart = ProxyState.cart.filter(cart => cart.id != id)
    console.log(ProxyState.cart)
  }

}

export const itemsService = new ItemsService();

