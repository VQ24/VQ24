import React, { Component } from 'react';
import './list-item.css';

export class ListItem extends Component {

  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleAddClick (event) {
    this.props.listItemAction('add', this.props.id, event.clientY);
  }

  handleDeleteClick () {
    this.props.listItemAction('delete', this.props.id);
  }

  render () {
    const renderDeleteButton = (showCondition) => showCondition ?
    <button
      className='action-link red-button'
      onClick={this.handleDeleteClick}
    >X</button>
    : <div className='action-link'></div>

    const renderAddButton = (showCondition) => showCondition ?
    <button
      className='action-link green-button'
      onClick={this.handleAddClick}
    >+</button>
    : <div className='action-link'></div>

    return (
      <tr>
        <td className={!this.props.stocked ? 'unstocked-item' : ''}>{this.props.name}</td>
        <td>${this.props.price}</td>
        <td className='button-cell'>
          {renderAddButton(!this.props.blocked)}
        </td>
        <td className='button-cell'>
          {renderDeleteButton(!this.props.blocked)}
        </td>
      </tr>
    );
  }
}