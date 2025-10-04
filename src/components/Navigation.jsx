import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/our-products">Products</Link>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
