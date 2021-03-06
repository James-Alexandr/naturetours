
import React from 'react';
import Logo from '../../img/logo-green-2x.png';





export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src={Logo} alt="Full logo" className="footer__logo" />
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Privacy</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            <a href="#" className="footer__link"> Copyright
                            </a>  Requires a valid value to be accessible. Provide a valid, navigable address as the href value commercial.
                        </p>
                    </div>
                </div>

            </footer>
        );
    }
}