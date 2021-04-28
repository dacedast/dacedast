import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
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
    color: #08fdd8;
    /* margin-bottom: 24px; */
    font-size: 3rem;
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
    font-size: 1.3rem;
    color: #b2b2b2;
    @media screen and (max-width: 600px) {
        font-size: 1.3rem;
    }
`

export const BtnWrap = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`

export const BtnInfo = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: #08fdd8;
    /* border-left: 1px solid #08fdd8; */
    padding: 10px 50px 10px 0px;
    transition: .3s all ease-in;
    
    &:hover {
        color: #ff0b56;
        /* border-left: 1px solid #ff0b56; */
        /* background: #08fdd8; */
    }
`
export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 1024px) {
        grid-template-areas: 'col2' 'col1';
    }
`
export const Column1 = styled(motion.div)`
    
    grid-area: col1;
`
export const Column2 = styled(motion.div)`
    @media screen and (max-width: 768px) {
        /* margin-top: -50px; */
        margin-bottom: 30px;
    }
    /* margin-top: -60%; */
    grid-area: col2;
    max-width: 700px;
`





