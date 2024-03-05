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
  const navigate = useNavigate();

  const handleStatus = (item: ITodoElement) => {
    setChecked(!checked);
    item.isComplete = !item.isComplete;
  };

  const handleCard = (item: ITodoElement) => {
    navigate(`/task/${item.id}`);
  };

  return (
    <div className="blog-list">

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
            >
              <div style={{display:"flex"}}>
                <input
                  type="checkbox"
                  name={item.task}
                  checked={item.isComplete}
                  onChange={() => handleStatus(item)}
                />{" "} &nbsp;&nbsp;
                <h3 onClick={() => handleCard(item)}>
                {item.task}
                </h3>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                <strong>Status :</strong>{" "}
                {item.isComplete ? "Completed" : "Incomplete"}&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </center>
      ))}
    </div>
  );
};

export default TodoList;
