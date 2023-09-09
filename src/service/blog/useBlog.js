import api from "../axios";

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}

const useBlog = {
    createBlog: (data) => api.post("/blog", data),
    getBlog: async() => api.get("/blog"),
    getBlogItem: (id) => api.get(`/blog/${id}`),
    updateBlog: (id,data) => api.patch(`/blog/${id}`, data, {headers}),
    deleteBlog: (id) => api.delete(`/blog/${id}`, {headers})
}


export default useBlog;