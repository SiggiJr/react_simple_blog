import { NavLink } from "react-router-dom";

const BlogItem = ({blog}) => {
  return ( 
    <article className="blog_item">
      <div>
        <img src={blog.img_url} alt="" />
      </div>
      <h2>{blog.title}</h2>
      <NavLink to={`/blog-entry/${blog.id}`}>Read more</NavLink>
    </article>
  );
}

export default BlogItem;