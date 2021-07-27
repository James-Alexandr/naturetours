import React from 'react';
import "./header.css";
import "../global.css";
import Logo from '../../img/logo-white.png';



export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="logo-box">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">OUTDOORS</span>
                        <span className="heading-primary-sub">Where life happens</span>
                    </h1>
                </div>
            </header>
        );
    }
}