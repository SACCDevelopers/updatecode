import React, { Component } from 'react'
import Input from "../common/Input"
import '../css/signin.css';
import { Avatar } from "@mui/material";
import Cookies from 'js-cookie';


class Signin extends Component {
    state = {
        account:{
            Email:"",
            Password:""
        }
     }

    handletype = (e) => {
        const account = { ...this.state.account };
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
      };





      // handlesubmit = async (e) => {
      //   e.preventDefault();
      
      //   try {
      //     // Checking admin or not
      //     if (this.state.account.Email === 'ali@gmail.com' && this.state.account.Password === '123') {
      //       window.location.href = '/profile';
      //     } else {
      //       // Make API call to check student
      //       const studentRes = await fetch('/api/student/login', {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(this.state.account),
      //       });
      //       const studentResponse = await studentRes.json();
      
      //       //alert(studentResponse.result);
      //       if (studentResponse.result === true) {
      //         window.location.href = '/chapter/maths';
      //       } else {
      //         // Make API call to check counsellor
      //         const counsellorRes = await fetch('/api/counsellor/login', {
      //           method: 'POST',
      //           headers: {
      //             'Content-Type': 'application/json',
      //           },
      //           body: JSON.stringify(this.state.account),
      //         });
      //         const counsellorResponse = await counsellorRes.json();
            
      //         if (counsellorResponse.result === true) {
      //           window.location.href = '/chapter/maths';
      //         } else {
      //           alert('Your Account is Currently Blocked. Please Contact the Admin');
      //         }
      //       }
      //     }
      //   } catch (error) {
      //     console.log(error);
      //     alert('An error occurred while processing your request');
      //   }
      // };
      
      handlesubmit = async (e) => {
        e.preventDefault();
      
        Cookies.set('Email', this.state.account.Email);
     
        try {
          // Checking admin or not
          if (this.state.account.Email === 'ali@gmail.com' && this.state.account.Password === '123') {
            window.location.href = '/profile';
          } else {
            // Make API call to check student
            const studentRes = await fetch('/api/student/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.state.account),
            });
            const studentResponse = await studentRes.json();
      
            //alert(studentResponse.result);
            if (studentResponse.result === true) {
              window.location.href = '/student_landingpage';
            } else {
              // Make API call to check counsellor
              const counsellorRes = await fetch('/api/counsellor/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.account),
              });
              const counsellorResponse = await counsellorRes.json();
              
              if (counsellorResponse.result === true) {
                window.location.href = '/counsellor_landingpage';
              } else {
                alert('Your Account is Currently Blocked. Please Contact the Admin');
              }
            }
          }
        } catch (error) {
          console.log(error);
          alert('An error occurred while processing your request');
        }
      };
    render() {
        const mystyle = {
            backgroundColor: "#F5CD01",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            height: "100px",

          };


        return (
            <React.Fragment>
               <div className="fluid-container pt-4 signup_container ">
        <div
          className="shadow ps-1 m-5 bg-white signupform_radius"
          style={{height:"39vw"}}
        >
          <div className="row">
            <div className="col-sm-5 signupform_leftside" >
              <Avatar
                className="m-5"
                sx={{ width: 250, height: 250 }}
                src="images/signup.png"
              />

              <h1 className="mt-3">Let's Get You Set Up </h1>
              <p className="mt-2">
                It should take only a couple of minutes to pair with your
                watch
              </p>
            </div>



            <div id="form-col" className="col-sm-7 signupform_rightside">

            <form id="form" method='post' onSubmit={this.handlesubmit}>

                  <Input
                    label="Email"
                    value={this.state.account.Email}
                    name="Email"
                    type="email"
                    onchange={this.handletype}
                    placeholder="Email"
                  />

<Input
                    label="Password"
                    value={this.state.account.Password}
                    name="Password"
                    type="password"
                    onchange={this.handletype}
                    placeholder="Password"
                  />









                  <button type="submit" id='button' className="btn signinbtn mt-3">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
            </React.Fragment>
        );
    }
}

export default Signin;