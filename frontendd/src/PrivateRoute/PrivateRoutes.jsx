import { Navigate, Outlet, useNavigate, useOutlet } from "react-router-dom";
import useAuth from "./useAuth";
import RefreeNavleft from "../components/Navbar/RefreeNavleft"

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>
      <RefreeNavleft/>
      <Outlet />
    </>
  ) : (
    <Navigate to="/refree/refreelogin" />
  );
};

export default PrivateRoutes;
