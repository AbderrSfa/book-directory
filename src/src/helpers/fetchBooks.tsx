import axios from "axios";

const fetchBooks = () => {
	return axios.get("http://localhost:4040/api/books");
};

export default fetchBooks;

// const getData = async (url:string) => {
//   try {
//     const res = await axios.get(url);
//     return res.data.data;
//   } catch (error) {
// 		console.log(error);
//   }
// };

// export default getData;