import React from 'react'
import {Container, Wrapper, TextWrapper, Heading, Subtitle, BtnInfo,BtnInfo2, BtnWrap} from './Home.styles'

const Home = () => {
    const fadeRight = {
        hidden: {opacity: 0, x: -300},
        visible: {opacity: 1, x: 0}
    }
    const fadeLeft = {
        hidden: {opacity: 0, x: 300},
        visible: {opacity: 1, x: 0}
    }
    return (
        <Container>
            <Wrapper>
                        <TextWrapper>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >H</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .10, duration: 1 }}
                            >i</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .15, duration: 1 }}
                            >,</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .20, duration: 1 }}
                            > I</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .25, duration: 1 }}
                            >'</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .30, duration: 1 }}
                            >m</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .35, duration: 1 }}
                            > D</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .40, duration: 1 }}
                            >a</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .45, duration: 1 }}
                            >s</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .50, duration: 1 }}
                            >t</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .55, duration: 1 }}
                            >a</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .60, duration: 1 }}
                            >n</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .65, duration: 1 }}
                            >,</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .70, duration: 1 }}
                            > w</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .75, duration: 1 }}
                            >e</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .80, duration: 1 }}
                            >b</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .85, duration: 1 }}
                            > d</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .90, duration: 1 }}
                            >e</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .95, duration: 1 }}
                            >v</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >e</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.05, duration: 1 }}
                            >l</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1, duration: 1 }}
                            >o</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.15, duration: 1 }}
                            >p</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                            >e</Heading>
                            <Heading
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.25, duration: 1 }}
                            >r</Heading>
                            <Subtitle 
                                variants={fadeRight}
                                initial='hidden'
                                animate='visible'
                                transition={{delay: 1.5, duration: 1.7}}
                                >Full Stack</Subtitle>
                            <BtnWrap
                                variants={fadeLeft}
                                initial='hidden'
                                animate='visible'
                                transition={{delay: 1.5, duration: 1.7}}
                            >
                                <BtnInfo to='/contact'>
                                    Contact me
                                </BtnInfo>
                                <BtnInfo2 to='/about'>
                                    More about me
                                </BtnInfo2>
                                 
                            </BtnWrap>
                        </TextWrapper>
           
            </Wrapper>
        </Container>
    )
}

export default Home
