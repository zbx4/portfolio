import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ServiceItem from './ServiceItem';
import './Services.css';

class Services extends Component {
    responsive = {
        0: { items: 1 },
        700: {items: 2 },
        1024: { items: 3 },
    }

    padding =  {
        paddingLeft: 10,     // in pixels
        paddingRight: 10
    }

    render() {
        const serviceItems = this.props.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
            ));

        return (
            <div className="servicesContainer">
                <span id="services" className="servicesAnchor"></span>
                <h3 className="servicesTitle">Services</h3>
                <div className="serviceList">
                    {serviceItems}
                </div>
            </div>
        )
    }
}

// PropTypes
Services.propTypes = {
    services: PropTypes.array.isRequired
}

export default Services;
