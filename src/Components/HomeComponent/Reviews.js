import { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
              Click Me!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
