


const intState = {
    blogs : [],
    loading: true,
    errorMessage: ""
}


const reducer = (state = intState, action) => {
    switch(action.type){
        case "SET_BLOGS" : 
            return {...state, blogs: action.payload};
        case "LOADER_OFF":
            return {...state, loading: false};
        case "SET_ERROR":
            return {...state, errorMessage: action.payload};        
        default:
            return state;
    }
}

export default reducer;