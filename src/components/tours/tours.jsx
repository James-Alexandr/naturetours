
import React from 'react';

import H2 from '../h2/h2';
import Card from '../cards/card';
import Card2 from '../cards/card2';
import Card3 from '../cards/card3';




//import image1 from '../../img/nat-5.jpg';
//import image2 from '../../img/nat-6.jpg';
//import image3 from '../../img/nat-7.jpg';





export default class Tours extends React.Component {
    render() {
        return (
            <section className="section-tours">
                <div className="u-center-text u-margin-bottom-8">
                    <H2 heading="Most popular tours!" />
                </div>
                <div className="row">

                    <div className="col-1-of-3">
                        <Card
                        />
                    </div>
                    <div className="col-1-of-3">
                        <Card2 />
                    </div>
                    <div className="col-1-of-3">
                        <Card3 />
                    </div>
                </div>
            </section>
        );
    }
}