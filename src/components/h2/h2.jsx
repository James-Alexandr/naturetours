
import './h2.scss';


import React from 'react';





export default class H2 extends React.Component {
    render() {
        return (
            <h2 className="heading-secondary">
                {this.props.heading}
            </h2>
        );
    }
}