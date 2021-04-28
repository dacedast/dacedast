import React from 'react'
import * as s from './Navbar.styles'
import {FaBars} from 'react-icons/fa'
import logo from '../../D-removebg-preview.png'

const Navbar = ({ toggle }) => {
    return (
        <>
            <s.Nav>
                <s.NavbarContainer>
                    <s.NavLogo to="/">
                        <s.Logo src={logo}></s.Logo>
                        ACEDAST
                    </s.NavLogo>
                    <s.MobileIcon onClick={toggle}>
                        <FaBars />
                    </s.MobileIcon>
                    <s.NavMenu>
                        <s.NavItem>
                            <s.NavLinks to="/">Home</s.NavLinks>
                        </s.NavItem>
                        <s.NavItem>
                            <s.NavLinks to="/about">About</s.NavLinks>
                        </s.NavItem>
                        <s.NavItem>
                            <s.NavLinks to="/skills">Skills</s.NavLinks>
                        </s.NavItem>
                        <s.NavItem>
                            <s.NavLinks to="/work">Work</s.NavLinks>
                        </s.NavItem>
                        <s.NavItem>
                            <s.NavLinks to="/contact">Contact</s.NavLinks>
                        </s.NavItem>
                    </s.NavMenu>
                </s.NavbarContainer>
            </s.Nav>
        </>
    )
}

export default Navbar
