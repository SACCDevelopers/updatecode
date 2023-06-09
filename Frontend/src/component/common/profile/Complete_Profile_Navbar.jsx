import React from "react";
import Profile_navbar from "./Profile_Navbar";

const Complete_Profile_Navbar = () => {
  return (
    <React.Fragment>
      <Profile_navbar src="images/profile.png" Name=" Profile" to="/profile" />
      <Profile_navbar
        src="images/edit-profile.png"
        Name="Edit Profile"
        to="/edit_profile"
      />
      <Profile_navbar
        src="images/change-password-icon.jpg"
        Name="Reset Password"
        to="/reset_password"
      />
      <Profile_navbar src="images/images.jpg" Name="Quiz Attempted" href="#" />
    </React.Fragment>
  );
};

export default Complete_Profile_Navbar;
