import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Taskdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {error,isPending,data: todoItem} : any = useFetch("http://localhost:5000/todos/" + id);

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
          <h4>{id}</h4>
          <p><b>Task : </b>{ todoItem?.task}</p>
          <p><b>Status : </b>{todoItem?.isComplete === true ? "Completed" : "Incomplete"}</p>
          <p><b>Due Date : </b>{ todoItem?.dueDate }</p>

          <div style={{display: "flex", alignItems: "center", justifyContent: "center" }} >
            <button className="btn btn-secondary m-2" onClick={handleClick}> Delete Task </button>
            <Link to="/">
              <button className="btn btn-secondary"> Back to Home </button>
            </Link>
          </div>
        </article>
      )}
    </div>
  );
};

export default Taskdetails;
