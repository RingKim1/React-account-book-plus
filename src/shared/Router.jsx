import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import Profile from "../pages/Profile";

const PublicRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : element;
};

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/login"
              element={<PublicRoute element={<Login />} />}
            />
            <Route
              path="/signup"
              element={<PublicRoute element={<Signup />} />}
            />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/profile"
              element={<PrivateRoute element={<Profile />} />}
            />
          </Route>
          <Route
            path="/detail/:id"
            element={<PrivateRoute element={<Detail />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
