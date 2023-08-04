import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav>
      <h1>My Life</h1>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/blog-list"}>Blog</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;