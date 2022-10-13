import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import BooksList from "../components/BooksList";
import fetchBooks from "../helpers/fetchBooks";

import BookT from "../typings/Book";

const Home: NextPage = () => {
  const [booksList, setBooksList] = useState<BookT[]>([]);

  useEffect(() => {
    async function getBooks() {
      setBooksList(await fetchBooks());
    }
    getBooks();
  }, []);

  return (
    <>
      <Head>
        <title>Books Directory</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/512.png" />
      </Head>

      <main className="h-screen w-screen px-20">
        <section className="">
          <h1 className="font-['Playfair Display'] my-8 text-center text-4xl font-bold capitalize">
            book directory
          </h1>
          <button className="m-auto my-4 block rounded-lg bg-[#553b08] py-2 px-4 text-white">
            show all books
          </button>
          <form className="m-auto">
            <input
              type="text"
              placeholder="search for a book..."
              className="m-auto rounded-lg p-4"
            />
          </form>
          <BooksList booksList={booksList} />
        </section>
      </main>
    </>
  );
};

export default Home;