import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

export const Container = styled.div`
    display: flex;
`

export const Wrapper = styled.div`
    z-index: 1;
    height: 80vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px) {
        margin-top: 170px;
    }
    @media (orientation: portrait) {
        margin-top: 100px;
    }
`



export const TextWrapper = styled.div`
    max-width: 800px;
    padding-top: 100px;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
        padding-top: 0px;
    }
    
    
`

export const Heading = styled(motion.h1)`
    color: #fff;
    /* margin-bottom: 24px; */
    font-size: 6rem;
    line-height: 1.1;
    font-weight: 900;
    
    display: inline;
    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
    
`

export const Subtitle = styled(motion.p)`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 3rem;
    color: #b2b2b2;
    @media screen and (max-width: 600px) {
        font-size: 1.2rem;
    }
`

export const BtnWrap = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`

export const BtnInfo = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: white;
    border: 1px solid #08fdd8;
    padding: 10px 50px 10px 50px;
    transition: .3s all ease-in;
    &:hover {
        color: black;
        background: #08fdd8;
    }
`
export const BtnInfo2 = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: white;
    border: 1px solid #ff0b56;
    margin-left: 20px;
    padding: 10px 50px 10px 50px;
    transition: .3s all ease-in;
    @media screen and (max-width: 500px) {
        margin-top: 10px;
        margin-left: -1px;
    }
    &:hover {
        color: black;
        background: #ff0b56;
    }
`



