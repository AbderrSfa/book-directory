import axios from "axios";

const getData = async (url:string) => {
  try {
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
		console.log(error);
  }
};

export default getData;
