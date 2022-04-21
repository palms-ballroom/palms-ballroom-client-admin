import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionDoLogin } from "../store/actions";
import logo from "../Logo-Palms.png";

import Swal from "sweetalert2";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const formLoginHandler = (event) => {
    const { value, name } = event.target;
    const newInput = {
      ...formLogin,
    };
    newInput[name] = value;
    setFormLogin(newInput);
  };

  const doLogin = (event) => {
    event.preventDefault();

    dispatch(actionDoLogin(formLogin))
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        localStorage.setItem("access_token", result.token);
        localStorage.setItem("id", result.id);
        if (result.role === "Customer") {
          localStorage.clear();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error: Bad Request",
          });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="h-full flex items-center justify-center">
          <div className="w-[700px]">
            <div className="w-full space-y-8">
              <div>
                <img
                  className="mx-auto h-48 -mt-16 -mb-16 w-auto"
                  src={logo}
                  alt="Workflow"
                />
                <h2 className="mt-10 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form
                onSubmit={doLogin}
                id="formLogin"
                className="mt-8 space-y-6 px-24"
              >
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      value={formLogin.email}
                      onChange={formLoginHandler}
                      name="email"
                      id="email-address-login"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      value={formLogin.password}
                      onChange={formLoginHandler}
                      name="password"
                      id="password-login"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#023d3a] hover:bg-[#246b71] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
