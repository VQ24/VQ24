import React, { Component } from 'react';

export class Search extends Component {

  handleFilterChange = (event) => {
    this.props.onFilterChange(event.target.value);
  }

  handleShowStockChange = (event) => {
    this.props.onShowStockChange(event.target.checked);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type='text'
            placeholder='Search...'
            value={this.props.searchFilter}
            onChange={this.handleFilterChange}
          ></input>
        </div>
        <div>
          <input
            type='checkbox'
            checked={this.props.showOnlyStocked}
            onChange={this.handleShowStockChange}
          ></input>
          <span>Only show products in stock</span>
        </div>
      </div>
    );
  }
}