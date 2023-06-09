import React, { Component } from "react";
import { Avatar } from "@mui/material";

import Profile_info from "../common/profile/Profile_Info";
import Complete_Profile_Navbar from "../common/profile/Complete_Profile_Navbar";

class Edit_Profile extends Component {
  state = {
   
  };

  render() {
    const mystyle = {
      background: "linear-gradient(to bottom, #FFDF24, #FDF9E2)",
    };

    const mystyl = {
      height: "200px",
    };

    return (
      <React.Fragment>
         <div id="yellow"></div>
        <div id="red"></div>
        <div id="grey" className="container-fluid pt-5 pb-5">
          <div className="row ">
            <div className="col-auto profile-heading">
            <img  width="33" height="33" className="d-inline-block align-text-top " src="images/edit-profile.png" alt="" />
            <h1>Edit Profile</h1>
            </div>
          </div>
          <div
            className="pt-4 mb-3 mx-auto shadow-lg ps-1 m-5 bg-white rounded profile_card"
            style={{ width: "50%" }}
          >
            <div className="row border-bottom border-3 m-auto">
              <Complete_Profile_Navbar />
            </div>
            <div className="row">
              <div className="col-sm-4 ">
                <Avatar
                  src="images/signup.png"
                  sx={{ width: 180, height: 180 }}
                  className="m-2 mt-5"
                />

                <h4 className="m-5">hi </h4>
                <p className="mt-2"></p>
              </div>

              <div className="col-sm-7 mt-5">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <Profile_info Value="Name" readonly={true} />
                      <Profile_info Value="Qasi" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Fathers Name" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="DOB" readonly={true} />
                      <Profile_info Value="sim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Religion" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="College" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Mojor" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="School" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Inter_Marks" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Matric_Marks" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Counselor Name" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                    <tr>
                      <Profile_info Value="Father's Income" readonly={true} />
                      <Profile_info Value="Qasim" readonly={false} />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit_Profile;
