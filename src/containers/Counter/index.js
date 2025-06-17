import { connect } from "react-redux";
import {
    incrementCounter, decrementCounter,
    addCounter, subtractCounter
} from "../../store/actions";
import axios from "../../axios";
const mapStateToProps = state => {
    return {
        counter: state.counter.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter:  () => dispatch(incrementCounter()),
        decreaseCounter:  () => dispatch(decrementCounter()),
        addCounter:       () => dispatch(addCounter(5)),
        substarctCounter: () => dispatch(subtractCounter(5)),
    }
}

const Counter = (props) => {
    const push = () => {
        axios.post('/', {test:'test'})
    }

    return(
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.increaseCounter}>increase</button>
            <button onClick={props.decreaseCounter}>decrease</button>
            <button onClick={props.addCounter}>increase by 5</button>
            <button onClick={props.substarctCounter}>decrease by 5</button>x
            <button onClick={push}>push to</button>x
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);