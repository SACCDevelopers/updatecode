import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/profile.css'

const Profile_navbar = (props) => {
    return ( 
        <React.Fragment>
            <div id='nav' className="col-3  ">
              <Link className="navbar-brand" to={props.to}>
                <img
                  src={props.src}
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                {props.Name}
              </Link>
            </div>
        </React.Fragment>
     );
}
 
export default Profile_navbar;