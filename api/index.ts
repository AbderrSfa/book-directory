import express from 'express';
const app = express();
const port = 4040;
import booksRouter from './routes/books';
import cors from 'cors';

app.use(cors());
app.use(express.json());
app.use('/api/books', booksRouter);

app.listen(port, () => console.log(`server is listening on port ${port}...`));
