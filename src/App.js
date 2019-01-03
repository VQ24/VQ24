import React, { Component } from 'react';
import './App.css';

const STORE = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Food", price: "$12.99", stocked: false, name: "Banana"},
  {category: "Food", price: "$1.99", stocked: true, name: "Apple"},
  {category: "Food", price: "$13.99", stocked: true, name: "Orange"},
  {category: "Food", price: "$1.99", stocked: true, name: "Potato"},
  {category: "Food", price: "$14.99", stocked: false, name: "Cucumber"},
  {category: "Food", price: "$15.99", stocked: true, name: "Tomato"},
];

function ListItem(props) {
  return (
    <tr>
      <td className={!props.stocked ? 'unstocked-item column-1' : 'column-1'}>{props.name}</td>
      <td className='column-1'>{props.price}</td>
    </tr>
  );
}

class List extends Component {
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
            <td className='bold-row'>{this.props.listName}</td>
          </tr>
          {this.renderListItems(this.props.listItems)}
        </tbody>
      </table>
    );
  }
}

class Table extends Component {

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

class Search extends Component {

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: STORE,
      showOnlyStocked: false,
      searchFilter: ''
    }
  }

  filterFunc = (filterStr, showStock) => (item) => {
    const filterCondition = filterStr ? item.name.toLowerCase().includes(filterStr.toLowerCase()) : item;
    const showStockCondition = showStock ? item.stocked : item;
    return showStockCondition && filterCondition;
  }

  onFilterChange = (filterString) => {
    this.setState({
      store: STORE.filter(this.filterFunc(filterString, this.state.showOnlyStocked)),
      searchFilter: filterString
    })
  }

  onShowStockChange = (showStockOnly) => {
    this.setState({
      store: STORE.filter(this.filterFunc(this.state.searchFilter, showStockOnly)),
      showOnlyStocked: showStockOnly
    })
  }

  render() {
    return (
      <div>
        <Search
          searchFilter={this.state.searchFilter}
          showOnlyStocked={this.state.showOnlyStocked}
          onFilterChange={this.onFilterChange}
          onShowStockChange={this.onShowStockChange}
        />
        <Table
          store={this.state.store}
        />
      </div>
    );
  }
}

export default App;
