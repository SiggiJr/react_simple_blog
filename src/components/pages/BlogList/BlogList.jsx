import { blogData } from "../../../data/data";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = () => {
  return ( 
    <section className="blog_list">
      {blogData.map(blog => <BlogItem key={blog.id} blog={blog}/>)}
    </section>
  );
}

export default BlogList;