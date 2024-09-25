import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import { CATEGORIES_ACTION_TYPES } from "./category.types";

const CATEGORIES_INITIALE_STATE = {
  categories: [],
  isLoading: false,
  errorr: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIALE_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
      state.isLoading = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setError(state, action) {
      state.errorr = action.payload;
    },
  },
});
// *************************************************************
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(setIsLoading());

  try {
    const categoryMap = await getCategoriesAndDocuments("categoriesds");
    dispatch(setCategories(categoryMap));
  } catch (err) {
    dispatch(setError(err));
  }
};
export const { setCategories, setError, setIsLoading } =
  categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducerold = (
//   state = CATEGORIES_INITIALE_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return {
//         ...state,
//         categories: payload,
//         isLoading: false,
//       };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return {
//         ...state,
//         error: payload,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };
