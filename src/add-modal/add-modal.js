import React, { Component } from 'react';
import { validateField as getValidation } from '../common/utils';
import {VALIDATION_ERRORS as ERR} from '../common/constants';
import './add-modal.css';

const getinitialState = () => {
  return {
    itemName: '',
    itemPrice: 0,
    validation: {
      formErrors: {
        itemName: ERR.name_required,
        itemPrice: ERR.price_required,
      },
      nameValid: false,
      priceValid: false,
      formValid: false,
    },
    formDirty: false,
  }
}

export class AddModal extends Component {

  constructor(props) {
    super(props);

    this.state = getinitialState();

    this.handleInput = this.handleInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  closeModal() {
    this.setState(getinitialState());
    this.props.closeModal();
  }

  addItem() {
    this.props.addItem(this.props.index, this.state.itemName, this.state.itemPrice);
    this.setState(getinitialState());
  }

  validateField(name, value, initialValidationState) {
    this.setState({
      validation: getValidation(name, value, initialValidationState)
    })
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value},
      () => {this.validateField(name, value, this.state.validation)
    })
  }

  handleFormDirty = () => {
    if (!this.state.formDirty) {
      this.setState({
        formDirty: true
      })
    }
  }

  renderValidationErrors() {
    return ([
      this.state.validation.nameValid || !this.state.formDirty ? null : <p key='name-error'>{this.state.validation.formErrors.itemName}</p>,
      this.state.validation.priceValid || !this.state.formDirty ? null : <p key='price-error'>{this.state.validation.formErrors.itemPrice}</p>
    ])
  }

  render() {
    return (
      <div
        className="modal-window"
        style={{
          top: this.props.isOpened ? this.props.yCoord - 40 : -500,
        }}
      >
        <div
          className="outer-button"
          onClick={this.closeModal}
        >X</div>
        <h3>Enter new item data</h3>
        <div>
          <div className="inline-block small-margin">
            <label htmlFor="itemName">Name</label>
            <div>
              <input
                name="itemName"
                type="text"
                value={this.state.itemName}
                onChange={this.handleInput}
                onInput={this.handleFormDirty}
              ></input>
            </div>
          </div>
          <div className="inline-block small-margin">
            <label htmlFor="itemPrice">Price</label>
            <div>
              <input
                name="itemPrice"
                type="text"
                value={this.state.itemPrice}
                onChange={this.handleInput}
                onInput={this.handleFormDirty}
              ></input>
            </div>
          </div>
        </div>
        <div className="small-margin error-line">
          {this.renderValidationErrors()}
        </div>
        <div className="small-margin">
          <div>
            <button
              className="small-margin dialog-button"
              disabled={!this.state.validation.formValid}
              onClick={this.addItem}
              >Ok</button>
            <button
              className="small-margin dialog-button"
              onClick={this.closeModal}
            >Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}