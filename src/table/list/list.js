import React, { Component } from 'react';
import { ListItem } from './list-item/list-item';
import './list.css';

export class List extends Component {
  constructor(props) {
    super(props);
    this.listItemAction = this.listItemAction.bind(this);
  }

  listItemAction (...args) {
    this.props.listItemAction(...args);
  }

  renderListItems(listItems) {
    return listItems.map(listItem => {
      return (
        <ListItem
          key={listItem.id}
          id={listItem.id}
          stocked={listItem.stocked}
          name={listItem.name}
          price={listItem.price}
          listItemAction={this.listItemAction}
          blocked={this.props.blocked}
        />
      )
    })
  }
  render() {
    return (
      <table>
        <tbody>
          <tr className='bold-row'>
            <td className='column-15'>{this.props.listName}</td>
            <td className='column-5'></td>
            <td className='button-cell'></td>
            <td className='button-cell'></td>
          </tr>
          {this.renderListItems(this.props.listItems)}
        </tbody>
      </table>
    );
  }
}