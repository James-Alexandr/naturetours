

import React from 'react';

import H2 from '../h2/h2';



export default class Booking extends React.Component {
    render() {
        return (
            <div className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form " >
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
                                <div className="form_group ">
                                    <div className="form__radio-group">
                                        <input type="radio" id="small" className="form__radio-input" name="size" />
                                        <label for="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour group</label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" id="large" className="form__radio-input" name="size" />
                                        <label for="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour group</label>
                                    </div>
                                </div>
                                <div className="form__group">
                                </div>

                                <button className="btn btn--green ">Next step &rarr;</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}