


const intState = {
    blogs: [],
    loading: true,
    errorMessage: "",

    blog: [],
    likeCount: 0,
    dislikeCount: 0
}


const reducer = (state = intState, action) => {
    switch (action.type) {
        case "SET_BLOGS":
            return { ...state, blogs: action.payload };
        case "LOADER_OFF":
            return { ...state, loading: false };
        case "SET_ERROR":
            return { ...state, errorMessage: action.payload };

        case "SET_SINGLE_BLOG":
            return { ...state, blog: action.payload };

        case "SET_LIKE":
            return { ...state, likeCount: state.likeCount + 1 };

        case "SET_DISLIKE":
            return { ...state, dislikeCount: state.dislikeCount + 1 };

        default:
            return state;
    }
}

export default reducer;