import React from 'react';
import placeholderImage from '../images/work-page-placeholder.jpg';


export const ProjectsPlaceholder = () => (
    <div className="row">
        <div className="col-sm-8">
            <h4 className="mb-3">I am working on adding all of my work to this page.</h4>
            <p>I am currently in the process of collecting all my projects in an organized manner so I can better present them to you.</p>
            <p>Stay tuned...</p>
        </div>
        <div className="col-sm-4">
            <img src={placeholderImage} alt="" className="img-fluid" style={{width: '500px'}}/>
        </div>
    </div>
);

export const ProjectsContainer = (props) => {
    return (
        <div className="row">
            {props.projects.map(project => (<Project details={project} key={project.id}/>))}
        </div>
    );
};

export const Project = ({details}) => {
    return (
        <div className="col-lg-4 mb-2">
            <div className="card project">
                <div className={`work-image ${details.id}`}></div>
                <div className="card-block">
                    <h4 className="card-title mb-3">{details.title}</h4>
                    <p className="text-muted"><em>{details.type}</em></p>
                    {/* <a className="card-link text-warning" data-toggle="collapse" href={'#' + data.id}><em>Tech Stack</em></a> */}
                    <p className="card-text mt-2">{details.description}</p>

                </div>
                <div className="card-block">
                    <a href={details.url.toString()} title={details.url.toString()} className="btn btn-warning btn-block">Visit</a>
                </div>
            </div>
        </div>
    );
};