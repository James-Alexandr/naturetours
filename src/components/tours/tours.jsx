
import React from 'react';

import '../grid-layout/grid-layout.scss';
import './tours.scss';
import '../../styles/global/utilities.scss';
import H2 from '../h2/h2';
import Card from '../cards/card';




export default class Tours extends React.Component {
    render() {
        return (
            <section className="section-tours">

                <div className="u-center-text u-margin-bottom-8">
                    <H2 heading="Most popular tours!" />
                </div>
                <div className="row">

                    <div className="col-1-of-3">
                        <Card />
                    </div>
                    <div className="col-1-of-3">
                        col-1-of-3
                    </div>
                    <div className="col-1-of-3">
                        col-1-of-3
                    </div>
                </div>


            </section>
        );
    }
}