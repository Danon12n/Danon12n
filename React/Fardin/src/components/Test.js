import React from 'react';
import {decrement, executeTodo, increment} from "../redux/test-reducer";
import {useDispatch, useSelector} from "react-redux";

const Test = () => {
    const count = useSelector(state => state.test.count);
    const todoList = useSelector(state => state.test.todoList);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Count click: {count}</h3>
            <button onClick={() => {dispatch(decrement())}}>-</button>
            <button onClick={() => {dispatch(increment())}}>+</button>

            {
                todoList.map(list => {
                    return (
                        <>
                            <div>
                                <span style={list.status ? {color: "green"} : {color: "red"}} onClick={() => {dispatch(executeTodo(list.id))}}>{list.id}. {list.text}</span>
                            </div>
                            <button ></button>
                        </>
                    )
                })
            }
        </div>
    );
};

export default Test;