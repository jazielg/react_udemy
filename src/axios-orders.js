import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-udemy-burger-ea744.firebaseio.com/",
});

export default instance;
