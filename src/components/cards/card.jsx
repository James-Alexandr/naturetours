
import React from 'react';

import '../grid-layout/grid-layout.scss';
import './card.scss';
import '../../styles/global/utilities.scss';





export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card__side card__side--front card__side--front-1">
                    TEXT
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    BACK
                </div>
            </div>
        );
    }
}