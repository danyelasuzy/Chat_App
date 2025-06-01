import { Routes, Route, Navigate } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import SignUpPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full bg-[#f7f3ff]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
