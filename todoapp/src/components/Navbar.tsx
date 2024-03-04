import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1 className="text-white">Abhi's Todo App</h1>
      <div className="links">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/create"> <button className="btn btn-secondary text-white">Add Todo</button></Link>
      </div>
    </nav>
  );
}
 
export default Navbar;