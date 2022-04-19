import {
  // useState,
  useEffect,
} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBallroomById,
  putBallroomsIncludesImages,
} from "../store/actions";
import {
  commitImagesById,
  commitBallroomsById,
} from "../store/actions/actionCreator";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";

import Swal from "sweetalert2";

export default function EditForm() {
  const ballroom = useSelector((state) => state.ballroomReducer.ballroom);
  const images = useSelector((state) => state.imageReducer.images);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(ballroom, `????????????????????????????????????????????/`);

  const params = useParams();
  useEffect(() => {
    dispatch(fetchBallroomById(params.id));
  }, [params.id, dispatch]);

  const formEditBallroomHandler = (event) => {
    const { value, name } = event.target;
    if (name.includes("image")) {
      const newInput = {
        ...images,
      };
      newInput[name] = value;
      dispatch(commitImagesById(newInput));
    } else {
      const newInput = {
        ...ballroom,
      };
      newInput[name] = value;
      dispatch(commitBallroomsById(newInput));
    }
  };

  const doEdit = (event) => {
    event.preventDefault();

    const payload = { ballroomId: params.id, images, ballroom };
    dispatch(putBallroomsIncludesImages(payload))
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        Swal.fire({
          icon: "success",
          title: "Success",
        });
        navigate(`/home`);
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
                Edit Ballroom
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
              <form onSubmit={doEdit}>
                <div className="flex flex-wrap mt-10">
                  <div className="w-4/12 pr-2 mb-10 font-light">
                    <Input
                      type="number"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Hotel ID"
                      value={ballroom.hotelApiId}
                      onChange={formEditBallroomHandler}
                      name="hotelApiId"
                    />
                  </div>
                  <div className="w-4/12 px-2 mb-10 font-light">
                    <Input
                      type="text"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Ballroom's Name"
                      value={ballroom.name}
                      onChange={formEditBallroomHandler}
                      name="name"
                    />
                  </div>
                  <div className="w-4/12 pl-2 mb-10 font-light">
                    <Input
                      value={ballroom.city}
                      onChange={formEditBallroomHandler}
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
                      value={ballroom.pricePerDay}
                      onChange={formEditBallroomHandler}
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
                      value={ballroom.pricePerHour}
                      onChange={formEditBallroomHandler}
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
                      value={ballroom.mainImg}
                      onChange={formEditBallroomHandler}
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
                      value={images.images1}
                      onChange={formEditBallroomHandler}
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
                      value={images.images2}
                      onChange={formEditBallroomHandler}
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
                      value={images.images3}
                      onChange={formEditBallroomHandler}
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

      {/* <div className="h-full w-full py-5">
        <div className="bg-white h-full w-full rounded-md px-20 pt-12">
          <div className="w-full h-full">
            <form
              onSubmit={doAddForm}
              id="ballroom"
              className="h-full w-full"
            >
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={ballroom.name}
                  onChange={formEditBallroomHandler}
                  id="add-ballroom-name"
                  type="text"
                  name="name"
                  className="align-left block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Ballroom's Name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <select
                  value={ballroom.status}
                  onChange={formEditBallroomHandler}
                  name="status"
                  id="add-status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Choose Status</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={ballroom.price}
                  onChange={formEditBallroomHandler}
                  id="add-price"
                  type="number"
                  name="price"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="price"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Price
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={ballroom.mainImg}
                  onChange={formEditBallroomHandler}
                  id="add-image-url"
                  type="url"
                  name="mainImg"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="mainImg"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Main Image Url
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={ballroom.images1}
                  onChange={formEditBallroomHandler}
                  id="edit-image-url"
                  type="url"
                  name="images1"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_first_name"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Image Url Additional 1
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={ballroom.images2}
                  onChange={formEditBallroomHandler}
                  id="edit-image-url"
                  type="url"
                  name="images2"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_first_name"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Image Url Additional 2
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={ballroom.images3}
                  onChange={formEditBallroomHandler}
                  id="edit-image-url"
                  type="url"
                  name="images3"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_first_name"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Image Url Additional 3
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  value={ballroom.images4}
                  onChange={formEditBallroomHandler}
                  id="edit-image-url"
                  type="url"
                  name="images3"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_first_name"
                  className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Image Url Additional 4
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
        </div>
      </div> */}
    </div>
  );
}
