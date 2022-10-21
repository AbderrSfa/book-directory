import express from 'express';
import { getAllBooks, searchForBook } from '../controllers/books';
const router = express.Router();

router.route('/').get(getAllBooks);
router.route('/:bookTitle').get(searchForBook);

export default router;
