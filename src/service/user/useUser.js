


import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
}



const useUser = {
    login: (data) => api.post("/user/signin", data),
    register: (data) => api.post("/user/signup", data),
    getUser: (id) => api.get(`/user/${id}`),
    updateUser: (id,data) => api.patch(`/user/${id}`, data, {headers}),
}

export default useUser;