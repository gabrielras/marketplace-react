import React from "react";
// reactstrap components
import {
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Container,
} from "reactstrap";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchProfiles } from '../../actions/profile';

class SearchBox extends React.Component {
  constructor() {
      super();
      this.state = { search: "" }
  }

  handleChange = (event) => {
      this.setState({ search: event.target.value });
  }

  search = (event) => {
      if(event.key === "Enter"){
          this.props.searchProfiles(this.state.search);
      }
  }
  render() {
    return (
      <>
          <Container fluid>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" value={this.state.search} 
                  onChange={this.handleChange} onKeyPress={this.search}/>
                </InputGroup>
          </Container>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ searchProfiles }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBox);
