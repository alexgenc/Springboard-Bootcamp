import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home( { snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
              Welcome to Silicon Valley's premier dive cafe!
            <p className="mt-5">
              {`We have ${snacks.length} snacks and ${drinks.length} drinks`}
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
