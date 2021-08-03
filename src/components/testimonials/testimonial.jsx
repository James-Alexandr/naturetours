
import React from 'react';
import H2 from '../h2/h2.jsx';

import image1 from '../../img/nat-8.jpg';


export default class About extends React.Component {
    render() {
        return (
            <section className="section-testimonials">
                <div className="u-center-text u-margin-bottom-8">
                    <H2 heading="See what others are saying" />
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={image1} alt="Person on a tour" className="story__image" />
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-h3 u-margin-bottom-2 ">
                                Best week of my life</h3>
                            <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolor itaque soluta. Nostrum incidunt minus illum nemo, earum obcaecati doloribus, a numquam sint possimus odio asperiores! Omnis doloribus aliquam mini</p>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}