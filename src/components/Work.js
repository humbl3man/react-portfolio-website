import React, {Component} from 'react';

// load project data
import projectsJson from '../data/projects';
import MainNav from "./Navigation";

import placeholderImage from '../images/work-page-placeholder.jpg';

const ProjectContainer = (props) => {
    return (
        <div className="row">
            {props.projects.map(project => (<Project data={project} key={project.id}/>))}
        </div>
    );
};

const Project = ({data}) => (
  <div className="col-lg-4 mb-2">
    <div className="card">
      <div className="card-block">
        <h4 className="card-title mb-3">{data.title}</h4>
        <p className="text-muted"><em>{data.type}</em></p>
        {/* <a className="card-link text-warning" data-toggle="collapse" href={'#' + data.id}><em>Tech Stack</em></a> */}
        <p className="card-text mt-2">{data.description}</p>

      </div>
      <div className="card-block">
        <a href={data.url.toString()} className="btn btn-warning btn-block">Visit</a>
      </div>
    </div>
  </div>
);

const Placeholder = () => (
    <div className="row">
        <div className="col-sm-8">
            <h4 className="mb-3">I am working on adding all of my work to this page.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur consequatur deleniti dignissimos distinctio dolorem eius enim est ex, fugiat impedit libero maiores officia officiis praesentium quidem, veniam veritatis, vitae. Amet assumenda at dolore doloribus eum ipsa laborum provident! Aut commodi facilis minus molestiae quos, reprehenderit soluta tenetur unde voluptatem?</p>

        </div>
        <div className="col-sm-4">
            <img src={placeholderImage} alt="" className="img-fluid" style={{width: '500px'}}/>
        </div>
    </div>
);

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: projectsJson
    }
  }

  componentDidMount() {
      console.log(this.state.projects);
  }

  render() {
    const display = (this.state.projects.length >= 3 ? <ProjectContainer projects={this.state.projects}/> : <Placeholder/>);
      return (
        <div>
          <MainNav />
          <div className="container" style={{marginTop: '4rem'}}>
              {display}
          </div>
        </div>
    );
  }
}
