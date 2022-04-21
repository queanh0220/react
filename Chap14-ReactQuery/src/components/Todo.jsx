import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import List from "./List";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const getTodos = () => {
    return axios
      .get(
        "https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
      )
      .then((res) => {
        const todos = [];
        for (let i in res.data) {
          todos.unshift({ id: i, text: res.data[i].text });
        }
        return todos;
      });
  };
  const addTodo = (newTodo) => {
    return axios.post(
      "https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
      { text: newTodo }
    );
  };

  const deleteTodo = (idTodo) => {
    return axios.delete(
      `https://example-6b987-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${idTodo}.json`
    );
  };

  const { isLoading, isError, data, error } = useQuery("getTodos", getTodos);

  const queryClient = useQueryClient();

  const mutationAdd = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    },
  });

  const mutationDelete = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    }
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {mutationAdd.isLoading ? (
        <span> Adding todo...</span>
      ) : mutationAdd.isError ? (
        <span> Add Error: {mutationAdd.error.message}</span>
      ) : mutationAdd.isSuccess ? (
        <span> Todo added!</span>
      ) : null}

      <button type="button" onClick={() => mutationAdd.mutate(todo)}>
        Add
      </button>
      <br />
      {isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        <List list={data} handleDelete={mutationDelete.mutate}></List>
      )}
    </div>
  );
}
