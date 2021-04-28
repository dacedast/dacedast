import styled from 'styled-components'
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
    color: #ff0b56;
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




export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col2' 'col1';
    }
`
export const Column1 = styled.div`
    max-width: 500px;
    grid-area: col1;
    display:grid;
    grid-template-columns: 50% 50%;
    @media screen and (max-width: 768px) {
        margin-bottom: 100px;
    }
`
export const Column2 = styled.div`
    @media screen and (max-width: 768px) {
        /* margin-top: -50px; */
        margin-bottom: 30px;
    }
    /* margin-top: -60%; */
    grid-area: col2;
    max-width: 700px;
    display:grid;
`





export const HeaderBox = styled.h4`
    font-size: 1.3rem;
    color: #ff0b56;
    `
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    `
export const Logo = styled.img`
    height: 50px;
    width: 50px;
    margin-right: 10px;
    `

export const ItemBox = styled.li`
    color: white;
    text-transform: uppercase;
    transition: .2s ease-in;
    &:hover {
        color: #b2b2b2;
        transform: rotate(3deg);
        
    }
`




