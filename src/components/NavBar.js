import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {HashLink} from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <svg version="1.1" id="logoSvg">
						<path className="logoPath" d="M51.9,7.8h13.7v23.8c0,9.4,7.6,17,16.9,17s16.9-7.6,16.9-17V2.9h-5v28.8c0,6.6-5.4,12-12,12
						c-6.6,0-12-5.4-12-12V2.9H51.9c-3.4,0-6.5,1.3-8.9,3.7L8.5,41.2V2.9h-5v41.9c0,1.6,1.1,3.1,2.8,3.4c1.2,0.3,2.4-0.2,3.3-1.1
						l16.6-16.7l9.6,14.1c2.4,2.3,5.5,3.6,8.8,3.6h18.5l-4.7-5H44.6c-2,0-3.9-0.8-5.4-2.2l-0.1-0.2L29.7,27l16.8-16.9
						C48,8.6,49.9,7.8,51.9,7.8z"/>
					</svg>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt=""/></a>
                <a href="#"><img src={navIcon2} alt=""/></a>
                <a href="#"><img src={navIcon3} alt=""/></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
