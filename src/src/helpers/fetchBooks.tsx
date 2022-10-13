import axios from "axios";

const fetchBooks = async () => {
  try {
    const res = await axios.get("http://localhost:4040/api/books");
    return res.data.data;
  } catch (error) {
		console.log(error);
  }
};

export default fetchBooks;
