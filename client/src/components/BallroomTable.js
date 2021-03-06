import { useEffect, useState } from "react";
import BallroomRow from "./BallroomRow";
import { useSelector, useDispatch } from "react-redux";
import { fetchBallrooms } from "../store/actions";
import Modal from "./Modal";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Pagination from "./Pagination";

export default function BallroomTable() {
  const ballrooms = useSelector((state) => state.ballroomReducer.ballrooms);
  const dispatch = useDispatch();
  const ballroomsLoading = useSelector(
    (state) => state.ballroomReducer.isLoading
  );

  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    dispatch(fetchBallrooms());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [ballroomsPerPage] = useState(5);
  const indexOfLastPost = currentPage * ballroomsPerPage;
  const indexOfFirstPost = indexOfLastPost - ballroomsPerPage;
  const currentBallrooms = ballrooms.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-3 md:px-8 h-auto pt-14 pb-14 container">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 px-4 mb-16">
          {modalOn && <Modal setModalOn={setModalOn} />}
          <Card>
            <CardHeader
              className="bg-[#023d3a]"
              color={"#023d3a"}
              contentPosition="left"
            >
              <h2 className="text-white text-2xl">Card Table</h2>
            </CardHeader>
            <CardBody>
              <div className="overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        Name
                      </th>
                      <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        City
                      </th>
                      <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        Price/Day
                      </th>
                      <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        Price/Hour
                      </th>
                      <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        Clicked
                      </th>
                      <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        Image
                      </th>
                      <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    id="table-body"
                    className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                  >
                    {!ballroomsLoading &&
                      currentBallrooms.map((ballroom) => {
                        return (
                          <BallroomRow
                            setModalOn={setModalOn}
                            ballroom={ballroom}
                            key={ballroom.id}
                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
                          ></BallroomRow>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <Pagination
                ballroomsPerPage={ballroomsPerPage}
                totalBallrooms={ballrooms.length}
                paginate={paginate}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
