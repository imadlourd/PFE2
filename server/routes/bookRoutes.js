import express from 'express';
import {books} from '../controllers/BooksController.js';

const router = express.Router();

router.get('/books', books);







export default router;