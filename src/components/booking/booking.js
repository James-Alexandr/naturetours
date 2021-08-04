

import React from 'react';

import H2 from '../h2/h2';



export default class Booking extends React.Component {
    render() {
        return (
            <div className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-4">
                                    <H2 heading="Placeholder" />
                                </div>


                                <div className="form__group">
                                    <input className="form__input" type="text" placeholder="Full Name" id="name" required>
                                    </input>
                                    <label htmlFor="text" className="form__label" id="name"> Full Name</label>
                                </div>
                                <div className="form__group">
                                    <input className="form__input" type="email" placeholder="Email Address" id="name" required>
                                    </input>
                                    <label htmlFor="text" className="form__label" id="name"> Email</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}