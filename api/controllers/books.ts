import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getAllBooks = async (req: Request, res: Response) => {
	const data = await prisma.books.findMany();
	console.log(data);
	res.status(200).json({ data });
};

const searchForBook = async (req: Request, res: Response) => {
	const { bookTitle } = req.params;

	if (bookTitle) {
		const data = await prisma.books.findMany({
			where: {
				title: {
					contains: bookTitle,
					mode: 'insensitive',
				},
			},
			orderBy: {
				title: 'asc',
			},
		});
		res.status(200).json({ data });
		return;
	}
	res.sendStatus(400);
};

export { getAllBooks, searchForBook };
