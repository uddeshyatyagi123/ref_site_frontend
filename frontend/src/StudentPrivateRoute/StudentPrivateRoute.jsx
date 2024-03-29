import { Navigate, Outlet } from "react-router-dom";
import StudentUseAuth from "./StudentUseAuth";
import StudentNavleft from "../components/Navbar/StudentNavleft";
import StudentNavtop from "../components/Navbar/StudentNavtop";
const StudentPrivateRoute = () => {
  const { isAuthenticatedStudent } = StudentUseAuth();

  return isAuthenticatedStudent ? (
    <>
      <StudentNavtop />
      <StudentNavleft />
      <Outlet />
    </>
  ) : (
    <Navigate to="/student/studentlogin" />
  );
};

export default StudentPrivateRoute;
