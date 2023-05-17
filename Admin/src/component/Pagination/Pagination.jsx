import ReactDOM from "react-dom";
import React from "react";
import ReactPaginate from "react-paginate";
import "../Pagination/Pagination";

function PaginatedItems({ currentItems, handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">>"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<<"
      renderOnZeroPageCount={null}
      className="w-full flex justify-center items-center gap-[3%] pagination"
    />
  );
}

export default PaginatedItems;
