import { Fragment, Component } from "react";
import "../Css/Home.css";

//import components
import HomeCounter from "../HomeComponent/HomeCounter";
import UpcomingShows from "../HomeComponent/UpcomingShows";
import Review from "../HomeComponent/Reviews";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="1">
          <div class="banner">
            <div className="container">
              <p className="banner-heading">cari cari</p>
              <p className="banner-content">
                Live from their sofa to yours. Get closer to your favorite
                artists, and never miss out.
              </p>
            </div>
            <HomeCounter />
          </div>
        </section>
        <section id="2">
          <UpcomingShows />
        </section>
        <section id="3">
          <Review />
        </section>
      </div>
    );
  }
}

export default Home;
