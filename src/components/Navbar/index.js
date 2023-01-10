import { NavLink } from "react-router-dom";
import { NavContainer } from "./style";
import { RiVideoFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <NavContainer>
      <NavLink to='/'>
        <div className="logo">
            <RiVideoFill size={25} color={'red'}/>
            <h2>DevFlix</h2>
        </div>
      </NavLink> 
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/favorites'>Favoritos</NavLink></li>
        </ul>
    </NavContainer>
  )
}

export default Navbar