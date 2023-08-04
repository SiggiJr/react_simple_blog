import { useParams } from "react-router-dom";
import {blogData} from '../../../data/data'

const BlogEntry = () => {

  const entryId = useParams().id
  console.log(entryId);

  const entry = blogData.find(entry => entry.id === Number(entryId))

  return ( 
    <section className="blog_entry">
      <div>
        <img src={entry.img_url} alt="" />
      </div>
      <div>
        <h2>{entry.title}</h2>
        <p>{entry.published_date}</p>
      </div>
      <p>{entry.description}</p>
      <p className="author">{entry.author}</p>
    </section>
  );
}

export default BlogEntry;

// id: 0,
// title: "My Pets",
// published_date: "18.03.21",
// author: "Jane Doe",
// description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
// img_url:
//   "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",