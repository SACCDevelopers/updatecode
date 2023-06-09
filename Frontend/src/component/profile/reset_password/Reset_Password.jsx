import React, { Component } from 'react'
import Input from '../../common/Input';
import { Avatar } from '@mui/material';
import Complete_Profile_Navbar from '../../common/profile/Complete_Profile_Navbar';
import { Link } from 'react-router-dom';

class Reset_Password extends Component {
    state = { account:{
        password:""
    } } 
    
  handletype = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  handlesubmit = (e) => {
    e.preventDefault();
  };
    render() { 
       
        return (<React.Fragment>
            <div id="yellow"></div>
        <div id="red"></div>
        <div id="grey" className="container-fluid pt-5 pb-5">
          <div className="row ">
            <div className="col-auto profile-heading">
            <img  width="33" height="33" className="d-inline-block align-text-top " src="images/profile.png" alt="" />
            <h1>My Profile</h1>
            </div>
          </div>
    
          <div className="pt-4 mb-3 mx-auto shadow-lg ps-1 m-5 bg-white rounded profile_card"  style={{width:"50%"}}>
          <div className="row border-bottom border-3 m-auto">
            <Complete_Profile_Navbar/>
          </div>
          <div className="row">
              <div className="col-sm-4 ">
                <Avatar
                  src="images/signup.png"
                  sx={{ width: 180, height: 180 }}
                  className="m-2 mt-3"
                />

                <h4 className="m-2">hi </h4>
                <p className="mt-2"></p>
              </div>

            <div className="col-sm-8 mt-5">
              <h3>Reset Password</h3>
            <form className="ga" onSubmit={this.handlesubmit}>
                  <Input
                    label="Enter Password"
                    value={this.state.account.password}
                    name="password"
                    type="password"
                    onchange={this.handletype}
                    placeholder="Password"
                  />
                  <Link to="/new-password">
                  <button type="submit" className="btn btn-primary mt-3">
                     Next
                  </button>
                  </Link>

                  </form>
            </div>
          </div>
          </div>
          </div>
        </React.Fragment>);
    }
}
 
export default Reset_Password;