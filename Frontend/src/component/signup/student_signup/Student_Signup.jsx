import React, { Component } from "react";
import Input from "../../common/Input";
import { Avatar } from "@mui/material";
import "../../css/inpu.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Student_Signup extends Component {
  state = {
    account: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phoneno: "",
      religion: "",
      matric_marks: "",
      inter_marks: "",
      father_income: "",
      total_matric_marks: "",
      total_inter_marks: "",
      address: "",

      emailError: "",
      passwordError: "",
      firstnameError: "",
      lastnameError: "",
      phonenoError: "",
      religionError: "",
      matric_marksError: "",
      inter_marksError: "",
      father_incomeError: "",
      total_matric_marksError: "",
      total_inter_marksError: "",
      addressError: "",
    },
    step: 1,
  };

  handletype = (e) => {
    const account = { ...this.state.account };
    if (e.currentTarget.name === "gender") {
      account["gender"] = e.currentTarget.value;
    } else {
      account[e.currentTarget.name] = e.currentTarget.value;
    }

    this.setState({ account });
  };


  fun2(){
    alert("g");
  }
  handlesubmit = async(e) => {
    e.preventDefault();

  if(this.validateForm()){
  const obj={
    Email:this.state.account.email,
    Password:this.state.account.password,
    FirstName:this.state.account.firstname,
    LastName:this.state.account.lastname,
    PhoneNo:this.state.account.phoneno,
    Gender:this.state.account.gender,
    ObtainedMatricMarks:this.state.account.matric_marks,
    TotalMatricMarks:this.state.account.total_matric_marks,
    ObtainedInterMarks:this.state.account.inter_marks,
    TotalInterMarks:this.state.account.total_inter_marks,
    FatherIncome:this.state.account.father_income,
    Address:this.state.account.address

  }

  try{
     
    const res=await fetch("/api/student/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(obj)
  
    });
   
    // const data=await res.json();
    //  alert(data.message);
    window.location.href='/student_landingpage';
     
  }
  catch (error) {
    console.log( error);
  }

  }
  };


  fun1 = () => {
    this.setState({ ...this.state, step: 0 });
    // const firstName = this.state.account.firstname;
    // console.log('First Name:', firstName);
  };


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

    if (account.address === '') {
      account.addressError = 'Address is required';
      isValid = false;
    }

    if (account.matric_marks === '') {
      account.matric_marksError = 'Matric Marks is required';
      isValid = false;
    }
    if (account.total_matric_marks === '') {
      account.total_matric_marksError = 'Total Matric Marks is required';
      isValid = false;
    }
    if (account.inter_marks === '') {
      account.inter_marksError = 'Inter Marks is required';
      isValid = false;
    }
    if (account.total_inter_marks === '') {
      account.total_inter_marksError = 'Total Inter Marks is required';
      isValid = false;
    }
    if (account.father_income === '') {
      account.father_incomeError = 'Father Income is required';
      isValid = false;
    }

    this.setState({ account });
    return isValid;
  };


  render() {
    const mystyle = {
      backgroundColor: "#F5CD01",
      borderTopLeftRadius: "50px",
      borderBottomLeftRadius: "40px",
      height: "39vw",
    };

    return (
      <React.Fragment>
        {this.state.step ? (
          <div className="fluid-container pt-4 signup_container ">
            <div
              className="shadow ps-1 m-5 bg-white signupform_radius"
              style={{ height: "39vw" }}
            >
              <div className="row">
                <div className="col-sm-5 signupform_leftside">
                  <Avatar
                    className="m-5"
                    sx={{ width: 230, height: 230 }}
                    src="images/signup.png"
                  />

                  <h2 className="mt-3 signupHeading">Let's Get You Set Up </h2>
                  <p className="mt-2 signupPtag">
                    It should take only a couple of minutes to pair with your
                    watch
                  </p>
                </div>

                <div
                  id="form-col"
                  className="col-sm-7 signupform_rightside"
                >
                  <form id="form" onSubmit={this.handlesubmit}>
                    <Input
                      label="First Name"
                      value={this.state.account.firstname}
                      name="firstname"
                      type="text"
                      onchange={this.handletype}
                      placeholder="First Name"
                    />
<p style={{color:"red"}}>{this.state.account.firstnameError}</p>
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

<p style={{color:"red"}}>{this.state.account.phonenoError}</p>
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
                      label="Address"
                      value={this.state.account.address}
                      name="address"
                      type="address"
                      onchange={this.handletype}
                      placeholder="Address"
                    />

<p style={{color:"red"}}>{this.state.account.addressError}</p>

                    <div className="signup_button">
                      <button
                        type="submit"
                        className="btn btn-primary inputbtn mt-3"
                        onClick={this.fun1}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary  inputbtn mt-3"
                        onClick={this.fun1}
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="fluid-container pt-4 signup_container ">
            <div
              className="shadow ps-1 m-5 bg-white signupform_radius"
              style={{ height: "39vw" }}
            >
              <div className="row">
                <div className="col-sm-5 signupform_leftside">
                  <Avatar
                    className="m-5"
                    sx={{ width: 230, height: 230 }}
                    src="images/signup.png"
                  />

                  <h2 className="mt-3 signupHeading">Let's Get You Set Up </h2>
                  <p className="mt-2 signupPtag">
                    It should take only a couple of minutes to pair with your
                    watch
                  </p>
                </div>

                <div
                  id="form-col"
                  className="col-sm-7 signupform_rightside"
                >
                  <form id="form" onSubmit={this.handlesubmit}>
                    <Input
                      label="Matric Marks"
                      value={this.state.account.matric_marks}
                      name="matric_marks"
                      type="number"
                      onchange={this.handletype}
                      placeholder="Matric Marks"
                    />

<p style={{color:"red"}}>{this.state.account.matric_marksError}</p>
                    <Input
                      label="Total Matric Marks"
                      value={this.state.account.total_matric_marks}
                      name="total_matric_marks"
                      type="number"
                      onchange={this.handletype}
                      placeholder="Total Matric Marks"
                    />

<p style={{color:"red"}}>{this.state.account.total_matric_marksError}</p>
                    <Input
                      label="Inter Marks"
                      value={this.state.account.inter_marks}
                      name="inter_marks"
                      type="number"
                      onchange={this.handletype}
                      placeholder="Inter Marks"
                    />

<p style={{color:"red"}}>{this.state.account.inter_marksError}</p>
                    <Input
                      label="Total Inter Marks"
                      value={this.state.account.total_inter_marks}
                      name="total_inter_marks"
                      type="number"
                      onchange={this.handletype}
                      placeholder="Total Inter Marks"
                    />

<p style={{color:"red"}}>{this.state.account.total_inter_marksError}</p>

                    <Input
                      label="Father Income"
                      value={this.state.account.father_income}
                      name="father_income"
                      type="number"
                      onchange={this.handletype}
                      placeholder="Father Income"
                    />

<p style={{color:"red"}}>{this.state.account.father_incomeError}</p>

                    <div className="signup_button">
                      <button
                        type="submit"
                        className="btn btn-primary inputbtn mt-3"
                        onClick={this.fun1}
                      >
                        Back
                      </button> 
                      <button
                        type="submit"
                        className="btn btn-primary  inputbtn mt-3"
                        onClick={this.fun1}
                      >
                        Submit
                      </button> 
                </div>
              </form>
            </div>
          </div>
            </div>
          </div >
        )
  }
      </React.Fragment>
    );
  }
}

export default Student_Signup;
