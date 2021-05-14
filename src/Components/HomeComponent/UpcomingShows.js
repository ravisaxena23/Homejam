import { Component } from "react";

class UpcominShows extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
      </div>
    );
  }
}

export default UpcominShows;
