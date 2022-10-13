import { Response, Request } from 'express';
import { client } from '../db/database';

const getAllBooks = async (req: Request, res: Response) => {
	const data = await client.query('SELECT * FROM books;');

	res.status(200).json({ data: data.rows });
};

const searchForBook = async (req: Request, res: Response) => {
	const { title } = req.params;

	if (title) {
		const data = await client.query(
			`SELECT * FROM books WHERE UPPER(title) LIKE UPPER('%${title}%');`
		);
		res.status(200).json({ data: data.rows });
		return;
	}
	res.sendStatus(400);
};

export { getAllBooks, searchForBook };
