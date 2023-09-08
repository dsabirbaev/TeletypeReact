import api from "../axios";




const useBlog = {
    createBlog: (data) => api.post("/blog", data),
    getBlog: async() => api.get("/blog"),
    getBlogItem: (id) => api.get(`/blog/${id}`),
    updateBlog: (id,data) => api.patch(`/blog/${id}`, data),
    deleteBlog: (id,data) => api.delete(`/blog/${id}`, data),
}


export default useBlog;