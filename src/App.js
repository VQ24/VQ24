import React, { Component } from 'react';
import { Table } from './table/table';
import { Search } from './search/search';
import { STORE } from './common/constants';
import { filterBySearchStringAndIncludeCheckbox as filterFunc } from './common/utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: STORE,
      showOnlyStocked: false,
      searchFilter: ''
    }
  }

  onFilterChange = (filterString) => {
    this.setState({
      store: STORE.filter(filterFunc(filterString, this.state.showOnlyStocked)),
      searchFilter: filterString
    })
  }

  onShowStockChange = (showStockOnly) => {
    this.setState({
      store: STORE.filter(filterFunc(this.state.searchFilter, showStockOnly)),
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
