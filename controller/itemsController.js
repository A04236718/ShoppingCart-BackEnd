const itemService = require("../models/itemsModel");

// Display All Items
exports.index = (req, res, next) => {
  const items = itemService.getItems();
  res.status(200).json({ items: items });
};
// Create A New Item
exports.create = (req, res, next) => {
  const item = req.body;
  itemService.save(item);
  res.status(201).json({ message: "New Item Added" });
};
// Show a single Item By ID
exports.show = (req, res, next) => {
  const id = Number(req.params.id);
  const found = itemService.findById(id);
  if (!found) {
    const err = new Error("Item with the Requested ID not found");
    err.status = 404;
    return next(err);
  }
  res.status(201).json({ items: found });
  // res.json(found); alternative way
};
// Update an existing Item
exports.update = (req, res, next) => {
  const id = req.params.id;
  const found = itemService.findById(id);
  if (!found) {
    const err = new Error("Item with the Requested ID Not Found");
    err.status = 404;
    return next(err);
  }
  let item = req.body;
  item.id = id;
  itemService.save(item);
  res.status(200).json({ message: "Item Successfully Updated" });
};
// Delete an Item by ID
exports.delete = (req, res, next) => {
  const id = req.params.id;
  const found = itemService.findById(id);
  if (!found) {
    const err = new Error("Item with the requested ID Not Found");
    err.status = 404;
    return next(err);
  }
  itemService.destroy(id);
  res.status(404).json({ message: "Item Has been Successfully Deleted" });
};
