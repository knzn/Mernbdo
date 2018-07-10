import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class AddFarmItem extends Component {
  state = {
    itemName: "",
    itemCount: 0,
    itemPrice: 0,
    totalPrice: 0,
    totalFarm: 0
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      itemName: this.state.itemName,
      itemCount: this.state.itemCount,
      itemPrice: this.state.itemPrice,
      totalPrice: this.state.itemCount * this.state.itemPrice
    };

    // Add item via AddItem Action
    this.props.addItem(newItem);
  };

  render() {
    return (
      <div>
        <Card body>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="itemName">Item Name</Label>
              <Input
                type="text"
                name="itemName"
                id="itemName"
                placeholder="Item name"
                onChange={this.onChange}
              />
              <Label for="itemName">Item Count</Label>
              <Input
                type="text"
                name="itemCount"
                id="itemCount"
                placeholder="Item Count"
                onChange={this.onChange}
              />
              <Label for="itemName">Item Price</Label>
              <Input
                type="text"
                name="itemPrice"
                id="itemPrice"
                placeholder="Item Price"
                onChange={this.onChange}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddFarmItem);
