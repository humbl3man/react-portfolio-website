import React, {Component} from 'react';

// load project data
import projectsJson from '../data/projects';

const Project = ({data}) => (
  <div key={data.id} className="col-lg-4 mb-2">
    <div className="card">
      <div className="card-block">
        <h4 className="card-title mb-3">{data.title}</h4>
        <p className="text-muted"><em>{data.type}</em></p>
        {/* <a className="card-link text-warning" data-toggle="collapse" href={'#' + data.id}><em>Tech Stack</em></a> */}
        <p className="card-text mt-2">{data.description}</p>

      </div>
      {/* <div id={data.id} className="collapse">
        <ul className="list-group list-group-flush">
          {data.technologies.map(tech => (
            <li className="list-group-item">{tech}</li>
          ))}
        </ul>
      </div> */}
      <div className="card-block">
        <a href={data.url.toString()} className="btn btn-warning btn-block">Visit</a>
      </div>
    </div>
  </div>
);

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.projects = projectsJson;
  }

  render() {
    console.log(this.projects);
    return (
      <div className="container mt-3">
        <h2 className="display-4 title">Work</h2>
        <div className="row">
          {this.projects.map(project => (<Project data={project}/>))}
        </div>
      </div>
    );
  }
}
