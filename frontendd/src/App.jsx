import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import RefreeSignUp from "./Refree/RefreeSignUp";
import RefreeLogIn from "./Refree/RefreeLogIn";
import StudentSignup from "./Student/StudentSignup";
import StudentLogin from "./Student/StudentLogin";
import Refrel from "./Student/Refrel";
import StudentPrivateRoute from "./StudentPrivateRoute/StudentPrivateRoute";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import HomePage from "./Home";
import UploadProof from "./Refree/UploadProof";
import useAuth from "./PrivateRoute/useAuth";
import ListOfApp from "./Refree/ListOfApp";
import Profile from "./Refree/Profile";
import ProfileUpdate from "./Student/ProfileUpdate";
import RefreeProfileUpdate from "./Refree/RefreeProfileUpdate";
import ProtectedRoute from "./PrivateRoute/ProtectedRoute";
import RefreeNavleft from "./components/Navbar/RefreeNavleft";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="refreesignup" element={<RefreeSignUp />} />
        <Route path="refreelogin" element={<RefreeLogIn />} />
        <Route path="studentsignup" element={<StudentSignup />} />
        <Route path="studentlogin" element={<StudentLogin />} />



        {/* <Route path="refree" element=""> */}
        {/* refree Dashboard Routes */}
        <Route
          path="/refree"
          element={
            <ProtectedRoute>
              <ListOfApp />
            </ProtectedRoute>
          }
        >

          {/* </Route> */}
              <Route path="applications" element={ <ListOfApp />} />
              <Route path="uploadproofs" element={<UploadProof />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/update" element={<RefreeProfileUpdate />} />
        </Route>




        {/* <Route path="student" element=""> */}
        {/* student Dashboard Routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <Refrel />
            </ProtectedRoute>
          }
        >

        {/* </Route> */}
              <Route path="refrel" element={<Refrel />} />
              <Route path="updateprofile" element={<ProfileUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
