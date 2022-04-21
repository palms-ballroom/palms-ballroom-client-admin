import React from "react";
import { useSelector } from "react-redux";
import { MutatingDots } from "react-loader-spinner";

export default function Modal({ setModalOn }) {
  const images = useSelector((state) => state.imageReducer.images);
  const mainImage = useSelector(
    (state) => state.ballroomReducer.ballroom.mainImg
  );

  const imagesLoading = useSelector((state) => state.imageReducer.isLoading);

  const handleOKClick = () => {
    setModalOn(false);
  };

  return (
    <div className="bg-zinc-200 opacity-95 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-[#266c6b] rounded-sm">
          <div className="flex justify-center text-3xl text-zinc-600 mb-10">
            {" "}
            Ballroom Images{" "}
          </div>
          <div className="flex gap-5 justify-center pb-5">
            <div className="max-w-6xl bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              {
                <div className="h-[250px] w-[250px]">
                  <img
                    className=" rounded-lg h-full w-full"
                    src={mainImage}
                    alt="ballroom"
                  />
                </div>
              }
            </div>
          </div>
          <div className="flex gap-5">
            <div className="max-w-6xl bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              {imagesLoading && (
                <MutatingDots
                  height="100"
                  width="100"
                  color="grey"
                  ariaLabel="loading"
                />
              )}
              {!imagesLoading && (
                <div className="h-[200px] w-[200px]">
                  <img
                    className=" rounded-lg h-full w-full"
                    src={images.images1}
                    alt="ballroom"
                  />
                </div>
              )}
            </div>
            <div className="max-w-6xl bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              {imagesLoading && (
                <MutatingDots
                  height="100"
                  width="100"
                  color="grey"
                  ariaLabel="loading"
                />
              )}
              {!imagesLoading && (
                <div className="h-[200px] w-[200px]">
                  <img
                    className=" rounded-lg h-full w-full"
                    src={images.images2}
                    alt="ballroom"
                  />
                </div>
              )}
            </div>
            <div className="max-w-6xl bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              {imagesLoading && (
                <MutatingDots
                  height="100"
                  width="100"
                  color="grey"
                  ariaLabel="loading"
                />
              )}
              {!imagesLoading && (
                <div className="h-[200px] w-[200px]">
                  <img
                    className=" rounded-lg h-full w-full"
                    src={images.images3}
                    alt="ballroom"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleOKClick}
              className="rounded px-4 py-2 text-white bg-[#a9b1b8]"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
