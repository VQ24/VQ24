import React, { Component } from 'react';
import { Table } from './table/table';
import { AddModal } from './add-modal/add-modal';
import { Search } from './search/search';
import { STORE } from './common/constants';
import { Counter } from './common/utils';
import { filterBySearchStringAndIncludeCheckbox as filterFunc } from './common/utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialStore = STORE;
    this.state = {
      store: this.initialStore,
      showOnlyStocked: false,
      searchFilter: '',
      addModal: {
        isOpened: false,
        yCoord: 0,
        index: 0
      }
    }
    this.generateId = new Counter(200);

    this.listItemAction = this.listItemAction.bind(this);
    this.addItem = this.addItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onFilterChange = (filterString) => {
    this.setState({
      store: this.initialStore.filter(filterFunc(filterString, this.state.showOnlyStocked)),
      searchFilter: filterString
    })
  }

  onShowStockChange = (showStockOnly) => {
    this.setState({
      store: this.initialStore.filter(filterFunc(this.state.searchFilter, showStockOnly)),
      showOnlyStocked: showStockOnly
    })
  }

  closeModal() {
    this.setState({
      addModal: {
        isOpened: false,
        yCoord: this.state.addModal.yCoord
      }
    })
  }

  openModal(yCoord, index) {
    this.setState({
      addModal: {
        isOpened: true,
        yCoord: yCoord,
        index: index
      }
    })
  }

  addItem(index, itemName, itemPrice) {
    const newId = this.generateId();
    const newItem = Object.assign({}, {
      id: newId,
      category: this.initialStore[index].category,
      price: Number(itemPrice),
      name: itemName,
      stocked: true
    })
    this.initialStore.splice(index + 1, 0, newItem);
    this.setState({
      store: this.initialStore.filter(filterFunc(this.state.searchFilter, this.state.showOnlyStocked)),
    });
    this.closeModal();
  }

  listItemAction (...args) {
    const [ action, itemId, yCoord ] = args;
    switch (action) {
      case 'delete': {
        this.initialStore = this.initialStore.filter(item => item.id !== itemId)
        this.setState({
          store: this.initialStore.filter(filterFunc(this.state.searchFilter, this.state.showOnlyStocked)),
        })
        break;
      }
      case 'add': {
        const currentIndex = this.initialStore.findIndex((item => item.id === itemId));
        this.openModal(yCoord, currentIndex);
        break;
      }
      default: break;
    }
  }

  render() {
    return (
      <div className="margin-medium">
        <Search
          searchFilter={this.state.searchFilter}
          showOnlyStocked={this.state.showOnlyStocked}
          onFilterChange={this.onFilterChange}
          onShowStockChange={this.onShowStockChange}
        />
        <Table
          store={this.state.store}
          listItemAction={this.listItemAction}
          blocked={this.state.addModal.isOpened}
        />
        <AddModal
          isOpened = {this.state.addModal.isOpened}
          yCoord = {this.state.addModal.yCoord}
          index = {this.state.addModal.index}
          closeModal = {this.closeModal}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
