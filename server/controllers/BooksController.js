import axios from 'axios';
const apiKey ='AIzaSyB5NAb6Brxqtv9LD4Gph75mE6vmMHfXRXw';

export const books = async (req,res)=>{
    const {isbn} = req.query;
    try{
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`);
        const bookData = response.data;
        if (bookData.totalItems > 0) {
        const book = bookData.items[0]; // Assuming the first item is the desired book
        const bookTitle = book.volumeInfo.title;
        const bookAuthor = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown';
        const bookThumbnail = book.volumeInfo.imageLinks?.thumbnail || null;
        const bookLanguage = book.volumeInfo.language || 'Unknown';
        const bookCategories = book.volumeInfo.categories || [];
        const bookPageCount = book.volumeInfo.pageCount || 0;
        const bookDescription = book.volumeInfo.description || '';
        const bookMaturityRating = book.volumeInfo.maturityRating || 'Unknown';
        const bookPublishedDate = book.volumeInfo.publishedDate || 'Unknown';
        const bookAverageRating = book.volumeInfo.averageRating || 0;

        const Bookf = {
            title: bookTitle,
            author: bookAuthor,
            thumbnail: bookThumbnail,
            language: bookLanguage,
            categories: bookCategories,
            pageCount: bookPageCount,
            description: bookDescription,
            maturityRating: bookMaturityRating,
            publishedDate: bookPublishedDate,
            averageRating: bookAverageRating,
        };
        res.send(Bookf);
    } else {
      res.status(404).json({ message: 'book not found' });// Book not found for the provided ISBN
    }
  } catch (error) {
    console.log( error);
    res.status(500).json({ message: 'An error occurred' });
  }
    
};