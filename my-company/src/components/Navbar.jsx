import { Link } from 'react-router-dom';

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold'
};

function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
