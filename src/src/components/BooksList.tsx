import BookT from "../typings/Book";
import Book from "./Book";

type Props = {
  booksList: BookT[];
};

const BooksList = ({ booksList }: Props) => {
  return (
    <section>
      {booksList.map((book) => {
				return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

export default BooksList;
