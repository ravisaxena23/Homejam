import { Fragment, Component } from "react";
import "./Css/Home.css";
import HomeCounter from "./HomeCounter";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <section>
          <div class="banner">
          <HomeCounter />
          </div>
        </section>
  
      </div>
    );
  }
}

export default Home;
