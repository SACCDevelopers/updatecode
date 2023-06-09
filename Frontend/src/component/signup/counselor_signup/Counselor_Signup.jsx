import React, { Component } from "react";
import Input from "../../common/Input";
import { Avatar } from "@mui/material";
import "../../css/inpu.css"

class Counselor_Signup extends Component {

  state = {
    account: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phoneno: "",
      education: "",
      experience: "",
  
      firstnameError:"",
      lastnameError:"",
      emailError:"",
      passwordError:"",
      phonenoError: "",
      educationError: "",
      experienceError: "",



    }, 
  };


  handletype = (e) => {
    const account = { ...this.state.account };
    if (e.currentTarget.name === "gender") {
      account["gender"] = e.currentTarget.value
    } else {
      account[e.currentTarget.name] = e.currentTarget.value;
    }

    this.setState({ account });


  };

  handlesubmit = async(e) => {
    console.log(this.state)
    e.preventDefault();


    if (this.validateForm()) {
     
      const obj={
        FirstName:this.state.account.firstname,
        LastName:this.state.account.lastname,
        Password:this.state.account.password,
        Email:this.state.account.email,
        PhoneNo:this.state.account.phoneno,
        
        Experinence:this.state.account.experience,
        Education:this.state.account.education
  
      }
      try{
       
      const res=await fetch("/api/counsellor/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(obj)
    
      });
     
      // const data=await res.json();
      //  alert(data.message);
      window.location.href='/counsellor_landingpage';
       
    }
    catch (error) {
      console.log( error);
    }
    
    }


    



  };
  fun1 = () => {
    this.setState({ ...this.state, step: 0 })
    const firstName = this.state.account.firstname;
    //console.log('First Name:', firstName);
  }



  validateForm = () => {
    const { account } = this.state;
    let isValid = true;

    if (account.firstname === '') {
      account.firstnameError = 'First Name is required';
      isValid = false;
    }

    if (account.lastname === '') {
      account.lastnameError = 'Last Name is required';
      isValid = false;
    }

    if (account.email === '') {
      account.emailError = 'Email is required';
      isValid = false;
    }

    if (account.password === '') {
      account.passwordError = 'Password is required';
      isValid = false;
    }

    if (account.phoneno === '') {
      account.phonenoError = 'Phone Number is required';
      isValid = false;
    }

    if (account.experience === '') {
      account.experienceError = 'Experience is required';
      isValid = false;
    }

    if (account.education === '') {
      account.educationError = 'Education is required';
      isValid = false;
    }

    this.setState({ account });
    return isValid;
  };
  render() {


    return (
      <React.Fragment> 
          <div className="fluid-container pt-4 signup_container ">
            <div
              className="shadow ps-1 m-5 bg-white signupform_radius"
              style={{ height: "39vw" }}
            >
              <div className="row">
                <div className="col-sm-5 signupform_leftside" >
                  <Avatar
                    className="m-5"
                    sx={{ width: 250, height: 250 }}
                    src="images/signup.png"
                  />
 
                  <h2 className="mt-3 signupHeading">Let's Get You Set Up </h2 >
                  <p className="mt-2 signupPtag">
                    It should take only a couple of minutes to pair with your
                    watch
                  </p>
                </div>

                <div id="form-col" className="col-sm-7 signupform_rightside">

                  <form id="form" method="Post" onSubmit={this.handlesubmit}>

                    <Input
                      label="First Name"

                      value={this.state.account.firstname}
                      name="firstname"
                      type="text"
                      onchange={this.handletype}
                      placeholder="First Name"
                      required
                      
                    />
                    
                    <p style={{ color: "red" }}>{this.state.account.firstnameError}</p>
                    <Input
                      label="Last Name"

                      value={this.state.account.lastname}
                      name="lastname"
                      type="text"
                      onchange={this.handletype}
                      placeholder="Last Name"
                    />
 <p style={{color:"red"}}>{this.state.account.lastnameError}</p>

                    <Input
                      label="Phone Number"

                      value={this.state.account.phoneno}
                      name="phoneno"
                      type="tel"
                      onchange={this.handletype}
                      placeholder="Phone Number"
                    />

<p style={{color:"red"}}>{this.state.account.phonenoError}</p>

                    <Input
                      label="Email"

                      value={this.state.account.email}
                      name="email"
                      type="email"
                      onchange={this.handletype}
                      placeholder="Email"
                    />

<p style={{color:"red"}}>{this.state.account.emailError}</p>

                    <Input
                      label="Password"

                      value={this.state.account.password}
                      name="password"
                      type="password"
                      onchange={this.handletype}
                      placeholder="Password"
                    />
                     <p style={{color:"red"}}>{this.state.account.passwordError}</p>

                    <Input
                      label="Experience"

                      value={this.state.account.experience}
                      name="experience"
                      type="text"
                      onchange={this.handletype}
                      placeholder="Experience"
                    />

<p style={{color:"red"}}>{this.state.account.experienceError}</p>

                    <Input
                      label="Education"

                      value={this.state.account.education}
                      name="education"
                      type="text"
                      onchange={this.handletype}
                      placeholder="Education"
                    />

<p style={{color:"red"}}>{this.state.account.educationError}</p>

                    <div className="signup_button">
                      <button type="submit" className="btn btn-primary inputbtn mt-3" onClick={this.fun1}>
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary  inputbtn mt-3" onClick={this.fun1}>
                        Submit
                      </button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 

      </React.Fragment>
    );
  }
}

export default Counselor_Signup;
