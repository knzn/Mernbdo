import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
// import ItemModal from "./components/itemModal";
import AddFarmItem from "./components/AddFarmItem";
import { Container, Row, Col } from "reactstrap";
// import Total from "./components/Total";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <Row>
              <Col xs="9">
                <ShoppingList />
              </Col>
              <Col xs="3">
                <AddFarmItem />
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
