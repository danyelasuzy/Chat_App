import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useChatStore } from "../store/useChatStore";
import Logo from "./Logo.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const { authUser, logout } = useAuthStore();
  const { hasNewMessage } = useChatStore();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home or login after logout
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[rgba(255,255,255,0.3)] backdrop-blur-lg px-6 pr-4 md:pr-12 shadow-md border-b border-white/10">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Right-side nav */}
        <nav className="flex h-16 gap-2 justify-center items-center">
          <label className="input md:mr-4 text-sm px-2 py-1 border border-purple-500  sm:text-base sm:py-2 bg-[rgba(255,255,255,0.7)] ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none"
            />
          </label>
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {hasNewMessage && (
              <span className="badge badge-xs badge-primary indicator-item bg-purple-700"></span>
            )}
          </div>

          {/* Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div>
                <img
                  alt="User Avatar"
                  src={
                    authUser?.profilePic ||
                    `${import.meta.env.BASE_URL}avatar.png`
                  }
                  className="w-24 h-24 rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => navigate("/profile")}>Profile</a>
              </li>
              <li>
                <a onClick={() => navigate("/settings")}>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
