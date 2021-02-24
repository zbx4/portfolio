import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import './header.css';

const subInfo = [
          "Turn that project idea into reality",
          "Get a website for your business",
          "All built with modern technologies"
        ];

class Header extends Component {

    constructor() {
        super();
        this.state = { textIdx: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
        let currentIdx = this.state.textIdx;
        this.setState({ textIdx: currentIdx + 1 });
        }, 3000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }
    
    render() {
        const image =`./head1.jpg`;
        const alt = '';
        let subtext = subInfo[this.state.textIdx % subInfo.length];


        return (
            <div id="home" className="App-header heroContainer">
     
                <h1 className="headerTitle">Software development <br/> to help you achieve your goals</h1>
                <div className="headerSubtitle">
                    <p className="subtitle">{subtext}</p>
                </div>
                
                <Button className="contactButton" variant="outline-primary" href='#contact'>
                    Contact
                </Button>

                <div className="imageHero"/>
                <div className="imageOverlay"/>
             
            </div>
        )
    }
}

export default Header;
