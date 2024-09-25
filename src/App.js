import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/spinner.component";

const NavigationBar = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignUpForm = lazy(() =>
  import("./components/sign-up-form/sign-up-form.component")
);

const CheckOutPage = lazy(() => import("./routes/checkout/checkOutPage"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentification = lazy(() => import("././routes/auth/authentification"));

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
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};

export default App;
