// import "./Blog.css";
import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return (
    <>
      <h2>Blog Content</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div>
        {id && (
          <>
            <h3>Publication{id}</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              dignissimos totam commodi quaerat possimus aut ex voluptates nisi?
              Pariatur, officia?
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Blog;
