import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor } from "./store/store";
import { store } from "./store/storeToolkit";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://crwn-clothing.com/",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {/* <UserProvider> */}
            {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
            {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
            {/* </UserProvider> */}
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
// serviceWorkerRegistration.register();
reportWebVitals();
