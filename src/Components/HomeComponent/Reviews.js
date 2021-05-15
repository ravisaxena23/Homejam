import { Component, useState, useEffect } from "react";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import us from "../images/us.svg";
import it from "../images/it.svg";
import ReactPaginate from "react-paginate";
// import avatar4 from "../images/avatar4.png";

const Reviews = () => {
  const [Reviews] = useState([
    {
      id: 1,
      location: "Palo Alto, CA",
      name: "Hellen Jummy",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing",
      image: avatar1,
      flag: us,
    },

    {
      id: 2,
      location: "Palo Alto, CA",
      name: "Isaac Oluwatemilorun",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing",
      image: avatar2,
      flag: it,
    },

    {
      id: 3,
      location: "Palo Alto, CA",
      name: "Hellen Jummy",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing",
      image: avatar3,
      flag: us,
    },

    {
      id: 4,
      location: "Palo Alto, CA",
      name: "Shilpa Rao",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing",
      image: avatar2,
      flag: it,
    },
  ]);
  const PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = Reviews.slice(offset, offset + PER_PAGE).map(
    (review) => (
      <div
        class="card col col-xs-12 review-cards"
        style={{ marginBottom: "10px" }}
      >
        <img src={review.image} class="avatar" alt="..." />
        <span class="review-name">{review.name}</span>
        <span class="review-location">
          <img
            src={review.flag}
            alt="flag"
            style={{ marginRight: "10px" }}
          ></img>
          {review.location}
        </span>
        <div class="card-body">
          <p class="review-content">{review.info}</p>
        </div>
      </div>
    )
  );

  const pageCount = Math.ceil(Reviews.length / PER_PAGE);

  return (
    <div className=" container">
      <div class="row">
        <div class="col-sm-6 col-md-6 upcoming-show-heading">Reviews</div>
        <div class="col-sm-6 col-md-6 pagination-box">
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            previousClassName={"rami"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            nextClassName={"rami"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
            <div className="show-page-count">{currentPage+1}<spam style={{color:"grey"}}>/{pageCount}</spam></div>
        </div>
      </div>

      {/* Cards */}
      <div class="">
        <div class="row">{currentPageData}</div>
      </div>
    </div>
  );
};

export default Reviews;
