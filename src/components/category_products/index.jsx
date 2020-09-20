
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Row,
} from "reactstrap";
import Typography from '@material-ui/core/Typography';

const CategoryProducts = (props) => (
    <>
    <div id="product">
        <div style={{ width: "18rem", padding: "10px" }} id="profile">
        <Typography gutterBottom variant="subtitle1">
            {props.title}
        </Typography>
          {props.product_rents.map((product, i) => {
              return <Card className="card-stats mb-4 mb-lg-0" key={i}>
              <CardBody>
                <Row>
                  <CardImg
                      alt="..."
                      src={product.image_url}
                      top
                  />
                </Row>
                <Row>
                  <CardTitle className="text-uppercase text-muted mb-0 mt-2">
                     {props.name}
                  </CardTitle>
                </Row>
                <p className="mt-1 mb-0 text-muted text-sm">
                  <span className="text-nowrap">{props.description}</span>
                </p>
                <p className="mt-1 mb-0 text-muted text-sm">
                  <span className="text-nowrap">Preço ${props.price}</span>
                </p>
              </CardBody>
            </Card>
          })}
        </div>
    </div>
    </>
);

export default CategoryProducts;