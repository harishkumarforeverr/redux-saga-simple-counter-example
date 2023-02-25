import { takeEvery, call, put } from "redux-saga/effects"; 
const apiCallForAdd = async () => {
  return {
    count: 2,
  };
};
function* incrementCountCallbackfn() {
  try {
    //  we make api call in call() which we get from saga effects
    const products = yield call(apiCallForAdd); 
    //  here will put will dispatch the payload to store (reducer)
    yield put({
      type: "ADD",
      payload: products,
    });
  } catch (e) {}
}

export function* incrementCount() {
  yield takeEvery("ADD_INVOKER", incrementCountCallbackfn);
}



const apiCallForSub = async () => {
  return {
    count: 2,
  };
};
function* decrementCallbackFn() {
  try {
    const products = yield call(apiCallForSub); 
    yield put({
      type: "SUB",
      payload: products,
    });
  } catch (e) {}
}

export function* decrementCount() {
  yield takeEvery("SUB_INVOKER", decrementCallbackFn);
}




const apiCallForZero = async () => {
  return {
    count: 0,
  };
};
function* makeZeroCallback() {
  try {
    const products = yield call(apiCallForZero); 
    yield put({
      type: "ZERO",
      payload: products,
    });
  } catch (e) {}
}

export function* makeZero() {
  yield takeEvery("ZERO_INVOKER", makeZeroCallback);
}
