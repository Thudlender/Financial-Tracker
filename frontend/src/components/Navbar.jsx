import { useState, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const handleToggle = (e) => {
    if (e.target.checked) setTheme("dark");
    else setTheme("light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          SE NPRU financial Tracker
        </a>
      </div>
      <div className="flex-none space-x-2">
        <div className="space-x-2">
          <SignedOut>
            <SignUpButton
              mode="modal"
              className="btn btn-outline btn-primary"
            />
            <SignInButton
              mode="modal"
              className="btn btn-outline btn-secondary"
            />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div>
          <label className="flex cursor-pointer gap-2">
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v24.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 
              12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
              onChange={handleToggle} 
              checked={theme === "dark" ? true : false}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
