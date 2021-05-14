import { Component, useState } from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import ticket from "../images/ticket.svg";

const Reviews = () => {
  const [Reviews] = useState([
    {
      id: 1,
      title: "Folk",
      name: "Benny Dayal",
      info: "#",
      ticket: "#",
      image: img1,
    },

    {
      id: 2,
      title: "Bollywood",
      name: "Vijay Yesudas",
      info: "#",
      ticket: "#",
      image: img2,
    },

    {
      id: 3,
      title: "Folk",
      name: "Andrea Jeremiah",
      info: "#",
      ticket: "#",
      image: img3,
    },

    {
      id: 4,
      title: "Folk",
      name: "Shilpa Rao",
      info: "#",
      ticket: "#",
      image: img4,
    },
  ]);

  return (
    <div className=" container upcoming-shows">
      <div class="row">
        <div class="col-sm-6 col-md-6 upcoming-show-heading">
          Reviews
        </div>
        <div class="col-sm-6 col-md-6">
          <button
            type="button"
            class="upcoming-show-all-button borderless-button float-right"
          >
            View All
          </button>
        </div>
      </div>

      {/* Cards */}
      <div id="container">
        <div class="row">
          {Reviews.map((review) => (
            <div class="card col-md-3 col-sm-6 col-xs-12 review-cards">
              <img
                src={review.image}
                class="card-img-top avatar"
                alt="..."
              />
              <span class="badge bg-warning text-dark show-badge">
                {review.title}
              </span>
              <span class="show-card-name">{review.name}</span>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-10 col">
                    <a
                      href={review.info}
                      class=" btn upcoming-show-all-button borderless-button show-info-button"
                    >
                      More Info{" "}
                      <span class="show-arrow">
                        <i
                          class="fas fa-arrow-right fa-lg"
                          style={{ padding: "7px" }}
                        ></i>
                      </span>
                    </a>
                  </div>
                  <div class="col-md-2 col-xs-4 col-sm-4 ticket-icon float-right">
                    <a href="#">
                      <img src={ticket} alt="book-ticket"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
