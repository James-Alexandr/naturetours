import React from 'react';



import Logo from '../../img/logo-white.png';



export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="logo-box">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="text-box moveInLeft">
                    <h1 className="heading-primary moveInLeft">
                        <span className="heading-primary-main">OUTDOORS</span>
                        <span className="heading-primary-sub">Where life happens</span>
                    </h1>
                    <a className="btn btn-white btn-animated" href="#">Discover our tours</a>

                </div>


            </header>
        );
    }
}