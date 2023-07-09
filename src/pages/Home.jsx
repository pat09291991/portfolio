import React, { Fragment, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from 'react-scroll';
import { MyWorks } from "./MyWorks";
import LinkedIn from '../assets/images/linkedin.png';
import Facebook from '../assets/images/facebook.png';
import Instagram from '../assets/images/instagram.png';
import CV from '../assets/files/Patrick_Llegos_CV.pdf';
import { useNavigate } from "react-router-dom";
import { isDesktop, isMobile } from "react-device-detect";

export const Home = () => {
    const navigate = useNavigate();

    const handleDownloadCv = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Patrick Llegos.pdf';
        link.click();
    }

    const handlePageTransition = (link) => {
        const homepage = document.getElementById('homepage');
        homepage.classList.add('slide-left');

        // Scroll to the top-left of the page
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        // Remove slide-left class after the transition completes
        setTimeout(() => {
            homepage.classList.remove('slide-left');
            navigate(`/${link}`)
        }, 1000);
    }

    const [animateFull, setAnimateFull] = useState(false);
    const [animateStack, setAnimateStack] = useState(false);
    const [animateHello, setAnimateHello] = useState(false);
    const [animateIam, setAnimateIam] = useState(false);
    const [animatePat, setAnimatePat] = useState(false);
    const [animateSocials, setAnimateSocials] = useState(false);
    const full = 'FULL';
    const stack = 'STACK';
    const socials = [
        { id: 1, link: "https://www.linkedin.com/in/patrick-llegos-576304126", image: LinkedIn },
        { id: 2, link: "https://www.facebook.com/strawhat.Patrick", image: Facebook },
        { id: 3, link: "https://www.instagram.com/llegospat", image: Instagram }
    ];

    useEffect(() => {
        if (isDesktop) {
            setAnimateFull(true);
            setTimeout(() => {
                setAnimateStack(true)
            }, 1200)
            setTimeout(() => {
                setAnimateHello(true)
            }, 3000)
            setTimeout(() => {
                setAnimateIam(true)
            }, 3500)
            setTimeout(() => {
                setAnimatePat(true)
            }, 4000)
            setTimeout(() => {
                setAnimateSocials(true)
            }, 4500)
        }

        if (isMobile) {
            setAnimateHello(true)
            setTimeout(() => {
                setAnimateIam(true)
            }, 500)
            setTimeout(() => {
                setAnimatePat(true)
            }, 1000)
            setTimeout(() => {
                setAnimateSocials(true)
            }, 2000)
        }
    }, []);



    return (
        <Container fluid className="w-100 px-0 mx-0" id="homepage">
            <section id="home" style={{ height: '100vh' }}>
                <Row className="w-100 align-items-center justify-content-center h-100" style={{overflowX: 'hidden'}}>
                    {isDesktop ?
                        <Col md="6">
                            <div className="text-end" style={{ opacity: 0.1, color: '#fff', lineHeight: '10rem' }}>
                                <p style={{ fontSize: '15rem', letterSpacing: '1rem' }} className="pos">
                                    {full.split('').map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`letter ${animateFull ? 'fade-up' : ''}`}
                                            style={{ animationDelay: `${index * 300}ms` }}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                </p>
                                <p style={{ fontSize: '15rem', letterSpacing: '1rem' }} className="pos">
                                    {stack.split('').map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`letter ${animateStack ? 'fade-up' : ''}`}
                                            style={{ animationDelay: `${index * 300}ms` }}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </Col>
                        : ""}
                    <Col md={isDesktop ? "6" : "12"}>
                        <div style={{ lineHeight: isDesktop ? '10rem' : "5rem" }}>
                            <p style={{ fontSize: isDesktop ? '10rem' : "3rem", letterSpacing: '1rem' }} className={animateHello ? "name fade-up" : "name"}>Hello<span className="text-danger">.</span></p>
                            <p style={{ fontSize: isDesktop ? '10rem' : "3rem", letterSpacing: '1rem' }} className={animateIam ? "name fade-up" : "name"}>I am</p>
                            <p style={{ fontSize: isDesktop ? '10rem' : "3rem", letterSpacing: '1rem' }} className={animatePat ? "name fade-up" : "name"}>Patrick</p>
                        </div>
                        <div className="mb-3">
                            {socials.map(social => {
                                return (
                                    <span key={social.id}>
                                        <a href={social.link} target="_blank"><img src={social.image} className={animateSocials ? "fade-up me-3 socialIcons" : "me-3 socialIcons"} /></a>
                                    </span>
                                )
                            })}
                        </div>
                        <div>
                            <Button outline className={animateSocials ? "text-light me-3 mb-3 fade-up" : "name"} onClick={handleDownloadCv}>download CV</Button>
                            <Button outline className={animateSocials ? "text-light me-3 mb-3 fade-up" : "name"} onClick={() => handlePageTransition('my-works')}>view my work</Button>
                            <Button outline className={animateSocials ? "text-light me-3 mb-3 fade-up" : "name"} onClick={() => handlePageTransition('tech-stacks')}>tech stacks</Button>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}