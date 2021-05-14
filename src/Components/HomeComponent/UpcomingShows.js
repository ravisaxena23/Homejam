import { Component, useState } from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import ticket from "../images/ticket.svg";

const UpcomingShows = () => {
  const [shows] = useState([
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
          Upcoming Shows
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
          {shows.map((show) => (
            <div class="card col-md-3 col-sm-6 col-xs-12 show-cards">
              <img
                src={show.image}
                class="card-img-top show-card-img"
                alt="..."
              />
              <span class="badge bg-warning text-dark show-badge">
                {show.title}
              </span>
              <span class="show-card-name">{show.name}</span>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-10 col">
                    <a
                      href={show.info}
                      class=" btn upcoming-show-all-button borderless-button show-info-button"
                    >
                      More Info{" "}
                      <span class="show-arrow">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{marginTop:"-1px",marginLeft:"10px"}}
                        >
                          <path
                            d="M14.25 5.25L13.2 6.3L18.075 11.25H2.25V12.75H18.075L13.2 17.7L14.25 18.75L21 12L14.25 5.25Z"
                            fill="#0259EB"
                          />
                        </svg>
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

export default UpcomingShows;
