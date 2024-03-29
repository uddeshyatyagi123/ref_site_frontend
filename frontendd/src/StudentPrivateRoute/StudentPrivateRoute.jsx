import { Navigate, Outlet } from "react-router-dom";
import StudentUseAuth from "./StudentUseAuth";
import StudentNavleft from "../components/Navbar/StudentNavleft"
const StudentPrivateRoute = () => {
  const { isAuthenticatedStudent } = StudentUseAuth();

  return isAuthenticatedStudent ? (
    <>
      <StudentNavleft />
      <Outlet />
    </>
  ) : (
    <Navigate to="/student/studentlogin" />
  );
};

export default StudentPrivateRoute;
