const express = require('express');
const router = express.Router();


//cut and pasted all my book routes and placed them here. 

router.get("/", (req, res, next) => {
    res.status(200).json ({success: {message: "This will send all of the book data"}})
})

router.get("/:id", (req, res, next) => {
    res.status(200).json ({success: {message: "This will send all of the books details data, or each book by their ID"}})
})

router.post("/create/new", (req, res, next) => {
    res.status(200).json ({success: {message: "This will send all of the data that will have the ability to create new books"}})
})

router.put("/edit/:id", (req, res, next) => {
    res.status(200).json ({success: {message: "This will send all of the update comic book form page data to modify a book by their ID"}})
})

router.delete("/delete/:id", (req, res, next) => {
    res.status(200).json ({success: {message: "This will send all of the data that will have the ability to delete a book by their ID"}})
})


module.exports = router;

