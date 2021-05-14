import { Fragment, Component } from "react";
import "../Css/Home.css";
import HomeCounter from "../HomeComponent/HomeCounter";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <section>
          <div class="banner">
            <div className="container-fluid">
            <p className="banner-heading">cari cari</p>
            <p className="banner-content" >
              Live from their sofa to yours. Get closer to your favorite
              artists, and never miss out.
            </p>
            </div>
            <HomeCounter />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
