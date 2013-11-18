/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/

function createCartModel(config) {

	var model = createListModel(config);
	
	// loops over model's items array, summing price, and returning
	// formatted (to two decimal places) total price of items.
	model.getTotalPrice = function() {
	
		var index;
		var totalPrice = 0;
		for(index = 0; index < this.items.length; index++) {
			totalPrice += this.items[index].price;
		}
		return totalPrice.toFixed(2);
	}; //getTotalPrice()
	
	// returns the JSON representation (via browser's JavaScript 
	// interpreter) of the model's items.
	model.toJSON = function() {
	
		return JSON.stringify(this.items);
	}; //toJSON()
	
	return model;
} //createCartModel()