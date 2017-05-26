import React, {Component} from 'react';
import MainNav from './Navigation';

import {ProjectsContainer, ProjectsPlaceholder} from './work_components';

import '../styles/work.css';

import projectsJson from '../data/projects.json';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: projectsJson
    }
  }


  componentWillMount() {

      this.setState({
          canShowProjects: this.state.projects.length > 2
      });
  }

  render() {
      return (
        <div>
          <MainNav />
          <div className="container" style={{marginTop: '4rem'}}>
              {this.state.canShowProjects &&
              <ProjectsContainer projects={this.state.projects}/> }
              {!this.state.canShowProjects &&
              <ProjectsPlaceholder/> }
          </div>
        </div>
    );
  }
}
