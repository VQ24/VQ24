export const STORE = [
  {id: '100', category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
  {id: '101', category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'},
  {id: '102', category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball'},
  {id: '103', category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch'},
  {id: '104', category: 'Electronics', price: 399.99, stocked: false, name: 'iPhone 5'},
  {id: '105', category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7'},
  {id: '106', category: 'Food', price: 12.99, stocked: false, name: 'Banana'},
  {id: '107', category: 'Food', price: 1.99, stocked: true, name: 'Apple'},
  {id: '108', category: 'Food', price: 13.99, stocked: true, name: 'Orange'},
  {id: '109', category: 'Food', price: 1.99, stocked: true, name: 'Potato'},
  {id: '110', category: 'Food', price: 14.99, stocked: false, name: 'Cucumber'},
  {id: '111', category: 'Food', price: 15.99, stocked: true, name: 'Tomato'},
];

export const VALIDATION_ERRORS = {
  name_required: 'Name is required',
  price_required: 'Price is required',
  price_non_dight: 'Price should be a number',
  price_negative: 'Price should be greater than 0',
}