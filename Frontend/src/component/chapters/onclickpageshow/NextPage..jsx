import React, { Component } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";


import { useParams } from 'react-router-dom';

const NextPageWrapper = () => {
  const params = useParams();

  return <NextPage params={params} />;
};

class NextPage extends Component {
    state = {};
    render() {
      // const { id } = this.props.match.params;
      
        // const { pathname } = window.location;
        // const id = pathname.split('/chapter/nextpage')[1]; // Extract the parameter value from the URL
    
        // alert(id); // Use the parameter value as needed
        // const { id } = this.props.params;
        // alert(id);
        // const { id } = this.props.params.id;
        // alert(id);
      return (
        <React.Fragment>
            <div className="container">
              <div className="row linerow">
                <div className="col">
                  {/* <h3>{this.props.params.chapter}</h3> */}
                  <hr/>
                </div>
              </div>
              <div className="row ">
                <div className="col content">
                  <div className="nextpagenote">
                  <Link to="">
                  <Avatar id="avatar" src="images/notes.png" />
            </Link>
           
            <h3>Notes</h3>
            </div>
            <div className="Nextpagenote">
            <Avatar id="avatar" src="images/video.png" />
            <h3>Video</h3>
            </div>
            </div>
            </div>
            </div>
        </React.Fragment>
      );
    }
}
export default NextPage