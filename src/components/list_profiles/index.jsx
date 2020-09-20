import React from "react";
// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProfiles } from "../../actions/profile";
import Profile from "./profile.jsx";

class ListProfiles extends React.Component {
    componentWillMount() {
      this.props.loadProfiles();
    }

  render() {
    return (
        <Container>
        <Row className="justify-content-md-center">
            {this.props.profiles.map(profile => {
              return  <Profile {...profile} />
            })}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  profiles: store.profilesState.profiles
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfiles }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListProfiles);
