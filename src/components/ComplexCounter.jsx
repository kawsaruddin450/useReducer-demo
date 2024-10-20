import { useReducer } from "react";

const initialState = {
    counter: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increament':
            return {counter: state.counter + action.value};
        case 'decreament':
            return {counter: state.counter - action.value};
        default:
            return state;
    }
}

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <dir>Count - {count.counter}</dir>
            <button type="button" onClick={()=> dispatch({
                type: "increament",
                value: 1
            })}>Increament 1</button>
            <button type="button" onClick={()=> dispatch({
                type: "increament",
                value: 5
            })}>Increament 5</button>
            <button type="button" onClick={()=> dispatch({
                type: "decreament",
                value: 1
            })}>Decreament 1</button>
            <button type="button" onClick={()=> dispatch({
                type: "decreament",
                value: 5
            })}>Decreament 5</button>
        </div>
    );
};

export default ComplexCounter;