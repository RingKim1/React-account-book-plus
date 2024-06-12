import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route path="/signup" element={<PublicRoute element={Signup} />} />
            <Route path="/" element={<PrivateRoute element={Home} />} />
          </Route>
          <Route
            path="/detail/:id"
            element={<PrivateRoute element={Detail} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
