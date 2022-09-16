import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Comments from "./Comments";
import Post from "./Post";
import Users from "./Users";
import Photos from "./Photos";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <Router>
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <Link className="nav__link" to="/">Users</Link>
          </li>
          <li>
            <Link className="nav__link" to="/posts">Posts</Link>
          </li>
          <li>
            <Link className="nav__link" to="/comments">Comments</Link>
          </li>
          <li>
            <Link className="nav__link" to="/photos">Photos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Post/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/" element={<Users/>}/>
      </Routes>

    </Router>
  );
}

export default Navbar;