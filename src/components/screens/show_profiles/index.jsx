import React, { Component , Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import api from "../../../services/api.js";
import CategoryProducts from "../../category_products/index.jsx";

class ShowProfile extends Component {
  state = {
    profile: {}
  }

  componentWillMount() {
    api.getProfiles(this.props.match.params.id).then(response => {
      this.setState({ profile: response.data.profile })
    });
  } 

  render() {
    return (
      <Fragment>
         <div className="main-content" ref="mainContent">
          <AuthNavbar />
          <div className="header bg-gradient-info py-3 py-lg-5">   
          </div>
          <div >
        <Paper >
          <Grid container spacing={10}>
            <Grid item spacing={10}>
                <img  alt="complex" 
                src= {this.state.profile.image_url}
                style={{width: 250, height: 250}}
                />
            </Grid>
            <Grid item xs={8} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {this.state.profile.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  {this.state.profile.description}

                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  {this.state.profile.review || 0}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      {this.state.profile.product_categories && 
        this.state.profile.product_categories.map((category, i) => {
          return <CategoryProducts {...category} key={i} />
        })
      }
          </div>
     
      </Fragment>
    );
  }
}

export default ShowProfile;
