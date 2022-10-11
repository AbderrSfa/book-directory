import { Response, Request } from 'express';
import { client } from '../db/database';

const getAllBooks = async (req: Request, res: Response) => {
	const data = await client.query('SELECT * FROM books;');
	res.status(200).send({ data });
};

export default getAllBooks;
