import axios from "axios";
import React, { useState } from "react";

import {
  atom,
  selector,
  selectorFamily,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { ErrorBoundary } from "./ErrorBoundary";

const todoIDState = atom({ key: "TodoIdState", default: null });
const listTodoSelector = selector({
  key: "listTodoSelector",
  get: ({get}) => {
    return axios
      .get(
        "https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
      )
      .then((res) => {
        const data = res.data;
        const todos = [];
        for (let i in data) {
          todos.unshift({ id: i, text: data[i].text });
        } 
        return todos
      });
  },
});

const getTodoById = selectorFamily({
  key: 'GetTodoByID',
  get: id => async(get) => {
      return  axios
      .get(
        `https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${id}.json`
      )
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err);
      })
  }
})

const getTodoSelector = selector({
  key: 'GetTodo',
  get: ({get}) => get(getTodoById(get(todoIDState)))
})

const List = () => {
  const todos = useRecoilValue(listTodoSelector);
  const setTodo = useSetRecoilState(todoIDState);
  return (
    <>
      {todos.map((item) => {
        console.log(todos);
        return <li key={item.id} onClick={()=>setTodo(item.id)}>
        {item.text}
      </li>
      })}
    </>
  );
};

const CurrentTodo = () => {
  const getTodo = useRecoilValue(getTodoSelector);
  return <p>Current todo: {getTodo ? getTodo.text : ""}</p>
}

export default function Async(props) {
  const [todo, setTodo] = useState('');

  return (
    <div>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <List />
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CurrentTodo />
        </React.Suspense>
      </ErrorBoundary>
    
    </div>
  );
}
