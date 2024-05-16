const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, "A title is required"]
    },

    author: {
        type: String,
        required: [true, "An author is required"]
    },

    publisher: {
        type: String,
        required: [true, "A publisher is required"]
    },

    genre: {
        type: String,
        required: [true, "A genre  is required"]
    },

    pages: {
        type: Number,
        required: [true, "The number of pages  is required"]
    },

    rating: {
        type: Number,
        required: [true, "A rating is required"]
    },

    synopsis: {
        type: String,
    },

    image: {
        type: String,
        required: [true, "A rating is required"]
    },
})

const Book = mongoose.model("Book", bookSchema)

model.exports = Book