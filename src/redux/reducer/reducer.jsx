


const intState = {
    blogs: [],
    loading: true,
    errorMessage: "",

    blog: [],
    loadingBlog: true,
    errorMessageBlog: "",

    likeCount: 0,
    dislikeCount: 0,

    modalWindow: false
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
        case "SET_LOADER_BLOG":
            return { ...state, loadingBlog: false };
        case "SET_ERROR_BLOG":
            return { ...state, errorMessageBlog: action.payload };

        case "SET_LIKE":
            return { ...state, likeCount: state.likeCount + 1 };

        case "SET_DISLIKE":
            return { ...state, dislikeCount: state.dislikeCount + 1 };

        case "SET_MODAL_WINDOW":
            return { ...state, modalWindow: true };
        default:
            return state;
    }
}

export default reducer;