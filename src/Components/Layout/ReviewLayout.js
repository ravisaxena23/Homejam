import React from "react";


const ReviewsLayout = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div class="container">
    <div class="row">
      {reviews.map((review) => (
        <div
          class="card  col col-xs-12 review-cards"
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
      ))}
      </div>
      </div>
  );
};

export default ReviewsLayout;
