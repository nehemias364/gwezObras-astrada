import '../App.css';
import logo from '../images/logo.png';

function NavBar() {
    return (
        <nav className="NavBar">
          <div><img src={logo} alt="logo"/></div>
          <h1>Gwez-obras</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
        )
}

export default NavBar;