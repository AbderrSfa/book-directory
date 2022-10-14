import Image from "next/image";
import BookT from "../typings/Book";

type Props = {
  book: BookT;
};

const Book = ({ book }: Props) => {
  const { author, genre, image, isbn, rating, title } = book;
  return (
    <article className="my-4 flex w-max min-w-max gap-4 rounded-lg bg-white p-4 drop-shadow-md">
      <Image src={image} width={92} height={150} alt="book cover" />
      <div>
        <h2 className="font-serif text-2xl font-medium ">{title}</h2>
        <h4 className="mb-4 font-serif text-xl">
          <span className="font-sans text-slate-600">by </span>
          {author}
        </h4>
        <div className="text-slate-600">
          <p>genre: {genre}</p>
          <p>ISBN: {isbn}</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
    </article>
  );
};

export default Book;
