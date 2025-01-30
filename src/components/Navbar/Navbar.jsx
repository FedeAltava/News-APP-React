import './Navbar.css'
import { NavLink } from 'react-router-dom'
const NavBar =()=>{
    const activeStyle = {color: 'red'}
    return(
        <nav className="nav">
            <ul>
                <li><NavLink to ="/" style={({isActive})=>isActive ? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink to ="Category" style={({isActive})=>isActive ? activeStyle : undefined}>Category</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar