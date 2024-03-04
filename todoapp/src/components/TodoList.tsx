import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ITodoElement {
  id: string;
  task: string;
  isComplete: boolean;
}

interface Props {
  todos: ITodoElement[];
}

const TodoList = ({ todos }: Props) => {
  const [checked, setChecked] = useState(false);
  const [todo, setTodo] = useState<Array<ITodoElement>>(todos);
  const [str, setStr] = useState("");
  const navigate = useNavigate();

  const handleStatus = (item: ITodoElement) => {
    setChecked(!checked);
    item.isComplete = !item.isComplete;
  };

  const handleCard = (item: ITodoElement) => {
    navigate(`/todo/details/${item.id}`);
  };

  const handleDelete = (item: ITodoElement) => {
    // if (confirm("Are you sure you want to delete this Task?")) {
    //   setTodos(todos.filter((value) => item.id !== value.id));
    // }
    // setTodo(todos.filter((value) => item.id !== value.id));
    // deleteItemByKey(todos, "id", item.id);

    fetch("http://localhost:5000/todos/" + String(item.id), {
      method: "DELETE",
    }).then(() => {
      console.log("Task Deleted !! with id : " + item.id);
      navigate("/");
    });
  };

  const handleInput = (str: string) => {
    setStr(str);
  };

  //   const history = useHistory();

  const handleSubmit = () => {
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
      console.log("Added Task Success !!");
      setTodo([...todos, todoItem]);
      setStr("");
      navigate("/");
    });
  };

  return (
    <div className="blog-list text-center">
      <input
        type="text"
        value={str}
        autoFocus
        onChange={(e) => handleInput(e.target.value)}
      />
      &nbsp;&nbsp;
      <button
        onClick={handleSubmit}
        disabled={!Boolean(str.length)}
        className="btn btn-secondary"
      >
        Add
      </button>
      {todos.map((item) => (
        <center>
          <div
            className="card w-50"
            key={item.id}
            style={{
              border: "0.1px solid grey",
              margin: "10px",
              cursor: "pointer",
            }}
          >
            <div
              className="card-header"
              style={{
                textDecoration: item.isComplete ? "line-through" : "none",
              }}
              onClick={() => handleCard(item)}
            >
              <h5>
                <input
                  type="checkbox"
                  name={item.task}
                  checked={item.isComplete}
                  onChange={() => handleStatus(item)}
                />{" "}
                &nbsp;&nbsp;
                {item.task}
              </h5>
            </div>

            <div className="card-body">
              <p className="card-text">
                <strong>Status :</strong>{" "}
                {item.isComplete ? "Completed" : "Incomplete"}&nbsp;&nbsp;
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </p>
            </div>
          </div>
        </center>
      ))}
    </div>
  );
};

export default TodoList;
