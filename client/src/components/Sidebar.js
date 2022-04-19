import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Logo-Palms.png";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");

  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <img
            src={logo}
            // className="w-full h-full rounded-lg shadow-lg"
            alt="Flowbite Logo"
          />
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-2">
                <Link
                  to="/home"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="dashboard" size="2xl" />
                  Dashboard
                </Link>
              </li>
              <li className="rounded-lg mb-2 ">
                <Link
                  to="/home/add-form"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="toc" size="2xl" />
                  Add Ballroom
                </Link>
              </li>
              <li className="rounded-lg mb-2 ">
                <Link
                  to="/home/register-admin"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="list_alt" size="2xl" />
                  Register
                </Link>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <button
                  onClick={doLogout}
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="account_circle" size="2xl" />
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
