import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { signOut } from "firebase/auth";
import { close, logo, menu, profileblank } from "../assets";
import { navLinks } from "../constants";
import auth from "../firebase.init";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="tswaanda" className="w-[134px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white`}
          >
            <HashLink smooth to={`/#${nav.id}`}>
              {nav.title}
            </HashLink>
          </li>
        ))}
        {user ? (
          <>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white`}
            >
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* profile icon */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL !== null ? user.photoURL : profileblank}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleSignOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <li
              onClick={() => navigate("/login")}
              className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white btn btn-outline btn-primary`}
            >
              Login
            </li>
          </>
        )}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <HashLink smooth to={`/#${nav.id}`}>
                  {nav.title}
                </HashLink>
              </li>
            ))}

            {user ? (
              <>
                <li
                  className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white`}
                >
                  <Link to="/dashboard" href="/">
                    Dashboard
                  </Link>
                </li>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          user.photoURL !== null ? user.photoURL : profileblank
                        }
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li onClick={handleSignOut}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li
                  onClick={() => navigate("/login")}
                  className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white`}
                >
                  Login
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
