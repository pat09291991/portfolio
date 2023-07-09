import { Container, Row, Col, Modal, ModalHeader, ModalBody, Popover, PopoverHeader, PopoverBody, Button } from "reactstrap"
import html from '../assets/images/icons/html.png';
import css from '../assets/images/icons/css.png';
import js from '../assets/images/icons/js.png';
import php from '../assets/images/icons/php.png';
import laravel from '../assets/images/icons/laravel.png';
import node from '../assets/images/icons/node.png';
import react from '../assets/images/icons/react.png';
import bootstrap from '../assets/images/icons/bootstrap.png';
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const TechStacks = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const animateElements = () => {
            const elements = document.querySelectorAll('.proj');

            elements.forEach((element) => {
                const fadeDuration = Math.random() * 4 + 1; // Random fade duration between 1 and 5 seconds
                const fadeDelay = Math.random() * 3; // Random fade delay between 0 and 3 seconds

                element.style.animationDuration = `${fadeDuration}s`;
                element.style.animationDelay = `${fadeDelay}s`;
            });
        };
        animateElements();
    }, []);

    const techStacks = [
        {
            name: "React",
            image: react,
            desc: 'ReactJS is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating interactive and dynamic web applications.'
        },
        {
            name: "Laravel",
            image: laravel,
            desc: 'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.'
        },
        {
            name: "Php",
            image: php,
            desc: 'PHP (Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.'
        },
        {
            name: "HTML",
            image: html,
            desc: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
        },
        {
            name: "Css",
            image: css,
            desc: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML)."
        },
        {
            name: "Bootstrap",
            image: bootstrap,
            desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
        },
        {
            name: "Javascript",
            image: js,
            desc: "JavaScript is a high-level programming language primarily used for creating interactive and dynamic behavior on websites. It is a versatile language that runs on the client-side (in web browsers) as well as the server-side (with the help of frameworks like Node.js)."
        },
        {
            name: "Node Js",
            image: node,
            desc: "Node.js is a runtime environment that allows you to run JavaScript on the server-side. It is built on the V8 JavaScript engine, the same engine that powers the Google Chrome browser."
        },
    ];

    const [popoverOpen, setPopoverOpen] = useState({});

    const togglePopover = (buttonId) => {
        setPopoverOpen(prevState => ({
            ...prevState,
            [buttonId]: !prevState[buttonId]
        }));
    };

    return (
        <Container className="d-flex flex-column py-5 vh-100">
            <div className="d-flex align-items-center justify-content-between">
                <div className="otherPageTitle mb-5">
                    <h1>Tech Stacks</h1>
                    <hr className="underline" />
                </div>
                <div className="otherPageTitle mb-5">
                    <h1><AiOutlineHome style={{ cursor: 'pointer' }} onClick={() => navigate('/home')} /></h1>
                    <hr className="underlineBack" />
                </div>
            </div>

            <Row className="text-center">
                {techStacks.map((icon, i) => {
                    return (
                        <Col md='4' xs="12" sm="12" className="mb-5 proj" key={i}>
                            <Button id={`icon${i}`} type="button" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <img src={icon.image} style={{ height: "5rem", cursor: "pointer" }} />
                            </Button>
                            <Popover
                                placement="right"
                                isOpen={popoverOpen[`icon${i}`]}
                                target={`icon${i}`}
                                toggle={() => togglePopover(`icon${i}`)}
                            >
                                <PopoverHeader className="bg-dark">{icon.name}</PopoverHeader>
                                <PopoverBody className="bg-dark text-white">{icon.desc}</PopoverBody>
                            </Popover>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}