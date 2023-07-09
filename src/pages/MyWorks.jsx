import { Container, Row, Col } from "reactstrap"
import Limitless from '../assets/images/limitless.png';
import MerchantApp from '../assets/images/limitless-app.png';
import B2bApp from '../assets/images/limitless-b2b.png';
import AMS from '../assets/images/limitless-ams.png';
import School from '../assets/images/school.png';
import Huris from '../assets/images/huris.png';
import { TaggedContentCard } from 'react-ui-cards';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export const MyWorks = () => {
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

    const projects = [
        {
            title: "Limitless Dashboard",
            desc: "Utilized by clients to manage a wide range of data including transaction reports, customer information, product details, and mobile app content.",
            image: Limitless
        },
        {
            title: "Merchant App",
            desc: "A web-based application system designed as an alternative for earning points and redeeming rewards during transactions. This system is utilized by the client and their business partners across various stores.",
            image: MerchantApp
        },
        {
            title: "B2B Portal",
            desc: "A specialized platform used by the client for their B2B transactions, specifically catering to bulk purchasing of vouchers.",
            image: B2bApp
        },
        {
            title: "AMS (Attendance Management System)",
            desc: "An attendance monitoring system implemented by the client to track employee attendance. Employees utilize QR codes for clocking in and out, providing an efficient and convenient method for time tracking.",
            image: AMS
        },
        {
            title: "School website/Enrollment system",
            desc: "A static website and enrollment system designed to cater to both new and existing students. It provides a user-friendly platform for students to enroll and access necessary information related to their educational journey.",
            image: School
        },
        {
            title: "Human Resource Innovations and Solutions",
            desc: "A human resource and organization development consultancy and solutions provider.",
            image: Huris
        }
    ];

    return (
        <Container className="d-flex flex-column pt-5 vh-100">
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
            <Row>
                {projects.map((project, i) => {
                    return (
                        <Col md='4' xs="12" sm="12" className="mb-4 proj" key={project.title}>
                            <TaggedContentCard
                                href='#'
                                thumbnail={project.image}
                                title={project.title}
                                description={project.desc}
                                tags={[]}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}