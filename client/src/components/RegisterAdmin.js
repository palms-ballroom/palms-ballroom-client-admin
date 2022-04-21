import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { actionDoRegister } from "../store/actions";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";
import Swal from "sweetalert2";

export default function RegisterAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    imageUrl: "",
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
    // console.log(formRegister);
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
        // console.log("Success:", result);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: result.msg,
        });
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
                   <li>
            <div className="flex items-center">
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
            <CardHeader
              className="bg-[#023d3a]"
              color={"#023d3a"}
              contentPosition="left"
            >
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
                  <div className="w-full mb-10 font-light">
                    <Input
                      value={formRegister.imageUrl}
                      onChange={formRegisterHandler}
                      name="imageUrl"
                      type="url"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Image Url"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#023d3a] hover:bg-[#246b71] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-25 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"
                >
                  Submit
                </button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
