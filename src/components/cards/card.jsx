
import React from 'react';


import './card.scss';
import '../../styles/global/utilities.scss';

//import image1 from '../../img/nat-6.jpg';
// style={{ backgroundImage: `url(${image1})` }}
// style={{ backgroundImage: ` url(${this.props.image1})` }}

//$color-secondary-light: #ffb900;
// $color-secondary-dark: #ff7730;
// linear-gradient(to right bottom, #ffb900, #ff7730),

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card__side card__side--front card__side--front-1"  >
                    <div className="card__picture card__picture--1 ">

                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">
                            Sea lover
                        </span>

                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>3 day tour</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy house</li>
                            <li>Difficulty: easy</li>
                        </ul>
                    </div>


                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">
                                $249
                            </p>
                            <a href="#popup" className="btn btn--white btn-back-card">Book now</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}