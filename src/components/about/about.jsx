
import React from 'react';


import H2 from '../h2/h2.jsx';


import nat1 from '../../img/nat-1-large.jpg';
import nat2 from '../../img/nat-2-large.jpg';
import nat3 from '../../img/nat-3-large.jpg';




export default class About extends React.Component {
    render() {
        return (
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-8">
                    <H2 heading="Exciting tours for adventurous people!" />
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-h3 u-margin-bottom-2">
                            Do you ever fall in love with nature?
                        </h3>
                        <p className="paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam facere deserunt rerum officia ex molestiae tempora.
                        </p>
                        <h3 className="heading-h3  u-margin-bottom-2">
                            Falling in Love With the Natural World.</h3>
                        <p className="paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam facere deserunt rerum officia ex molestiae tempora.
                        </p>
                        <a href="#" className="btn-text">
                            Learn more &rarr;
                        </a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={nat1} alt="Mountain" className="composition_photo composition_photo--p1" />
                            <img src={nat2} alt="View" className="composition_photo composition_photo--p2" />
                            <img src={nat3} alt="Hiking" className="composition_photo composition_photo--p3" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}