import { Link } from "react-router-dom"


function Navbar() {
  return (
    <header className="header">
        <Link to="/" className="header-title">Workout Buddy</Link>
    </header>
  )
}

export default Navbar