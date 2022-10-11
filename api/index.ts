import express from 'express';
const app = express();
const port = 4040;
import booksRouter from './routes/books';
import { initDB, client } from './db/database';

app.use(express.json());
app.use('/api/books', booksRouter);

initDB();

app.listen(port, () => console.log(`server is listening on port ${port}...`));
