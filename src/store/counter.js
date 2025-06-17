import {INCREMENT, DECREMENT, ADD, SUBTRACT} from "../store/actions";

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return {counter: state.counter + 1}
        case DECREMENT: 
            return {counter: state.counter - 1}
        case ADD: 
            return {counter: state.counter + action.amount}
        case SUBTRACT: 
            return {counter: state.counter - action.amount}
        default:
            return state
    }
}

export default counterReducer;