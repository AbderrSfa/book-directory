import express from 'express';
import getAllBooks from '../controllers/books';
const router = express.Router();

router.route('/').get(getAllBooks);

export default router;
