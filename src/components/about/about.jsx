
import './about.scss';
import '../grid-layout/grid-layout.scss';
import H2 from '../h2/h2.jsx';
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
                        Text
                    </div>
                    <div className="col-1-of-2">
                        Img
                    </div>
                </div>
            </section>
        );
    }
}