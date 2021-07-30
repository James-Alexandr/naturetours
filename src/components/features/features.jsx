
import React from 'react';

import '../grid-layout/grid-layout.scss';
import './features.scss';
import '../../styles/global/utilities.scss';
import '../../styles/main.scss'




export default class Features extends React.Component {
    render() {
        return (
            <section className="section-features">

                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="icon-basic-world feature-box_icon"></i>
                            <h3 className="h3-heading u-margin-bottom-2">Explore the world</h3>
                            <p className="feature-box-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error explicabo non eaque repellendus.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="icon-basic-world feature-box_icon"></i>
                            <h3 className="h3-heading u-margin-bottom-2">Explore the world</h3>
                            <p className="feature-box-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error explicabo non eaque repellendus.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="icon-basic-world feature-box_icon"></i>
                            <h3 className="h3-heading u-margin-bottom-2">Explore the world</h3>
                            <p className="feature-box-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error explicabo non eaque repellendus.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="icon-basic-world feature-box_icon"></i>
                            <h3 className="h3-heading u-margin-bottom-2">Explore the world</h3>
                            <p className="feature-box-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error explicabo non eaque repellendus.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}