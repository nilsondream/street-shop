import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { ImCross, ImMenu } from "react-icons/im";
import { StyledNavbar, StyledSidebar } from "../styles";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.svg'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (

        <>
            <StyledNavbar isOpen={toggle} toggle={toggle}>
                <div className="navbar">
                    <div className="nav-left">
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? '#fd2e36' : '#000' })}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            to="/hoodie"
                        >
                            Hoodies
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? '#fd2e36' : '#000' })}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            to="/tshirt"
                        >
                            T-shirt
                        </NavLink>
                    </div>
                    <NavLink to="/" className="logo" href="/"><img src={logo} alt="logo" /></NavLink>
                    <div className="nav-right">
                        <IoSearchOutline />
                        <AiOutlineUser />
                        <BsCart3 />
                        <ImMenu onClick={toggle} className="icons" />
                    </div>
                </div>
            </StyledNavbar>

            <StyledSidebar isOpen={isOpen} onClick={toggle}>
                <div className="icon">
                    <ImCross onClick={toggle} className="icons" />
                </div>
                <div className="wraper-links">
                    <NavLink onClick={toggle}
                        style={({ isActive }) => ({ color: isActive ? '#fd2e36' : '#fff' })}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to="/hoodie"
                    >
                        Hoodies
                    </NavLink>
                    <NavLink onClick={toggle}
                        style={({ isActive }) => ({ color: isActive ? '#fd2e36' : '#fff' })}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to="/tshirt"
                    >
                        T-shirt
                    </NavLink>
                </div>
                <div className="login-search-cart">
                    <IoSearchOutline className="icons" />
                    <AiOutlineUser className="icons" />
                    <BsCart3 className="icons" />
                </div>
            </StyledSidebar>
        </>
    )
}

export default Navbar