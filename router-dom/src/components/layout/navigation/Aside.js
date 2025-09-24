//import './Aside.css';
import { Link } from 'react-router-dom';

function Aside() {
  return (
<>
<h2>Blog Posts</h2>
<ul>
    <li><link to="/blog/1"></link>Blog Post 1</li>
    <li><link to="/blog/2"></link>Blog Post 2</li>
    <li><link to="/blog/3"></link>Blog Post 3</li>
</ul>
</>
  );
}

export default Aside;
