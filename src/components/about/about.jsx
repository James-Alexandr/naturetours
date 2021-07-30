
import './about.scss';
import '../grid-layout/grid-layout.scss';
import H2 from '../h2/h2.jsx';
import '../../styles/global/utilities.scss'
import React from 'react';






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
                        Img
                    </div>
                </div>
            </section>
        );
    }
}