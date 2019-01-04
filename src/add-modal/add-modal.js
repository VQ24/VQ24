import React, { Component } from 'react';
import './add-modal.css';

const initialState = {
  itemName: '',
  itemPrice: 0
}

export class AddModal extends Component {

  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleInputPrice = this.handleInputPrice.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  closeModal() {
    this.setState(initialState);
    this.props.closeModal();
  }

  addItem() {
    this.props.addItem(this.props.index, this.state.itemName, this.state.itemPrice);
    this.setState(initialState);
  }

  handleInputName(event) {
    this.setState({
      itemName: event.target.value
    })
  }

  handleInputPrice(event) {
    this.setState({
      itemPrice: event.target.value
    })
  }

  render() {
    return (
      <div
        className="modal-window"
        style={{
          top: this.props.isOpened ? this.props.yCoord - 40 : -180,
        }}
      >
        <div
          className="outer-button"
          onClick={this.closeModal}
        >X</div>
        <h3>Enter new item data</h3>
        <div>
          <div className="inline-block small-margin">
            <label htmlFor="item-name">Name</label>
            <div>
              <input
                name="item-name"
                type="text"
                value={this.state.itemName}
                onChange={this.handleInputName}
              ></input>
            </div>
          </div>
          <div className="inline-block small-margin">
            <label htmlFor="item-name">Price</label>
            <div>
              <input
                name="item-price"
                type="number"
                value={this.state.itemPrice}
                onChange={this.handleInputPrice}
              ></input>
            </div>
          </div>
        </div>
        <div className="small-margin">
          <div>
            <button
              className="small-margin"
              onClick={this.addItem}
              >Ok</button>
            <button
              className="small-margin"
              onClick={this.closeModal}
            >Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}