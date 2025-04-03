import "./App.css";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassowrd from "./pages/ForgotPassowrd";
import OtpLogin from "./pages/OtpLogin";
import Dashboard from "./pages/Dashboard";
import SendOtp from "./pages/SendOtp";
import "./index.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/otp-verification" element={<OtpLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ForgotPassowrd />} />
          <Route path="/send-otp" element={<SendOtp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <AuthenticatedUser>
            <Login />
          </AuthenticatedUser>
        ),
      },
      {
        path: "my-learning",
        element: (
          <ProtectedRoutes>
            <MyLearning />
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
        path: "course/search",
        element: (
          <ProtectedRoutes>
            <SearchPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "course-detail/:courseId",
        element: (
          <ProtectedRoutes>
            <CourseDetail />
          </ProtectedRoutes>
        ),
      },
      {
        path: "course-progress/:courseId",
        element: (
          <ProtectedRoutes>
            <PurchasedCourseProtectedRoutes>
              <CourseProgress />
            </PurchasedCourseProtectedRoutes>
          </ProtectedRoutes>
        ),
      },

      //* Admin Routes strar from here

      {
        path: "admin",
        element: (
          <AdminRoute>
            <Sidebar />
          </AdminRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
          {
            path: "course/:courseId/lecture",
            element: <CreateLecture />,
          },
          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />,
          },
        ],
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
