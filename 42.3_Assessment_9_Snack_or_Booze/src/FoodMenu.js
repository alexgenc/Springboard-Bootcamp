import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            { snacks ? `Snack Menu` : `Drink Menu` }
          </CardTitle>
          <CardText>
            { snacks ? `Our snacks are the best in the country. Come on in and try them out!` : `Time to relax and have fun with our refreshing drinks!`
            }
          </CardText>
          <ListGroup>

            { snacks ? (
                snacks.map(snack => (
                  <Link to={`/snacks/${snack.id}`} key={snack.id}>
                    <ListGroupItem>{snack.name}</ListGroupItem>
                  </Link>
                ))
              ) : (
                drinks.map(drink => (
                  <Link to={`/drinks/${drink.id}`} key={drink.id}>
                    <ListGroupItem>{drink.name}</ListGroupItem>
                  </Link>
                ))
              ) 
            }
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
