import React, {Component} from 'react';
import profilePic from '../images/profile-pic.jpg';

const Bio = (props) => (
    <div className="container mt-3">
      <h2 className="display-3 title"><span className="text">Bio</span></h2>

        <div className="row">
            <div className="col-md-4">
              <img className="img-fluid mb-3" src={profilePic} alt="Konstantin Minevich" />
            </div>
            <div className="col-md-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatum sit blanditiis, qui, voluptates quae quas autem, doloribus nostrum ab officiis reprehenderit nisi repellendus libero nihil explicabo fugiat sint deserunt! Molestiae alias saepe magnam ab, a debitis natus id, consequatur possimus ad. Rem pariatur voluptatem ea nihil sed vero et.</p>
            </div>
        </div>

    </div>
)

export default Bio;
