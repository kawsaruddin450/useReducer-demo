import { useEffect } from "react";
import { useReducer } from "react";

const initialState = {
    isLoading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case "success":
            return {
                error: "",
                post: action.data,
                isLoading: false,
            }
        case "error":
            return {
                error: "Something went wrong, fetch failed!",
                post: {},
                isLoading: false,
            }
        default:
            return state;
    }
}

const GetPost = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicod.com/posts/1')
        .then(res => res.json())
        .then(data => {
            dispatch({type: "success", data: data});
        })
        .catch(()=> {
            dispatch({type: "error"})
        })
    },[])

    return (
        <div>
            <h2>
                {
                    state.isLoading ? "Loading..." : state.post.title
                }
            </h2>
            <p>{state.error}</p>
        </div>
    );
};

export default GetPost;