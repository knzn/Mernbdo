import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.props.getItems();
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { items } = this.props.item;
    let totalPrice = 0;

    items.forEach(item => {
      totalPrice += item.totalPrice;
    });

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">BDO Farm Calculator</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  Total Farmed Silver :{" "}
                  <NumberFormat
                    value={totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  / 500,000,000
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(AppNavbar);
