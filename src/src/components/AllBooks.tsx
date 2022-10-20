import { useQuery } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';

import BooksList from '../components/BooksList';
import fetchBooks from '../helpers/fetchBooks';

interface Query {
	isLoading: boolean;
	data: AxiosResponse<any, any>;
	isError: boolean;
	error: AxiosError;
}

const AllBooks = () => {
	const { isLoading, data, isError, error } = useQuery(
		'book-list',
		fetchBooks,
	) as Query;

	return (
		<section>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<div className="relative h-16 w-16 animate-spin rounded-full bg-gradient-to-r from-indigo-400 via-blue-500 to-sky-400 ">
						<div className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white bg-[#e9e5cd]"></div>
					</div>
				</div>
			) : isError ? (
				<p>{error.message}</p>
			) : data ? (
				<BooksList booksList={data?.data?.data} />
			) : null}
		</section>
	);
};

export default AllBooks;
