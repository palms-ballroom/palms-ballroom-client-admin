import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteBallroomsById,
  fetchBallrooms,
  fetchBallroomById,
} from "../store/actions";

import Swal from "sweetalert2";

export default function BallroomRow({ ballroom, setModalOn }) {
  // console.log(ballroom, `..............................................`);
  const dispatch = useDispatch();

  const doDelete = (event) => {
    event.preventDefault();
    dispatch(deleteBallroomsById(ballroom.hotelApiId))
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Success:", result);
        Swal.fire({
          icon: "success",
          title: "Success",
        });
        dispatch(fetchBallrooms());
      })
      .catch((error) => {
        // console.log(error);
        console.error("Error:", error);
      });
  };

  const navigate = useNavigate();

  const showImages = (event) => {
    event.preventDefault();
    console.log(`show images by id ${ballroom.hotelApiId}`);
    dispatch(fetchBallroomById(ballroom.hotelApiId));
    setModalOn(true);
  };

  const showFormEdit = (event) => {
    event.preventDefault();
    navigate(`/home/edit-form/${ballroom.hotelApiId}`);
  };

  const formatPrice = (price) => {
    let formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(price);
  };

  return (
    <tr>
      {/* <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            id="checkbox-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td> */}
      <td className="py-4 px-6 text-sm font-medium text-gray-900 text-left whitespace-nowrap dark:text-white">
        {ballroom.name}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-500 text-left whitespace-nowrap dark:text-white">
        {ballroom.city}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 text-left whitespace-nowrap dark:text-white">
        {formatPrice(ballroom.pricePerDay)}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 text-left whitespace-nowrap dark:text-white">
        {formatPrice(ballroom.pricePerHour)}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-500 text-left whitespace-nowrap dark:text-white">
        {ballroom.clicked}
      </td>
      {/* <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
        {ballroom.User.username}
      </td> */}
      {/* <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
        <img src={ballroom.mainImg} alt="Sushi" width="300" height="100" />
      </td> */}
      <td className="py-4 px-6 text-sm font-medium text-gray-500 text-left whitespace-nowrap dark:text-white">
        <button
          onClick={showImages}
          type="button"
          className="focus:outline-none text-white bg-[#023d3a] hover:bg-[#246b71] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Show images
        </button>
      </td>
      <td className="py-5 text-sm font-medium text-right whitespace-nowrap grid-cols-1 ">
        <div className="pr-0">
          <button
            onClick={showFormEdit}
            href="#"
            className="text-white bg-[#058079] hover:bg-[#045c57] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:focus:ring-yellow-900 w-full"
          >
            Edit
          </button>
        </div>
        <div className="pl-0">
          <button
            onClick={doDelete}
            href="#"
            className="text-white bg-[#a86e49] hover:bg-[#c4744a] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full"
          >
            Delete
          </button>
        </div>
      </td>
      {/* <td className="py-5 px-3 text-sm font-medium text-right whitespace-nowrap">
        <button
          onClick={doDelete}
          href="#"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </td> */}
    </tr>
  );
}
