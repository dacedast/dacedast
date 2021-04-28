import React, {useState, useEffect} from 'react'
import {Container, Wrapper, TextWrapper, Heading, Subtitle, Column1, Column2, Row} from './Contact.styles'
import { SocialIconLink1, Icon, Inner, FormContainer, FormC, FirstInput,NameInput, SubjectInput, SubmitBtn, EmailInput,TextArea} from './Contact.styles'
import {FaFacebook, FaInstagram, FaYoutube, FaGithub, FaTwitter} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'
import emailjs from 'emailjs-com';
import Aos from 'aos'
import "aos/dist/aos.css"


toast.configure()
const Contact = () => {
    const fadingOut = {
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1, scale: 1}
    }
    useEffect(() => {
        Aos.init({duration: 1100, delay: 100, easing: 'ease-in-out-cubic'});
    },[])
    
    const notify = () => {
        toast.error('All fields are required!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
            className: 'custom-toast'
            })
    }
    const notifyEmail = () => {
        toast.error('Wrong Format of Email!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
            className: 'custom-toast'
            })
    }
    const notifySuccess = () => {
        toast.error('Message had been sent!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
            className: 'custom-toast1'
            })
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const {name, email, subject, message} = formData;
    const handleChange = evt => {
        evt.preventDefault();
        setFormData({
            ...formData,
            [evt.target.name] :evt.target.value,
        })
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        
        if(isEmpty(name) || isEmpty(email) || isEmpty(subject) || isEmpty(message) ) {
            notify()
        } else if (!isEmail(email)) {
            notifyEmail()
        } else {
            emailjs.sendForm('Gmail', 'template_10x2wz9', evt.target, 'user_eBNTM8lSVBp8AovGp9frm')
                .then((result) => {
                    console.log(result.text);
                    
                }, (error) => {
                    console.log(error.text);
                });
                evt.target.reset()
            notifySuccess()
            setFormData({
                ...formData,
                name: '',
                email:'',
                subject: '',
                message: '',
            })
        }
       
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
                    <Column1 >
                        <TextWrapper>
                            <Heading data-aos="fade-in" data-aos-delay="1000">
                                Contact Me
                            </Heading>
                            <Subtitle data-aos="fade-in" data-aos-delay="1500">I'm interested in freelance opportunities - especially ambitious and interesting projects. However, if you have other request or question, don't hesitate to use the form.
                            <br />
                            <br />
                            You can find me on social media:

                            </Subtitle>
                        </TextWrapper>
                        <Inner data-aos="fade-in" data-aos-delay="1800">
                        <SocialIconLink1 href="http://facebook.com/" target="_blank" aria-label="Facebook" >
                            <Icon>
                            <FaFacebook style={{fontSize:'30px', lineHeight:'60px'}}></FaFacebook>
                            </Icon>
                        </SocialIconLink1>
                        <SocialIconLink1 href="https://www.instagram.com/dacedast/" target="_blank" aria-label="Instagram">
                            <Icon>
                            <FaInstagram style={{fontSize:'30px', lineHeight:'60px'}}></FaInstagram>
                            </Icon>
                        </SocialIconLink1>
                        <SocialIconLink1 href="https://www.youtube.com/channel/UCPxCl-trvY2kZtPIsBOUIJw" target="_blank" aria-label="Youtube">
                            <Icon>
                            <FaYoutube style={{fontSize:'30px', lineHeight:'60px'}}></FaYoutube>
                            </Icon>
                        </SocialIconLink1>
                        <SocialIconLink1 href="https://github.com/dacedast" target="_blank" aria-label="GitHub">
                            <Icon>
                            <FaGithub style={{fontSize:'30px', lineHeight:'60px'}}></FaGithub>
                            </Icon>
                        </SocialIconLink1>
                        <SocialIconLink1 href="https://twitter.com/dacedast" target="_blank" aria-label="Twitter">
                            <Icon>
                            <FaTwitter style={{fontSize:'30px', lineHeight:'60px'}}></FaTwitter>
                            </Icon>
                        </SocialIconLink1>
                        <SocialIconLink1 href="http://gmail.com/" target="_blank" aria-label="Gmail">
                            <Icon>
                            <SiGmail style={{fontSize:'30px', lineHeight:'60px'}}></SiGmail>
                            </Icon>
                        </SocialIconLink1>
                        </Inner>
                    </Column1>
                    <Column2>
                        <FormContainer>
                            <FormC id="myform"onSubmit={handleSubmit} noValidate data-aos="fade-down-left" data-aos-delay="100">
                                <FirstInput >
                                    <NameInput type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
                                    <EmailInput  type="email" placeholder="Email" name="email" value={email} onChange={handleChange}/>
                                </FirstInput>
                                <SubjectInput  type="text" placeholder="Subject" name="subject" value={subject} onChange={handleChange}/>
                                <TextArea placeholder="Type something..." name="message" value={message} onChange={handleChange}></TextArea>
                                <SubmitBtn type="submit" value="Send Message"></SubmitBtn>
                            </FormC>
                        </FormContainer>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Contact
