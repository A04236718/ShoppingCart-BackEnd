const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000; // Defaults to port 3000

// Routes associated
const index = require('./routes/index');
const items = require('./routes/items');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Component Route Endpoints
app.use("/", index);
app.use("/items", items);

// Error Handler
app.use((req, res, next) => {
    const err = new Error("Resource was Not Found");
    err.status = 404;
    next(err);
})

app.use((req, res, next) => {
    res.status(err.status || 500).json({message:err.message});
});

// Event Listener 
app.listen(port);
console.log(`server is running on ${port}`);

