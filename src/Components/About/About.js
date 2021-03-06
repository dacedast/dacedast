import React from 'react'
import {Container, Wrapper, TextWrapper, Heading, Subtitle, BtnInfo, BtnWrap, Column1, Column2, Row} from './About.styles'
import {TiArrowSortedDown} from 'react-icons/ti'
import "./About.css"
// import Aos from 'aos'

// import "aos/dist/aos.css"


const About = () => {
    // useEffect(() => {
    //     Aos.init({duration: 1100, delay: 100, easing: 'linear'});
    // },[])
    const fadingOut = {
        hidden: {opacity: 0, y: '-100vh', scale: 0.2},
        visible: {opacity: 1, y: 0, scale: 1}
    }
    return (
        <Container 
            variants={fadingOut}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1.3 }}
        >
            <Wrapper>
                <Row>
                <Column1 
                >
                <TextWrapper  >
                    <Heading 
                        
                    >Me & My Passion</Heading>
                    <Subtitle   >I'm a web developer located in Kyrgyzstan. My job is to create dynamic user experiences. Well organized person, problem solver and creative UI builder with high attention to details.
                        Also fan of Golden State Warriors, Elon Musk and love anime.
                        <br />
                        Always interested in engaging projects and ready for cooperation proposals.
                    </Subtitle>
                    <BtnWrap  >
                        <BtnInfo to="/contact" >Let's build something amazing<TiArrowSortedDown /></BtnInfo>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2  >
                    <li>
                        <h3  >Hardwork</h3><span className="bar"><span className="hardwork"></span></span>
                        <h3  >Positive attitute</h3><span className="bar"><span className="attitude"></span></span>
                        <h3  >Communication </h3><span className="bar"><span className="comm"></span></span>
                        <h3  >Task management</h3><span className="bar"><span className="task"></span></span>
                        <h3  >Learning ability</h3><span className="bar"><span className="learn"></span></span>
                        <h3  >Critical thinking</h3><span className="bar"><span className="thinking"></span></span>
                    </li>
                </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default About
