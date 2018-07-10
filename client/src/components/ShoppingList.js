import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button, Table } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(
              ({ _id, itemName, itemCount, itemPrice, totalPrice, date }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Table dark>
                      <thead>
                        <tr>
                          <th>Item Name</th>
                          <th>Item Count</th>
                          <th>Item Price</th>
                          <th>Total Price</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td color="primary">{itemName}</td>
                          <td>
                            <NumberFormat
                              value={itemCount}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </td>
                          <td>
                            <NumberFormat
                              value={itemPrice}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </td>
                          <td>
                            <NumberFormat
                              value={totalPrice}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </td>
                          <td color="primary">{date}</td>
                          <td>
                            <Button
                              className="remove-btn"
                              color="danger"
                              size="sm"
                              onClick={this.onDeleteClick.bind(this, _id)}
                            >
                              &times;
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </ListGroupItem>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
