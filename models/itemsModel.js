// Temporary Data --- create more instances, move to MONGO
const items = [
    {id:1, item:"milk", quantity:5, price:3},
    {id:2, item:"Chips", quantity:3, price:2},
    {id:3, item:"Lettuce", quantity:4, price:1},
    {id:4, item:"Donuts", quantity:12, price:7},
    {id:5, item:"Cereal", quantity:1, price:1}
]
// increment ID
let nextID = items.length + 1;


const itemService = {
    // Get all items / information
    getItems: function(){
        return items
    },

    getItem: function(id){
        return items.
    }
}