# DrazTask

The repo should have 3 files.

cart.js cart.test.js README.md

Cart keeps track of products through items

A product has an id, name and price.

The cart has items, and the items have a product, a count (of the number of products for this item), and a price ( the computed total of the product price x the count)

The Cart object exports the following methods.

getItems(), // returns all items in the cart

hasProduct(product), // checks if cart contains an item with this product by id return Boolean

addItem(product), // adds a product or increment the item count

removeItem(product), // decrement the count of the item containing the product or removes it.

removeProduct(product), // removes the item that contains the product

getItem(product), // get an item containing the product or null otherwise getTotal(), // returns the total of all items in the cart. clearCart(), // removes all items

cart.test.js should require cart.js and try out all its methods by Adding to the cart a product Checking if the product is in the cart Adding the same product Get item of this product and checking that the count is 2 and the price is 2 times the product Remove the product and checking the count of the item is back to 1 and price is back to 1 times the product the price Add another product with a different id getting all items to check the items length is 2 Get total Clear the cart

Console .log your checks and const assert = require('assert'); and use it to assert the check eg. assert.equal(items.length, 0) read the node docs for how to use it.
