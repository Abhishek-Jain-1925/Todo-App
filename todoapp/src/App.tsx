import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="contents">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}>            
          </Route>
          {/* <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
