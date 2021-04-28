import React from 'react'
import * as s from './Sidebar.styles'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <s.SidebarContainer isOpen={isOpen} onClick={toggle}>
            <s.Icon onClick={toggle}>
                <s.CloseIcon />
            </s.Icon>
            
        <s.SidebarWrapper >
            <s.SidebarMenu>
                <s.SidebarLink to="/" onClick={toggle}>
                    Home
                </s.SidebarLink>
                <s.SidebarLink to="/about" onClick={toggle}>
                    About
                </s.SidebarLink>
                <s.SidebarLink to="/skills" onClick={toggle}>
                    Skills
                </s.SidebarLink>
                <s.SidebarLink to="/work" onClick={toggle}>
                    Work
                </s.SidebarLink>
                <s.SidebarLink to="/contact" onClick={toggle}>
                    Contact
                </s.SidebarLink>
            </s.SidebarMenu>
            
        </s.SidebarWrapper>
            
        </s.SidebarContainer>
    )
}

export default Sidebar
