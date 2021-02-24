import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

    state ={
        name: '',
        email: '',
        message: '',    
    }

    render() {
        return(
            <div className="contactContainer">
                <span id="contact" className="contactAnchor"></span>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNqynq57dl2_R_VZdZOxhiE3eo6CsCoRcfmiIzy-Pv6Fzpsw/viewform?embedded=true" width="600" height="820" frameborder="0" marginheight="0" marginwidth="0" title="contactForm">Loading…</iframe>
                <div className="contactImage" />
            </div>
        )
    }
}

export default Contact;
