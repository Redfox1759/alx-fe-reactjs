import { Link } from "react-router-dom"
function Navbar() {
  return (
      <nav style={{display:'flex',backgroundColor:'gray',width:'100%',justifyContent:'center'}}>
        <ul style={{listStyle:'none',display:'flex'}}>
            <li style={{paddingLeft:'20px'}}>
                <Link to="/" style={{textDecoration:'none',fontSize:'20px',color:'black'}} >Home</Link>
            </li>
            <li style={{paddingLeft:'20px'}}>
                <Link to="/about" style={{textDecoration:'none',fontSize:'20px',color:'black'}} >About</Link>
            </li>
            <li style={{paddingLeft:'20px'}}>
                <Link to="/service" style={{textDecoration:'none',fontSize:'20px',color:'black'}} >Services</Link>
            </li>
            <li style={{paddingLeft:'20px'}}>
                <Link to="/contact" style={{textDecoration:'none',fontSize:'20px',color:'black'}} >Contact</Link>
            </li>
        </ul>
      </nav>
  )
}

export default Navbar
