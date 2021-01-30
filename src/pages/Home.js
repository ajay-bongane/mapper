import React from "react";
import NavigationBar from "../components/NavigationBar";
import Sidemenu from "../components/Sidemenu";
import Map from "../components/Map";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Row>
        <Col>
          <Sidemenu />
        </Col>
        <Col xs={8}>
          <Map />
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
