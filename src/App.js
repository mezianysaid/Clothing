import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Authentification from "./routes/auth/authentification";
import Shop from "./routes/shop/shop.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentification" element={<Authentification />} />
        <Route path="sign-up" element={<SignUpForm />} />
      </Route>
      <Route path="/*" element={<NavigationBar />} />
    </Routes>
  );
};

export default App;
