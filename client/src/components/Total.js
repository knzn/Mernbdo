import React, { Component } from "react";
import { Alert, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class Total extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { items } = this.props.item;
    let totalPrice = 0;

    items.forEach(item => {
      totalPrice += item.totalPrice;
    });

    return (
      <Row>
        <Col xs="3">Item Name</Col>
        <Col xs="2">Item Count</Col>
        <Col xs="3">Item Price</Col>
        <Col xs="2">Total Price</Col>
      </Row>
    );
  }
}

Total.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(Total);
