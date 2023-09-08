import axios from "axios";




const api = axios.create({
    baseURL: "https://nest-blog.up.railway.app/api",
});


export default api;