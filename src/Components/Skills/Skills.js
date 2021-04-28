import React, {useEffect} from 'react'
import {Container, Wrapper, TextWrapper, Heading, Subtitle,Column1, Column2, Row} from './Skills.styles'
import './Skills.css'
import Aos from 'aos'
import "aos/dist/aos.css"



const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 1100, easing: 'ease-in-quad'});
    },[])
    const fadingOut = {
        hidden: {opacity: 0, x: '-100vw', scale: 0.1},
        visible: {opacity: 1, x: 0, scale: 1}
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
                  <Column1 data-aos="zoom-out" data-aos-delay="400">
                    <div className="main-card">
                        HTML, CSS, JS, SASS, BOOTSTRAP
                    <div className="up-card">
                        Front-end
                    </div>
                    <div className="down-card">
                        See more...
                    </div>
                    </div>
                    <div className="main-card">
                        NODEJS, MONGODB, EXPRESS
                    <div className="up-card">
                        Back-end
                    </div>
                    <div className="down-card">
                        See more...
                    </div>
                    </div>
                    <div className="main-card">
                        PHOTOSHOP, ILLUSTRATOR, CANVA
                    <div className="up-card">
                        Design
                    </div>
                    <div className="down-card">
                        See more...
                    </div>
                    </div>
                    <div className="main-card">
                        VSCODE, GIT, NETLIFY, HEROKU
                    <div className="up-card">
                        Other Tools
                    </div>
                    <div className="down-card">
                        See more...
                    </div>
                    </div>
                   
                  </Column1>
                  <Column2 data-aos="fade" data-aos-delay="600">
                  <TextWrapper>
                        <Heading>
                            Skills & Experience
                        </Heading>
                        <Subtitle>I started coding during my school years and since that time I love it.
                            I tried many things, such as Game Design, Data Science and etc. Now I have a serious passion for Web Development.
                            I create responsive websites that are fast and easy to use.
                            <br />
                            My main area is Front End Development. Excellent knowledge of HTML, CSS, Javascript.
                            I also have full-stack developer experience with MERN.

                        </Subtitle>
                    </TextWrapper>
                  </Column2>
              </Row>
          </Wrapper>
        </Container>
    )
}

export default Skills
