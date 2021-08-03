
import React from 'react';
import H2 from '../h2/h2.jsx';

import image1 from '../../img/nat-8.jpg';
import image2 from '../../img/nat-9.jpg';
import image3 from '../../img/nat-10.jpg';
import video1 from '../../img/video.mp4';
import video2 from '../../img/video.webm';


export default class About extends React.Component {
    render() {
        return (
            <section className="section-testimonials">
                <div className="bg-video-testimonial">
                    <video className="bg-video-testimonial__content" autoPlay muted loop>
                        <source src={video1} type="video/mp4" />
                        <source src={video2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="u-center-text u-margin-bottom-8">
                    <H2 heading="We make people really happy" />
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">

                            <img src={image1} alt="Person on a tour" className="story__image" />
                            <figcaption className="story__caption">Sonia Stevens</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-h3 u-margin-bottom-2 ">
                                Best week of my life</h3>
                            <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolor itaque soluta. Nostrum incidunt minus illum nemo, earum obcaecati doloribus, a numquam sint possimus odio asperiores! Omnis doloribus aliquam mini</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">

                            <img src={image2} alt="Person on a tour" className="story__image" />
                            <figcaption className="story__caption">Mario Orta</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-h3 u-margin-bottom-2 ">
                                Had lots of fun</h3>
                            <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolor itaque soluta. Nostrum incidunt minus illum nemo, earum obcaecati doloribus, a numquam sint possimus odio asperiores! Omnis doloribus aliquam mini</p>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">

                            <img src={image3} alt="Person on a tour" className="story__image" />
                            <figcaption className="story__caption">Miriam Okle</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-h3 u-margin-bottom-2 ">
                                Relaxing and exiting vacations</h3>
                            <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolor itaque soluta. Nostrum incidunt minus illum nemo, earum obcaecati doloribus, a numquam sint possimus odio asperiores! Omnis doloribus aliquam mini</p>
                        </div>
                    </div>
                </div> */}
                <div className="u-center-text u-margin-top-huge" >
                    <a href="#" className="btn btn-text ">Discover all tours &rarr;</a>
                </div>

            </section>


        );
    }
}