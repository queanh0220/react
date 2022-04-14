import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [submitTodo, setSubmitTodo] = useState(null);
    const ref = useRef("abc")
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
        setTodoList(todos);
      });
  }, []);

  useEffect(() => {
    if(submitTodo) {
        setTodoList([submitTodo, ...todoList])
    }
  },[submitTodo])

  const handleAddList = () => {
      console.log(ref);
    axios
      .post(
        "https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
        {text: todo}
      )
      .then((res) => {
        setSubmitTodo({id:res.data.name, text:todo})
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
      <button type="button" ref={ref} onClick={handleAddList}>
        Add
      </button>
      <ol>
        {todoList.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ol>
    </div>
  );
}
