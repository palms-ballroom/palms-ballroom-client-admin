import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { postBallroomIncludesImages } from "../store/actions";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";
import Swal from "sweetalert2";

export default function AddForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formAddBallroom, setFormAddBallroom] = useState({
    hotelApiId: "",
    name: "",
    city: "",
    pricePerDay: "",
    pricePerHour: "",
    mainImg: "",
    images1: "",
    images2: "",
    images3: "",
  });

  const formAddBallroomHandler = (event) => {
    const { value, name } = event.target;
    const newInput = {
      ...formAddBallroom,
    };
    newInput[name] = value;
    setFormAddBallroom(newInput);
  };

  const doAddForm = (event) => {
    event.preventDefault();
    // console.log(event);
    dispatch(
      postBallroomIncludesImages({
        formAddBallroom,
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
        Swal.fire({
          icon: "success",
          title: "Success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="form-add-ballroom" className="flex-1 flex-col pl-6">
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
                Add Ballroom
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
                <h2 className="text-white text-2xl">Add Ballroom</h2>
              </div>
            </CardHeader>
            <CardBody>
              <form onSubmit={doAddForm}>
                <div className="flex flex-wrap mt-10">
                  <div className="w-full lg:w-4/12 lg:pr-2 mb-10 font-light">
                    <Input
                      type="number"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Hotel ID"
                      value={formAddBallroom.hotelApiId}
                      onChange={formAddBallroomHandler}
                      name="hotelApiId"
                    />
                  </div>
                  <div className="w-full lg:w-4/12 lg:px-2 mb-10 font-light">
                    <Input
                      type="text"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Ballroom's Name"
                      value={formAddBallroom.name}
                      onChange={formAddBallroomHandler}
                      name="name"
                    />
                  </div>
                  <div className="w-full lg:w-4/12 lg:pl-2 mb-10 font-light">
                    <Input
                      value={formAddBallroom.city}
                      onChange={formAddBallroomHandler}
                      name="city"
                      type="text"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="City"
                    />
                  </div>
                  <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                    <Input
                      value={formAddBallroom.pricePerDay}
                      onChange={formAddBallroomHandler}
                      name="pricePerDay"
                      type="number"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Price / Day"
                    />
                  </div>
                  <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                    <Input
                      value={formAddBallroom.pricePerHour}
                      onChange={formAddBallroomHandler}
                      name="pricePerHour"
                      type="number"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Price / Hour"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-full mb-10 font-light">
                    <Input
                      value={formAddBallroom.mainImg}
                      onChange={formAddBallroomHandler}
                      name="mainImg"
                      type="url"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Main Image"
                    />
                  </div>
                  <div className="w-4/12 pr-2 mb-10 font-light">
                    <Input
                      value={formAddBallroom.images1}
                      onChange={formAddBallroomHandler}
                      name="images1"
                      type="url"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Image"
                    />
                  </div>
                  <div className="w-4/12 px-2 mb-10 font-light">
                    <Input
                      value={formAddBallroom.images2}
                      onChange={formAddBallroomHandler}
                      name="images2"
                      type="url"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Image"
                    />
                  </div>
                  <div className="w-4/12 px-2 mb-10 font-light">
                    <Input
                      value={formAddBallroom.images3}
                      onChange={formAddBallroomHandler}
                      name="images3"
                      type="url"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Image"
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
