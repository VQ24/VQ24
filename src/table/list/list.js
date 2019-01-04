import React, { Component } from 'react';
import { ListItem } from './list-item/list-item';
import './list.css';

export class List extends Component {
  renderListItems(listItems) {
    return listItems.map(listItem => {
      return (
        <ListItem
          key={listItem.name}
          stocked={listItem.stocked}
          name={listItem.name}
          price={listItem.price}
        />
      )
    })
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className='bold-row column-15'>{this.props.listName}</td>
            <td></td>
          </tr>
          {this.renderListItems(this.props.listItems)}
        </tbody>
      </table>
    );
  }
}