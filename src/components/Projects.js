import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import laravelBuilderProjectThumb from "../assets/img/portfolio-thumbnail/laravel-builder-project.png";
import cloneOfPostmanThumb from "../assets/img/portfolio-thumbnail/clone-of-postman.png";
import projImg3 from "../assets/img/project-img3.png";
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
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "https://google.com",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: laravelBuilderProjectThumb,
            link: "https://google.com",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: cloneOfPostmanThumb,
            link: "https://google.com",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "https://google.com",
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
