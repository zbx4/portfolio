import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import './Projects.css';

class Projects extends Component {
    render() {
        const projectItems = this.props.projects.map((project) =>(
            <ProjectItem key={project.id} project={project} />
        ));

        return (
            <div className="projectContainer">
                <span id="projects" className="projectsAnchor"></span>
                <h3 className="projectsTitle">Projects</h3>
                {projectItems}
            </div>
        )
    }
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;
