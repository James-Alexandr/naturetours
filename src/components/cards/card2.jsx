
import React from 'react';


import './card.scss';
import '../../styles/global/utilities.scss';


export default class Card2 extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card__side card__side--front card__side--front-2"  >
                    <div className="card__picture card__picture--2 ">

                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">
                            Mountain Killer
                        </span>

                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>3 day tour</li>
                            <li>Up to 45 people</li>
                            <li>4 tour guides</li>
                            <li>Sleep in cozy cabin</li>
                            <li>Difficulty: medium</li>
                        </ul>
                    </div>


                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">
                                $250
                            </p>
                            <a href="#" className="btn btn-back-card">Book now</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}