import { Navigate, Outlet, useNavigate, useOutlet } from "react-router-dom";
import useAuth from "./useAuth";
import RefreeNavleft from "../components/Navbar/RefreeNavleft";
import RefreeNavtop from "../components/Navbar/RefreeNavtop";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>
      <RefreeNavtop />
      <RefreeNavleft />
      <Outlet />
    </>
  ) : (
    <Navigate to="/refree/refreelogin" />
  );
};

export default PrivateRoutes;
