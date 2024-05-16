const booksData = require("/data/data");

const books = require ("../models/bookModel");

const getAllBooks = async (req, res, next) => {
    // try {
    // if (200) {
        await Book.find({}).then((books) =>
            response.status(200).json({
            success: {message: "Found all Books!"},
            // data: books, siteData, 
            data: books, 
            statusCode: 200,
        })
        )
    } 
//     } catch (error) {
//         response.status(400).json({
//             error: {message: "Something went wrong getting all the books!"}, 
//             statusCode: 400   
//         })
        
//     }

// }

const getBook = async (request, response, next) => {
    const { _id } = request.params;
      await Book.findOne({ _id: _id }).then((foundBook) => {
      response.status(200).json({
        success: { message: "This route points to the Books page with one of the books by the ID" },
        // data: book, siteData,
        data: foundBook,
        statusCode: 200
      });  
    } 
    ) 
  };

const createBook = async (req, res, next) => {
    const { title, author, publisher, genre, pages, rating, synopsis} = req.body

    const newBook = new Book({
    title: title,
    author: author,
    publisher: publisher,
    genre: genre,
    pages: pages,
    rating: rating,
    synopsis: synopsis, 
    })

    await newBook.save();

    try {
        response.status(201).json({
            success: {message: "A new book is created"},
            data: newBook,
            statusCode: 201
        })
    }  catch (error){ 
        response.status(400).json({
            error: {message: "Something went wrong creating a book"},
            statusCode: 400
        });
        }
}

const editBook = async(req, res, next) => {
    const {id} = req.params;
    const { title, author, publisher, genre, pages, rating, synopsis} = req.body

    await findByIdAndUpdate(id,{
        $set: {
        title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis
        }, 
    },   {new: true});

    try {
        response.status(201).json({
            success: {message: "Book is updated"},
            data: newBook,
            statusCode: 201
        })
    }  catch (error){ 
        response.status(400).json({
            error: {message: "Something went wrong while editing the book~"},
            statusCode: 400
        });
        }
}


const deleteBook = async(req, res, next) => {
    const {id} = req.params;

    await findByIdAndUpdate(id);

    try {
        response.status(200).json({
            success: {message: "Book deleted successfully"},
            data: newBook,
            statusCode: 200
        })
    }  catch (error){ 
        response.status(400).json({
            error: {message: "Something went wrong deleting the book"},
            statusCode: 400
        });
        }
}

module.exports = {getAllBooks, getBook, createBook, editBook, deleteBook}