import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'



export const SidebarContainer = styled.aside`
    
    cursor: none;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #151515;
    display: grid;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #151515;
    overflow: hidden;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 10%;
    

    @media screen and (max-width: 480px) {
        grid-template-rows: mask-repeat(6, 60px);
    }
`
export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    
    
    
    &:hover {
        /* color: #000; */
        /* background: rgba(255,255,255,0.02); */
        border-bottom: 1px solid #08fdd8;
        /* border-right: 1px solid #08fdd8; */
        border-radius: 3px;
    }


    
`



