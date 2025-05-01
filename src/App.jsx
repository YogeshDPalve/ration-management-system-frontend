import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import ForgotPassowrd from "./pages/user/ForgotPassowrd";
import OtpLogin from "./pages/user/OtpLogin";
import Dashboard from "./pages/user/Dashboard";
import SendOtp from "./pages/user/SendOtp";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Notifications from "./pages/user/Notifications";
import History from "./pages/user/History";
import Complaint from "./pages/user/Complaint";
import Profile from "./pages/user/Profile";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./pages/user/HomePage";
import {
  AdminRoute,
  AuthenticatedAdmin,
  ProtectedRoutes,
} from "./components/ProtectedRoutes";
import AdminLogin from "./pages/admin/adminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFoundPage from "./components/NotFoundPage";
import AdminSidebar from "./components/AdminSidebar";
{
  // function App() {
  //   return (
  //     <>
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/" element={<MainLayout />} />
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/login/otp-verification" element={<OtpLogin />} />
  //           <Route path="/register" element={<Register />} />
  //           <Route path="/reset-password" element={<ForgotPassowrd />} />
  //           <Route path="/send-otp" element={<SendOtp />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </>
  //   );
  // }
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login/otp-verification",
        element: <OtpLogin />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "reset-password",
        element: <ForgotPassowrd />,
      },
      {
        path: "forgot-password/send-otp",
        element: <SendOtp />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        ),
      },
      {
        path: "notifications",
        element: (
          <ProtectedRoutes>
            <Notifications />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "history",
        element: (
          <ProtectedRoutes>
            <History />
          </ProtectedRoutes>
        ),
      },
      {
        path: "complaint",
        element: (
          <ProtectedRoutes>
            <Complaint />/
          </ProtectedRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "admin/login",
        element: (
          <AuthenticatedAdmin>
            <AdminLogin />
          </AuthenticatedAdmin>
        ),
      },

      //       //* Admin Routes strar from here

      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminSidebar />
          </AdminRoute>
        ),
        children: [
          {
            path: "*",
            element: <NotFoundPage />,
          },
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}
export default App;
