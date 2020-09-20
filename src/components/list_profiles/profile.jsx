
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
} from "reactstrap";

import { Link } from "react-router-dom";

const Profile = (props) => (
    <>
        <div style={{ width: "18rem", padding: "10px" }} id="profile">
          <Link to={`/profiles/${props.id}`}>
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <CardImg
                    alt="..."
                    src={require("assets/img/theme/profile-cover.jpg")}
                    top
                />
              </Row>
              <Row>
                <CardTitle className="text-uppercase text-muted mb-0 mt-2">
                   {props.name}
                </CardTitle>
              </Row>
              <p className="mt-1 mb-0 text-muted text-sm">
                <span className="text-nowrap">{props.category_title}</span>
              </p>
            </CardBody>
          </Card>
          </Link>
        </div>
      </>
);


export default Profile;