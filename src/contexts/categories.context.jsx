import { createContext, useState, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
import { createAction } from "../utils/reducer/reducer.utils.js";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

// ***** CATEGORIES REDUCER****************************************************************************
export const CATEGORIES_ACTION_TYPES = {
  CATEGORIES_MAP: "CATEGORIES_MAP",
};

const CATEGORIES_INITIALE_STATE = {
  categoriesMap: {},
};
const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      throw new Error(`unhandled error ${type} in categoriesReducer`);
  }
};
// *********************************************************************************

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});
  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    CATEGORIES_INITIALE_STATE
  );

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      dispatch(
        createAction(CATEGORIES_ACTION_TYPES.CATEGORIES_MAP, categoryMap)
      );
      // setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
