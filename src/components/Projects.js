import {Container, Row, Col} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import laravelBuilderProjectThumb from "../assets/img/portfolio-thumbnail/laravel-builder-project.png";
import cloneOfPostmanThumb from "../assets/img/portfolio-thumbnail/clone-of-postman.png";
import shopLoverThumb from "../assets/img/portfolio-thumbnail/shoplover.png";
import liveExamThumb from "../assets/img/portfolio-thumbnail/live-exam.png";
import kiloByteThumb from "../assets/img/portfolio-thumbnail/kilobyte-slider.png";
import bijoyBanglaThumb from "../assets/img/portfolio-thumbnail/bijoy-bangla-typing-test.png";
import calThumb from "../assets/img/portfolio-thumbnail/calculator.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "LARAVEL PAGE BUILDER",
            description: "Custom page builder with Laravel and Vanilla Javascript from scratch. Powered with Active E-commerce CMS. At the moment Support Heading, Banner, Products Modules",
            imgUrl: laravelBuilderProjectThumb,
            link: "https://youtu.be/DOG_ud3pcas",
        },
        {
            title: "Postman Clone",
            description: "Fully Clone of postman.If you know Postman is not free for team support. That's why i build and deploy this project for my company to easily share Apis with the development teams.",
            imgUrl: cloneOfPostmanThumb,
            link: "http://sapi.shoplover.com/",
        },
        {
            title: "Shoplover",
            description: "Shoplover is a Multi-Vendor E-Commerce website of US-Bangla Group. Currently we are developing this website in various platform.",
            imgUrl: shopLoverThumb,
            link: "https://shoplover.com",
        },
        {
            title: "Live Exam Bd",
            description: "Live Exam Bd is a educational website where student can participate various kind of free and paid exam. Full Backend admin and Frontend made by me",
            imgUrl: liveExamThumb,
            link: "https://liveexambd-bneml.run-ap-south1.goorm.io/",
        },
        {
            title: "Bijoy Bangla Typing Test",
            description: "Bandladesh first ever created Bijoy Bangla Typing Test application with javascript. Fully Developed by me",
            imgUrl: bijoyBanglaThumb,
            link: "http://bdtypeing.rf.gd/",
        },
        {
            title: "KiloByte Slider",
            description: "A simple Vanilla Javascript Plugin By Me",
            imgUrl: kiloByteThumb,
            link: "http://kundefine.000.pe/",
        },
        {
            title: "Calculator",
            description: "A Simple Calculator developed by me. Design was inspire by android mobile calculator",
            imgUrl: calThumb,
            link: "http://calculatorb.rf.gd/",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here is some of the projects i have done.</p>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
