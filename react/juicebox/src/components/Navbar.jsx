import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav>
      <h1>JUICEBOX</h1>
      <h1>Hi</h1>
      <ul>
        <li><Link to="/login">Log In</Link></li>
        <li><a>Messages</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar