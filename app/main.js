import ItemsController from "./Controllers/itemsController.js";
import HousesController from "./Controllers/HouseController.js";

class App {
  itemsController = new ItemsController();
  //housesController = new HousesController();
}

window["app"] = new App();
