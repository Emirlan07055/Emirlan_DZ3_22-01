import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {

    const {count} = useSelector((state) => state)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }
    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default MainPage;