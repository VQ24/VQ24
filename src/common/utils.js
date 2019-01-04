export const filterBySearchStringAndIncludeCheckbox = (filterStr, showStock) => (item) => {
  const filterCondition = filterStr ? item.name.toLowerCase().includes(filterStr.toLowerCase()) : item;
  const showStockCondition = showStock ? item.stocked : item;
  return showStockCondition && filterCondition;
}

export function Counter(startNumber) {
  this.count = startNumber;
  return () => this.count++
}
