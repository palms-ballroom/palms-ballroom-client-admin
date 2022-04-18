import React from "react";

const Pagination = ({ ballroomsPerPage, totalBallrooms, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBallrooms / ballroomsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    // <nav aria-label="Page navigation example">
    //   <ul class="inline-flex items-center -space-x-px">
    //     <li>
    //       <a
    //         href="#"
    //         class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         1
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         2
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         aria-current="page"
    //         class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    //       >
    //         3
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         4
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         5
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Pagination;
