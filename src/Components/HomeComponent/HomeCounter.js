import { Fragment, Component } from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Example(props) {
  return (
    <div>
      <div>{props.children}</div>
      <p>{props.description}</p>
    </div>
  );
}

class HomeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { percentage: 0, percent: 66 };
  }
  render() {
    return (
      <section>
        <div class="container">
          <div class="row">
            <div
              class="row"
              style={{ marginTop: "652px", justifyContent: "center" }}
            >
              <div class="col-6 col-md-4 circle">
                <Example>
                  <CircularProgressbarWithChildren
                    value={this.state.percent}
                    strokeWidth={1}
                    styles={buildStyles({
                      pathColor: "#DD4CAC",
                      textColor: "#FFFFFF",
                      trailColor: "grey",
                    })}
                  >
                    <div class="counter-text">
                      <i class="far fa-heart fa-lg" style={{ color: "#0259EB" }}></i>
                      <br />
                      <span class="percent-value">{this.state.percent}</span>
                      <br />
                      Label
                    </div>
                  </CircularProgressbarWithChildren>
                </Example>
              </div>
              <div class="col-6 col-md-4 circle">
                <Example>
                  <CircularProgressbarWithChildren
                    value={this.state.percentage}
                    strokeWidth={1}
                    styles={buildStyles({
                      pathColor: "#DD4CAC",
                      textColor: "#FFFFFF",
                      trailColor: "grey",
                    })}
                  >
                    <div class="counter-text">
                    <i class="fas fa-calendar-day fa-lg"></i>
                      <br />
                      <span class="percent-value">{this.state.percentage}</span>
                      <br />
                      Label
                    </div>
                  </CircularProgressbarWithChildren>
                </Example>
              </div>
              <div class="col-6 col-md-4 circle">
                <Example>
                  <CircularProgressbarWithChildren
                    value={this.state.percentage}
                    strokeWidth={1}
                    styles={buildStyles({
                      pathColor: "#DD4CAC",
                      textColor: "#FFFFFF",
                      trailColor: "grey",
                    })}
                  >
                    <div class="counter-text">
                    <i class="fas fa-calendar-day fa-lg"></i>
                      <br />
                      <span class="percent-value">{this.state.percentage}</span>
                      <br />
                      Label
                    </div>
                  </CircularProgressbarWithChildren>
                </Example>
              </div>
              <div class="col-6 col-md-4 circle">
                <Example>
                  <CircularProgressbarWithChildren
                    value={this.state.percentage}
                    strokeWidth={1}
                    styles={buildStyles({
                      pathColor: "#DD4CAC",
                      textColor: "#FFFFFF",
                      trailColor: "grey",
                    })}
                  >
                    <div class="counter-text">
                    <i class="fas fa-calendar-day fa-lg"></i>
                      <br />
                      <span class="percent-value">{this.state.percentage}</span>
                      <br />
                      Label
                    </div>
                  </CircularProgressbarWithChildren>
                </Example>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeCounter;
