import React from 'react';

import "./header.scss"

import Logo from '../../img/logo-white.png';
import video2 from '../../img/mountain.mp4';


export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {/* <div className="bg-video" dangerouslySetInnerHTML={{
                    __html: `
                    <video className="bg-video__content" playsinline loop autoPlay muted autobuffer>
                        <source src=${video2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    ` }}></div> */}
                <div className="logo-box">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="text-box moveInLeft">
                    <h1 className="heading-primary moveInLeft">
                        <span className="heading-primary-main">OUTDOORS</span>
                        <span className="heading-primary-sub">Where life happens</span>
                    </h1>
                    <a className="btn btn--white btn-animated" href="#">Discover our tours</a>

                </div>


            </header>
        );
    }
}