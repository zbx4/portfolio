import React, { Component } from 'react'
import SkillItem from './SkillItem'
import PropTypes from 'prop-types';
import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <div className="skillsContainer">
                <span id="skills" className="skillsAnchor"></span>
                <h3 className="skillsTitle">Technologies</h3>
                <div className="skillsContent">
                    {this.props.skills.map((skill) => (
                        <SkillItem key={skill.id} skill={skill}/>
                    ))}
                </div>
            </div>
        )
    }
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired
}

export default Skills;
