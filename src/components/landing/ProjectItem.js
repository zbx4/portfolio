import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './ProjectItem.css';

class ProjectItem extends Component {
    render() {
        const image =`./${this.props.project.image}`;
        return (
            <div className="projectItemContainer">
                    <div className="projectImage">
                        <img src={image} alt={this.props.project.title} />
                    </div>
                    <div className="projectDescription">
                        <h3 className="projectTitle">{this.props.project.title}</h3>
                        <p className="projectDesc">{this.props.project.description}</p>
                        {this.props.project.visitEnabled &&
                            <Button className="visitButton" variant="outline-primary" href={this.props.project.projectLink}>
                                Visit Project
                            </Button>
                        }
                    </div>
             </div>    
        )
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem;
