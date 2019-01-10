import {VALIDATION_ERRORS as ERR} from './constants';

export const filterBySearchStringAndIncludeCheckbox = (filterStr, showStock) => (item) => {
  const filterCondition = filterStr ? item.name.toLowerCase().includes(filterStr.toLowerCase()) : item;
  const showStockCondition = showStock ? item.stocked : item;
  return showStockCondition && filterCondition;
}

export function Counter(startNumber) {
  this.count = startNumber;
  return () => this.count++
}

export function validateField(name, value, initialState) {
  let validationErrors = initialState.formErrors;
  let validationNameValid = initialState.nameValid;
  let validationPriceValid = initialState.priceValid;

  switch (name) {
    case 'itemName': {
      if (value.trim().length > 0) {
        validationNameValid = true;
        validationErrors.itemName = '';
      } else {
        validationNameValid = false;
        validationErrors.itemName = ERR.name_required;
      }
      break;
    }
    case 'itemPrice': {
      if (value.length === 0) {
        validationPriceValid = false;
        validationErrors.itemPrice = ERR.price_required
        break;
      }
      if (!value.match(/^\-?[0-9]*\.?[0-9]*$/)) {
        validationPriceValid = false;
        validationErrors.itemPrice = ERR.price_non_dight
        break;
      }
      if (Number(value) <= 0) {
        validationPriceValid = false;
        validationErrors.itemPrice = ERR.price_negative
        break;
      }
        validationPriceValid = true;
        validationErrors.itemPrice = '';
        break;
    }
    default: break;
  }
  return {
    formErrors: validationErrors,
    nameValid: validationNameValid,
    priceValid: validationPriceValid,
    formValid: validationNameValid && validationPriceValid
  }
}
