import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import {CircularProgress, GradientCircularProgress} from "react-circular-gradient-progress";

export const Skills = () => {



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>I really believe that everyone has a talent, ability, or skill<br/> that he can mine to support himself and to succeed in life.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" >

                                <div className="item" style={{width: 200, height: 200}}>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <GradientCircularProgress
                                            startColor="#AA367C"
                                            middleColor="#4A2FBD"
                                            size={150}
                                            progress={95}
                                        />
                                        <h5 className="mt-2">PHP</h5>
                                    </div>
                                </div>
                                <div className="item" style={{width: 200, height: 200}}>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <GradientCircularProgress
                                            startColor="#AA367C"
                                            middleColor="#4A2FBD"
                                            size={150}
                                            progress={90}
                                        />
                                        <h5 className="mt-2">LARAVEL</h5>
                                    </div>

                                </div>

                                <div className="item" style={{width: 200, height: 200}}>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <GradientCircularProgress
                                            startColor="#AA367C"
                                            middleColor="#4A2FBD"
                                            size={150}
                                            progress={95}
                                        />
                                        <h5 className="mt-2">JAVASCRIPT</h5>
                                    </div>
                                </div>

                                <div className="item" style={{width: 200, height: 200}}>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <GradientCircularProgress
                                            startColor="#AA367C"
                                            middleColor="#4A2FBD"
                                            size={150}
                                            progress={80}
                                        />
                                        <h5 className="mt-2">REACT JS</h5>
                                    </div>
                                </div>

                                <div className="item" style={{width: 200, height: 200}}>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <GradientCircularProgress
                                            startColor="#AA367C"
                                            middleColor="#4A2FBD"
                                            size={150}
                                            progress={90}
                                        />
                                        <h5 className="mt-2">MYSQL</h5>
                                    </div>
                                </div>

                                <div className="item" style={{width: 200, height: 200}}>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <GradientCircularProgress
                                            startColor="#AA367C"
                                            middleColor="#4A2FBD"
                                            size={150}
                                            progress={60}
                                        />
                                        <h5 className="mt-2">VUE JS</h5>
                                    </div>
                                </div>


                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
    )
}
