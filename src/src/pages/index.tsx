import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import BooksList from '../components/BooksList';
// import getData from "../helpers/fetchBooks";

import { useQuery } from 'react-query';

import BookT from '../typings/Book';

import fetchBooks from '../helpers/fetchBooks';
import AllBooks from '../components/AllBooks';

const Home: NextPage = () => {
	const [booksList, setBooksList] = useState<BookT[]>([]);
	const [search, setSearch] = useState('');
	// const [showAll, setShowAll] = useState(false);

	// useEffect(() => {
	//   async function getBooks() {
	//     if (search.length <= 1) setBooksList([]);
	//     if (search.length >= 2)
	//       setBooksList(
	//         await getData(`http://localhost:4040/api/books/${search}`)
	//       );
	//   }
	//   getBooks();
	// }, [search]);

	return (
		<>
			<Head>
				<title>Books Directory</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/512.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="mx-20">
				<section className="mb-10">
					<div className="text-center">
						<h1 className="my-8 font-serif text-4xl font-bold capitalize">
							book directory
						</h1>
						<button
							className="m-auto my-4 block rounded-lg bg-[#553b08] py-2 px-4 text-white"
							// onClick={() => setShowAll(true)}
						>
							show all books
						</button>
						<input
							type="text"
							value={search}
							placeholder="search for a book..."
							className="w-1/3 rounded-lg p-4"
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</section>
				{/* {showAll && <AllBooks />} */}
				<AllBooks />
			</main>
		</>
	);
};

export default Home;
