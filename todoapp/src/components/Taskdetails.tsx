import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Taskdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {error,isPending,data: todoItem} : any = useFetch("http://localhost:5000/todos/" + id);
  console.log(todoItem);

  const handleClick = () => {
    fetch("http://localhost:5000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };


  return (
    <div className="task-details text-center">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {todoItem && (
        <article>
          <h2>{id}</h2>
          <p>Task : { todoItem?.task}</p>
          <p>Status : {todoItem?.isComplete === true ? "Completed" : "Incomplete"}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-secondary m-2" onClick={handleClick}>
              Delete Task
            </button>
            <Link to="/">
              <button className="btn btn-secondary">Back to Home</button>
            </Link>
          </div>
        </article>
      )}
    </div>
  );
};

export default Taskdetails;
