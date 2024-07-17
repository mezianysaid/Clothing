import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.action";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Authentification from "./routes/auth/authentification";
import Shop from "./routes/shop/shop.component";
import CheckOutPage from "./routes/checkout/checkOutPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentification" element={<Authentification />} />
        <Route path="sign-up" element={<SignUpForm />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
      <Route path="/*" element={<NavigationBar />} />
    </Routes>
  );
};

export default App;
