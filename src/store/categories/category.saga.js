// import { takeLatest, all, call, put } from "redux-saga/effects";

// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import {
//   fetchCategoriesSuccess,
//   fetchCategoriesFailed,
// } from "./category.action";
// import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export function* fetchCategoriesAsync() {
//   try {
//     const categoryArray = yield call(getCategoriesAndDocuments, "categoriesds");
//     yield put(fetchCategoriesSuccess(categoryArray));
//   } catch (error) {
//     yield put(fetchCategoriesFailed(error));
//   }
// }
// export function* onFetchCategories() {
//   yield takeLatest(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
//     fetchCategoriesAsync
//   ); //if i receive a bunch of actions i will take the latest one
// }
// export function* categoriesSaga() {
//   yield all([call(onFetchCategories)]);
// }
