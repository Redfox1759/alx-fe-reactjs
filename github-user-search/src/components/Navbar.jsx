import { Link } from "react"

const Navbar = () => {
  return (
    <nav>
      <ul >
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/search" >Search</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
