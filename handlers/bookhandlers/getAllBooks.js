const Book = require("../../models/books");

 async function getAllBooksData(req,res) {
    try{
        const books=await Book.find();
        res.status(200).send(books)
    }   catch (err) {
        res.status(400).send(err);
    }
}

module.exports=getAllBooksData;