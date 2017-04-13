import React, {Component} from 'react';
import base from '../base';
import MainNav from './Navigation';

import {ProjectsContainer, ProjectsPlaceholder} from './work_components';

import '../styles/work.css';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: []
    }
  }

  componentDidMount() {
      this.ref = base.syncState(`/projects`, {
          context: this,
          state: 'projects',
          asArray: true
      });
  }


  componentWillMount() {

      // TODO: change before deploying to prod
      this.setState({
          canShowProjects: true || this.state.projects.length > 2
      });
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
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
