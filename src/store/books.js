import { SET_BOOKS } from "./actions";

const initialState = {
    books: []
}
    
const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOOKS: 
            return {books: action.data}
        default:
            return state
    }
}

export default booksReducer;