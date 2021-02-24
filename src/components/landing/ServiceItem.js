import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

class ServiceItem extends Component {
    render() {
        const image = `./${this.props.service.image}`;
        const imageTitle = this.props.service.title;
    
        return (
          <Card style={cardStyle}>
            <Card.Body>
                <img src={image} alt={imageTitle} style={icStyle}/>
              <Card.Title>{this.props.service.title}</Card.Title>
              <Card.Text style={cardTextStyle}>
                {this.props.service.description}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

/*      <i className="material-icons-outlined" style={{fontSize: '84px', color: this.props.service.color}}>
                {this.props.service.image}</i>*/

const cardTextStyle ={
  color: '#737373'
}

const icStyle = {
  height: '90px',
  marginBottom: '10px',
}

const cardStyle = {
  width: '300px',
  height: '230px',
  alignSelf: 'center',
  marginTop: '16px'
}

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired
}

export default ServiceItem;
