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
            <svg xmlns=""></svg>
          </label>
        </div>
      </div>
    </div>
  );
};
                 //!!! /*  NOT DONE  */ !!!//
export default Navbar;
