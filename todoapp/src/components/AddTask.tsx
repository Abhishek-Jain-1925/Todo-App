import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [str, setStr] = useState("");
  const navigate = useNavigate();

  const handleInput = (str: string) => {
    setStr(str);
  };

  const addTodo = () => {
    const todoItem = {
      id: `"${Math.random() * 2000}"`,
      task: str,
      isComplete: false,
    };

    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    }).then(() => {
      setStr("");
      navigate("/");
    });
  };

  return (
    <div>
      <center>
        <h1> ToDo App </h1>
        <input
          type="text"
          value={str}
          autoFocus
          onChange={(e) => handleInput(e.target.value)}
        />
        &nbsp;&nbsp;
        <button
          onClick={addTodo}
          disabled={!Boolean(str.length)}
          className="btn btn-secondary"
        >
          Add
        </button>
      </center>
    </div>
  );
};

export default AddTask;
