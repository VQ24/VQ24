import { STORE } from '../common/constants';

export function getData() {
  return STORE.map(item => getLine(item));
}

function getLine(item) {
  return new Promise ((resolve, reject) => {
    const getRequestAnswerTime = 500 + Math.random()*3000;
    const loadingRequestTime = 1000 + Math.random()*2000;
    setTimeout(() => {
      resolve (Object.assign(item, {loading: true, loadingTime: loadingRequestTime}));
    }, getRequestAnswerTime)
  })
}