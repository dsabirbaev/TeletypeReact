import api from "../axios";


const blogAPI = {
    login: async (data) => api.post('/api/user/signin', data),
    blogs: async () => api.get('/api/blog'),
    singleBlog: async (id) => api.get(`/api/blog/${id}`)
}

export default blogAPI;