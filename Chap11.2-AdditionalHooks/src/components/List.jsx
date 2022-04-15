import React from "react";

export default function List(props) {
  return (
    <ol>
      {props.todoList.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.text}{" "}
              <button
                className="delete-btn"
                onClick={() => props.handleDelete(item.id)}
              >
                x
              </button>
            </li>
          </>
        );
      })}
    </ol>
  );
}
