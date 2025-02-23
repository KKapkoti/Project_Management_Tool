//App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth"; // Custom hook to access AuthContext
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./screens/Login";
import Signup from "./screens/SignUp";
import Workspace from "./screens/Workspace";
import Profile from "./screens/Profile";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

/**
 * Protected Route - Redirects to login if user is not authenticated
 */
const ProtectedRoute = ({ element }) => {
  const { user } = useAuth(); // Get user from AuthContext
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Protected Routes - User must be logged in to access */}
              {/* <Route path="/dashboard" element={<Dashboard />}  /> */}
              {/* <Route path="/workspace/:id" element={<ProtectedRoute element={<Workspace />} />} /> */}
              <Route path="/workspace/:id" element={<Workspace />} />
              {/* <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
