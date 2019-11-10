// Temporary Data --- create more instances, move to MONGO
const items = [
  { id: 1, item: "milk", quantity: 5, price: 3 },
  { id: 2, item: "Chips", quantity: 3, price: 2 },
  { id: 3, item: "Lettuce", quantity: 4, price: 1 },
  { id: 4, item: "Donuts", quantity: 12, price: 7 },
  { id: 5, item: "Cereal", quantity: 1, price: 1 }
];
// // increment ID
let nextID = items.length + 1;

const itemService = {
  // Get all items / information
  getItems: function() {
    return items;
  },
  findById: function(id) {
    return items.find(item => {
         return item.id == id;
    });
  },
  save: function(item) {
    if (item.id) {
      const oldItem = this.findById(item.id);
      if (oldItem) {
        const index = items.indexOf(oldItem);
        items.splice(index, 1, item);
      } else {
        items.push(item);
      }
      const index = items.indexOf(oldItem);
      items.splice(index, 1, item);
    } else {
      item.id = nextID;
      items.push(item);
    }
  },
  destroy: function(id) {
    const oldItem = this.findById(id);
    const index = items.indexOf(oldItem);
    items.splice(index, 1);
  }
};

module.exports = itemService;