


export const SET_BLOGS = (data) => {
    return {type : "SET_BLOGS", payload: data};
}

export const SET_LOADER = () => {
    return {type: "LOADER_OFF"};
}

export const SET_ERROR = (data) => {
    return {type: "SET_ERROR", payload: data};
}

export const SET_SINGLE_BLOG = (data) => {
    return {type : "SET_SINGLE_BLOG", payload: data};
}


export const SET_LIKE = () => {
    return {type: "SET_LIKE"};
}

export const SET_DISLIKE = () => {
    return {type: "SET_DISLIKE"};
}