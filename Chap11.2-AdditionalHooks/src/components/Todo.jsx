import axios from "axios";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import List from "./List";

export default function Todo() {
  const [todo, setTodo] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET":
        return action.payload;
      case "ADD":
        return [action.payload, ...state];
      case "DELETE":
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios
      .get(
        "https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
      )
      .then((res) => {
        const data = res.data;
        const todos = [];
        for (let i in data) {
          todos.unshift({ id: i, text: data[i].text });
        }
        dispatch({ type: "SET", payload: todos });
      });
  }, []);

  const handleAddList = () => {
    axios
      .post(
        "https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
        { text: todo }
      )
      .then((res) => {
        dispatch({ type: "ADD", payload: { id: res.data.name, text: todo } });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${id}.json`
      )
      .then((res) => {
        dispatch({ type: "DELETE", payload: id });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="button" onClick={handleAddList}>
        Add
      </button>
      {useMemo(() => {
        return <List todoList={todoList} handleDelete={handleDelete} />;
      }, [todoList])}
    </div>
  );
}
