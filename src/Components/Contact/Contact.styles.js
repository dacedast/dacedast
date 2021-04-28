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
    font-size: 1rem;
    color: #b2b2b2;
    @media screen and (max-width: 600px) {
        font-size: 1rem;
    }
`


export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 600px) {
        grid-template-areas: 'col1' 'col2';
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
    margin-bottom: -100px;
`




export const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-gap: 1rem;
    padding: 1rem 80px;
    font-size: 1.2rem;
    @media screen and (max-width: 990px) {
        grid-template-columns: 1fr;
        padding: 2rem 50px;
    }
    @media screen and (max-width: 660px) {
        grid-template-columns: 1fr;
        padding: 2rem 50px;
    }

`
export const SocialIconLink1 = styled.a`
    display: inline-block;
    color: #fff;
    height: 60px;
    width: 60px;
    text-decoration: none;
    margin: 0 5px;
    overflow: hidden;
    /* background: #08fdd8; */
    border-radius: 50px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1) ;
    transition: all 0.1s ease-in;
    &:hover{
        color: #ff0b56;
    }
    /* &:nth-child(1):hover{
        background: #4267b2;
    }
    &:nth-child(2):hover{
        background: #e1306c;
    }
    &:nth-child(3):hover{
        background: #ff0000;
    }
    &:nth-child(4):hover{
        background: grey;
    }
    &:nth-child(5):hover{
        background: #1da1f2;
    }
    &:nth-child(6):hover{
        background: crimson;
    } */
`


export const Icon = styled.div`
    display: inline-block;
    height: 60px;
    width: 60px;
    border-radius: 50px;
    box-sizing: border-box;
    line-height: 60px;
    text-align: center;
    transition: all 0.3s ease-out;
    
`
export const Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
`

export const FormContainer = styled.div`
    max-width: 300px;
    display: grid;
    height: 400px;
    justify-content: center;
    margin-left: 20px;
    /* align-items: center; */
`

export const FormC = styled.form`
    display: grid;
    font-family: inherit;
    padding: 10px 10px 10px 10px;
    font-size: 1.1rem;
    color: #151515;
    /* height: 300px; */
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
    
`
export const FirstInput = styled.div`
    width: 100%;
    margin-bottom: -10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`
export const NameInput = styled.input`
    margin: 0 10px 10px 0;
    font-family: inherit;
    border: 1px solid #ff0b56;
    height: 50px;
    background: #171717;
    border-radius: 5px;
    color: #b2b2b2;
    &:focus {
        border: 1px solid red;
    }
    
    
`

export const EmailInput = styled.input`
    border-radius: 5px;

    height: 50px;
    background: #171717;
    font-family: inherit;
    border: 1px solid #ff0b56;
    color: #b2b2b2;


`
export const SubjectInput = styled.input`
    border: 1px solid #ff0b56;
     height: 50px;
         border-radius: 5px;

    font-family: inherit;
     width: 98%;
     color: #b2b2b2;
     background: #171717;
     &:focus{
        
    }

`

export const TextArea = styled.textarea`
    resize: none;
    font-family: inherit;
    border: 1px solid #ff0b56;
    padding-left: 10px;
    min-height: 100px;
        border-radius: 5px;

    color: #b2b2b2;
    background: #171717;
    margin-bottom: 20px;


`
export const SubmitBtn = styled.input`
    border: none;
    background: #171717;
    color: #ff0b56;
        border-radius: 5px;

    border: 1px solid #ff0b56;
    position: relative;
    font-family: inherit;
    width: 150px;
    left: 11rem;
    transition: .3s all ease-in;
    &:hover {
        color: black;
        background: #ff0b56;
    }
`






