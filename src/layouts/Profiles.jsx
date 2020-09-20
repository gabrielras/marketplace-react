import React from "react";
// reactstrap components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import ShowProfiles from "../components/screens/show_profiles/index.jsx"

class Profile extends React.Component {
  render() {
    return (
        <>
        <div className="main-content" ref="mainContent">
          <AuthNavbar />
          <div className="header bg-gradient-info py-3 py-lg-5">   
          </div>
            <ShowProfiles />
          </div>
      </>
    );
  }
}

export default Profile;
