import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './SkillItem.css';

class SkillItem extends Component {
    render() {
        const image =`./${this.props.skill.image}`;
        const imageTitle = this.props.skill.title;
        return (
            <div className="skillItemContainer">
                 <img src={image} alt={imageTitle} title={imageTitle} style={{width: "100%"}}/>
            </div>
        )
    }
}

SkillItem.propTypes = {
    skill: PropTypes.object.isRequired
}

export default SkillItem;
