import jsonData from "./data.json";
import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./Constant";
import { useEffect } from "react";

function* getProducts() {
  // let data = yield fetch("https://jsonplaceholder.typicode.com/posts");
  // // let data = yield fetch("data.json");
  // data = yield data.json();
  // console.warn("action is called", data);
  // yield put({ type: SET_PRODUCT_LIST, data });

  let data = yield import("./data.json");
  data = jsonData; // use the imported JSON data
  console.warn("action is called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  // let result = yield fetch(
  //   `https://jsonplaceholder.typicode.com/posts?q=${data.query}`
  //   // `data.json?q=${data.query}`
  // );
  // result = yield result.json();
  // console.warn("action is called", result);
  // yield put({ type: SET_PRODUCT_LIST, data: result });

  let result = yield fetch(`./data.json?q=${data.query}`);
  result = yield result.json();
  console.warn("action is called", result);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* JobSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default JobSaga;
