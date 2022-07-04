import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Fetch() {
  const [todo, setTodo] = useState([]);
  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todo);
  return (
    <div>
      <ul>
        {todo.map((ele) => (
          <li key={ele.userId}>{ele.body}</li>
        ))}
      </ul>
    </div>
  );
}
