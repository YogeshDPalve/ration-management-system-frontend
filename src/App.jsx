import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassowrd from "./pages/ForgotPassowrd";
import OtpLogin from "./pages/OtpLogin";
import Dashboard from "./pages/Dashboard";
import SendOtp from "./pages/SendOtp";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Notifications from "./pages/Notifications";
import History from "./pages/History";
import Complaint from "./pages/Complaint";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./pages/HomePage";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

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
        path: "dashboard",
        element: (
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedRoutes>
            <Login />
          </ProtectedRoutes>
        ),
      },
      {
        path: "login/otp-verification",
        element: (
          <ProtectedRoutes>
            <OtpLogin />
          </ProtectedRoutes>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedRoutes>
            <Register />
          </ProtectedRoutes>
        ),
      },
      {
        path: "reset-password",
        element: (
          <ProtectedRoutes>
            <ForgotPassowrd />
          </ProtectedRoutes>
        ),
      },
      {
        path: "forgot-password/send-otp",
        element: (
          <ProtectedRoutes>
            <SendOtp />
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
            <Complaint />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoutes>
            <Profile />,
          </ProtectedRoutes>
        ),
      },

      //       //* Admin Routes strar from here
      {
        // {
        //   path: "admin",
        //   element: (
        //     <AdminRoute>
        //       <Sidebar />
        //     </AdminRoute>
        //   ),
        //   children: [
        //     {
        //       path: "dashboard",
        //       element: <Dashboard />,
        //     },
        //     {
        //       path: "course",
        //       element: <CourseTable />,
        //     },
        //     {
        //       path: "course/create",
        //       element: <AddCourse />,
        //     },
        //     {
        //       path: "course/:courseId",
        //       element: <EditCourse />,
        //     },
        //     {
        //       path: "course/:courseId/lecture",
        //       element: <CreateLecture />,
        //     },
        //     {
        //       path: "course/:courseId/lecture/:lectureId",
        //       element: <EditLecture />,
        //     },
        //   ],
        // },
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
