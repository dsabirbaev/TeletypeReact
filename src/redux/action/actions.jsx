


export const SET_BLOGS = (data) => {
    return {type : "SET_BLOGS", payload: data};
}

export const SET_LOADER = () => {
    return {type: "LOADER_OFF"};
}

export const SET_ERROR = (data) => {
    return {type: "SET_ERROR", payload: data};
}