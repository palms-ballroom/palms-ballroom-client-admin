import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { actionDoRegister } from "../store/actions";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";

export default function RegisterAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const formRegisterHandler = (event) => {
    const { value, name } = event.target;
    const newInput = {
      ...formRegister,
    };
    newInput[name] = value;
    setFormRegister(newInput);
  };

  const doRegister = (event) => {
    event.preventDefault();
    console.log(formRegister);
    dispatch(
      actionDoRegister({
        formRegister,
        access_token: localStorage.getItem("access_token"),
      })
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Success:", result);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div id="form-add-product" className="flex-1 flex-col pl-6">
      <nav
        className="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {/* <li className="inline-flex items-center">
            <button
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Login
            </button>
          </li> */}
          <li>
            <div className="flex items-center">
              {/* <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
              <Link
                to="/home"
                href="#"
                id="dashboard-sidebar"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                Register Admin
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="sm:px-0 md:px-0 lg:px-0 xl:px-48 2xl:48 h-auto pt-10">
        <div className="mx-auto max-w-full">
          <Card>
            <CardHeader color="green" contentPosition="none">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-white text-2xl">Register Admin</h2>
              </div>
            </CardHeader>
            <CardBody>
              <form onSubmit={doRegister}>
                <div className="flex flex-wrap mt-10">
                  <div className="w-full mb-10 font-light">
                    <Input
                      type="text"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Username"
                      value={formRegister.username}
                      onChange={formRegisterHandler}
                      name="username"
                    />
                  </div>
                  <div className="w-full mb-10 font-light">
                    <Input
                      value={formRegister.email}
                      onChange={formRegisterHandler}
                      name="email"
                      type="email"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-full mb-10 font-light">
                    <Input
                      value={formRegister.password}
                      onChange={formRegisterHandler}
                      name="password"
                      type="password"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Password"
                    />
                  </div>
                  <div className="w-full mb-10 font-light">
                    <Input
                      value={formRegister.phoneNumber}
                      onChange={formRegisterHandler}
                      name="phoneNumber"
                      type="number"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="w-full mb-10 font-light">
                    <Input
                      value={formRegister.address}
                      onChange={formRegisterHandler}
                      name="address"
                      type="text"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Address"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#43a047] hover:bg-[#bb9e80] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-25 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"
                >
                  Submit
                </button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* <div className="h-full w-full py-5">
        <div className="bg-white h-full w-full rounded-md px-20 pt-12">
          <div className="w-full h-full">
            <form
              onSubmit={doRegister}
              id="formRegister"
              className="h-full w-full"
            >
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={formRegister.username}
                  onChange={formRegisterHandler}
                  name="username"
                  type="text"
                  id="username-register"
                  className="align-left block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="username"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={formRegister.email}
                  onChange={formRegisterHandler}
                  name="email"
                  type="email"
                  id="email-register"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={formRegister.password}
                  onChange={formRegisterHandler}
                  name="password"
                  type="password"
                  id="password-register"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={formRegister.phoneNumber}
                  onChange={formRegisterHandler}
                  name="phoneNumber"
                  type="number"
                  id="phonenumber-register"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="phoneNumber"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                   value={formRegister.address}
                   onChange={formRegisterHandler}
                   name="address"
                   type="text"
                   id="address-register"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="address"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Address
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div> */}
      {/* <div className="bg-white w-full h-full pb-12 pt-5 rounded-md">
          <div className="min-h-full flex justify-center">
            <div className="max-w-md w-full space-y-8">
              <form onSubmit={doRegister} id="formRegister">
                <div className="mb-6 mt-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    User Name
                  </label>
                  <input
                    value={formRegister.username}
                    onChange={formRegisterHandler}
                    name="username"
                    type="text"
                    id="username-register"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="admin"
                    required=""
                  />
                </div>
                <div className="mb-6 mt-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    value={formRegister.email}
                    onChange={formRegisterHandler}
                    name="email"
                    type="email"
                    id="email-register"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@cms.com"
                    required=""
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    value={formRegister.password}
                    onChange={formRegisterHandler}
                    name="password"
                    type="password"
                    id="password-register"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="********"
                    required=""
                  />
                </div>
                <div className="mb-6 mt-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    value={formRegister.phoneNumber}
                    onChange={formRegisterHandler}
                    name="phoneNumber"
                    type="number"
                    id="phonenumber-register"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="08112345678"
                    required=""
                  />
                </div>
                <div className="mb-6 mt-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Address
                  </label>
                  <input
                    value={formRegister.address}
                    onChange={formRegisterHandler}
                    name="address"
                    type="text"
                    id="address-register"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Jakarta"
                    required=""
                  />
                </div>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms-register"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <button
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </button>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register new account
                </button>
              </form>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
