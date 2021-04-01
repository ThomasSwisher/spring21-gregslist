import Item from "./Models/item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Item[]} */
  items = [
    new Item('Pre-Built Fire Kit', 1000, 'This is the description of our store item', 20, 'https://pbs.twimg.com/media/ETpZLKZXgAANyBw.jpg'),
    new Item('Pre-Built Fire Kit', 1200, 'This is the description of our store item', 20, 'https://cdn1.mecum.com/auctions/fl0120/fl0120-395915/images/1-1572992729058@2x.jpg?1574881322000'),
    new Item('Pre-Built Fire Kit', 1000, 'This is the description of our store item', 20, 'https://pbs.twimg.com/media/ETpZLKZXgAANyBw.jpg'),
    new Item('Pre-Built Fire Kit', 1200, 'This is the description of our store item', 20, 'https://cdn1.mecum.com/auctions/fl0120/fl0120-395915/images/1-1572992729058@2x.jpg?1574881322000')
  ]

  money = 100
  // Here is the actual cart
  cart = []


}

// NOTE Oh oh.. its magic! Ya know!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
