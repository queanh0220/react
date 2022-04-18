import React, { useState } from "react";
import { atom, selector, useRecoilState, useResetRecoilState } from "recoil";

const listTodo = atom({ key: "Todo", default: [] });
const numListTodo = selector({
  key: "numList",
  get: ({ get }) => {
    return get(listTodo).map((item, index) => index + 1 + ". " + item);
  },

  set: ({ get, set }, newTodo) => {
    const list = get(listTodo);
    set(listTodo, [...list, newTodo]);
  },
});

export default function Header(props) {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useRecoilState(numListTodo);
  const reset = useResetRecoilState(listTodo);
  const update = () => {
    setTodos(todo);
  };
  return (
    <div>
      {todos.map((item) => {
        console.log(todos);
        return <p>{item}</p>;
      })}

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={update}>Update</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
