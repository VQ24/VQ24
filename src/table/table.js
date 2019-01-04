import React, { Component } from 'react';
import { List } from './list/list';

export class Table extends Component {

  generateDisplayData(data) {
    const result = [];
    data.forEach((item, i) => {
      if(i === 0 || result.filter(resItem => resItem.listName === item.category).length === 0) {
        result.push({
          listName: item.category,
          listItems: data.filter(dataItem => dataItem.category === item.category)
        })
      }
    })
    return result;
  }

  render() {
    return (
      <div>
        {this.generateDisplayData(this.props.store).map(item => {
          return (
            <List
              key={item.listName}
              listName={item.listName}
              listItems={item.listItems}
            />
          );
        })}
      </div>
    );
  }
}