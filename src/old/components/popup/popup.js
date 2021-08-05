

import React from 'react';


import image1 from '../../img/nat-8.jpg';
import image2 from '../../img/nat-9.jpg';

import H2 from '../h2/h2.jsx';




export default class Popup extends React.Component {
    render() {
        return (
            <div className="popup" id="popup">
                <div className="row">
                    <div className="popup__content">
                        <div className="popup__left">
                            <img src={image1} alt="tour" className="popup__img" />
                            <img src={image2} alt="tour" className="popup__img" />
                        </div>
                        <div className="popup__right">
                            <a href="#section-tours" className="popup__close">&times;</a>
                            <H2 heading="Start booking now!" />
                            <h3 className="u-margin-bottom-2">Read these terms before booking.</h3>
                            <p className="popup__text">s the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugi  ipsum dolor sit amet consectetur adipisicing elit.The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. Natus modi nostrum adipisci eligendi veniam non as</p>
                            <a href="#" className="btn btn--green">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}