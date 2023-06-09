import React, { Component } from 'react'
import Input from './common/input';
import { Avatar } from '@mui/material';
import Complete_Profile_Navbar from '../../common/profile/Complete_Profile_Navbar';
import { Link } from 'react-router-dom';

class New_Password extends Component {
    state = { account:{
        new_password:"",
        confirm_password:""
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
        const mystyle = {
            background: "linear-gradient(to bottom, #FFDF24, #FDF9E2)",
            
            
          };
          
        return (<React.Fragment>
            <div
          className="container-fluid pt-5 pb-5"
          style={ mystyle}
        >
          <div className="pt-4 mb-3 mx-auto shadow-lg ps-1 m-5 bg-white rounded" style={{width:"50%"}}>
          <div className="row border-bottom border-3 m-auto">
            <Complete_Profile_Navbar/>
          </div>
          <div className="row">
            <div className="col-sm-4 ">
              <Avatar
                
                src="images/maths_part_1/a.png"
                sx={{ width: 200, height: 200 }}
              />

              <h4 className="mt-3">hi </h4>
              <p className="mt-2"></p>
            </div>

            <div className="col-sm-8 mt-5">
              <h3>Reset Password</h3>
            <form onSubmit={this.handlesubmit}>
                  <Input
                    label="New Password"
                    value={this.state.account.new_password}
                    name="new_password"
                    type="password"
                    onchange={this.handletype}
                    placeholder="New Password"
                  />
                  <Input
                    label="Confirm Password"
                    value={this.state.account.confirm_password}
                    name="confirm_password"
                    type="password"
                    onchange={this.handletype}
                    placeholder="Confirm Password"
                  />
                  <Link to="/student_next_signup">
                  <button type="submit" className="btn btn-primary mt-3">
                     Submit
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
 
export default New_Password;