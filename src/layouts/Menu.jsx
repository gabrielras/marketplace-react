import React from "react";
// reactstrap components
import { Container } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import ListProfiles from "components/list_profiles/index.jsx";
import SearchBox from "../components/search_box_component";

class Menu extends React.Component {
  render() {
    return (
        <>
        <div className="main-content" ref="mainContent">
          <AuthNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-3">
                <SearchBox />
              </div>
            </Container>  
            </div>
            <ListProfiles />
          </div>
      </>
    );
  }
}

export default Menu;
