import React from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Breadcrumb,
  Table,
  Tab,
  Tabs,
} from "react-bootstrap";
import TopBar from "../components/headerComponents/TopBar";
import Navigation from "../components/headerComponents/Navigation";
import Footer from "../components/commonComponents/Footer";
import productImage from "../theme/images/product1.png";

const Products = () => {
  return (
    <div className="productPage">
      <TopBar />
      <Navigation />
      <Container>
        <Row className="productPage__breadcrum">
          <Breadcrumb>
            <Breadcrumb.Item href="./">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="./">Street Light</Breadcrumb.Item>
            <Breadcrumb.Item active>Lens Street Light</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="productPage__row">
          <Col lg={6} sm={12}>
            <div className="productPage__imageContainer">
              <Image
                className="productPage__imageContainer__image"
                src={productImage}
                alt="Product text"
              />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <h1>Lens Street Light</h1>
            <hr />
            <div className="productPage__description">
              <span>
                A slim surface mount panel with edge-lit LEDs that provide soft,
                energy-efficient light that is used for ambient lighting (indoor
                applications). It’s suitable for parking spaces, lobbies and
                balconies.
              </span>
            </div>
            <br />
            <h4>Features:</h4>
            <ul className="productPage__featureList">
              <li>Low Power Consumption</li>
              <li>High Durability</li>
              <li>No UV &amp; IR Radiation"</li>
            </ul>
            <br />
            <Tabs
              defaultActiveKey="variants"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="variants" title="Variants">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Product Code</th>
                      <th>Watt</th>
                      <th>Lumen</th>
                      <th>IP</th>
                      <th>Master Packaging</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ST-810</td>
                      <td>24W</td>
                      <td>2640</td>
                      <td>IP-65</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>ST-811</td>
                      <td>36W</td>
                      <td>3960</td>
                      <td>IP-65</td>
                      <td>42</td>
                    </tr>
                    <tr>
                      <td>ST-812</td>
                      <td>50W</td>
                      <td>5500</td>
                      <td>IP-65</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>ST-812</td>
                      <td>100W</td>
                      <td>11000</td>
                      <td>IP-65</td>
                      <td>13</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="colors" title="Available Colors">
                <h5>Available in 6 Colors</h5>
                <ul className="productPage__featureList">
                  <li>White</li>
                  <li>Warmwhite</li>
                  <li> Blue </li>
                  <li>Pink</li>
                  <li>Green</li>
                  <li> Red</li>
                </ul>
              </Tab>
            </Tabs>
            <br />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
