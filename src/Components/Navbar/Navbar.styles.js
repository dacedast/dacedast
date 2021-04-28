import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    cursor: none;
    background: #151515;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        /* background: transparent; */
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: 2s;
    
`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    margin-right: 15px;
`
export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    padding: 0.1rem;
    height: 100%;
    text-transform: uppercase;
    transition: 0.2s all ease-in;
    z-index: 1;

    &:hover {
        color: #08fdd8;
    }
    
    
    
`

export const Logo = styled.img`
    width: 90px;
    height: 90px;
    margin-right: -10px;
`