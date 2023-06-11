import React, { Component } from "react";
import { Avatar } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NextPage =()=>{
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
    const chapter = params.get('chapter');
    const videolink=params.get('link');
    //alert(chapter+" "+videolink);
  // let {chapter}=useParams()
  return(
    <React.Fragment>
            <div className="container">
              <div className="row linerow">
                <div className="col">
                  <h3>Chapter Name</h3>
                  <hr/>
                </div>
              </div>
              <div className="row ">
                <div className="col content">
                  <div className="nextpagenote">
                  <a href={window.location.origin+`/pdf/${chapter}.pdf`} target="_blank">
                  <Avatar id="avatar" src="/images/notes.png" />
            </a>
           
            <h3>Notes</h3>
            </div>
            <div className="Nextpagenote">
            {/* <a href={videolink}>Click here to go to Google</a>
            <Avatar id="avatar" src="/images/video.png" /> */}
          <a href={videolink}>
        <Avatar id="avatar" src="/images/video.png" /> 
</a>
            <h3>Video</h3>
            </div>
            </div>
            </div>
            </div>
        </React.Fragment>
  )
}

export default NextPage;