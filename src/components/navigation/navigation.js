

import React from 'react';





export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp; </div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#" className="navigation__link"><span></span>About tours</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span></span>Your benefits</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span></span>Popular tours</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span></span>Stories</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span></span>Book now</a></li>

                    </ul>

                </nav>
            </div>
        );
    }
}