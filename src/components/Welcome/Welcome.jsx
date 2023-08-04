import { NavLink } from "react-router-dom";

const Welcome = () => {
  return ( 
    <section className="home">
      <h1>Welcome to my simple Blog</h1>
      <NavLink to={"/blog-list"}>go to articles</NavLink>
    </section>
  );
}

export default Welcome;