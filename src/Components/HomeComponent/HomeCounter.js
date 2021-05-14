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
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.9527 5C23.6808 4.99939 24.4017 5.14413 25.0731 5.42575C25.7445 5.70736 26.3529 6.12018 26.8627 6.64C27.9131 7.70638 28.5019 9.14316 28.5019 10.64C28.5019 12.1368 27.9131 13.5736 26.8627 14.64L16.5027 25.13L6.1427 14.64C5.09229 13.5736 4.50349 12.1368 4.50349 10.64C4.50349 9.14316 5.09229 7.70638 6.1427 6.64C6.6528 6.12055 7.26128 5.70795 7.93262 5.42629C8.60395 5.14464 9.32468 4.99957 10.0527 4.99957C10.7807 4.99957 11.5015 5.14464 12.1728 5.42629C12.8441 5.70795 13.4526 6.12055 13.9627 6.64L16.5027 9.24L19.0327 6.66C19.5409 6.13399 20.15 5.71586 20.8236 5.43064C21.4971 5.14542 22.2213 4.99895 22.9527 5ZM22.9527 3C21.9583 2.99916 20.9738 3.19686 20.0568 3.5815C19.1398 3.96615 18.3089 4.53 17.6127 5.24L16.5027 6.36L15.3927 5.24C14.6957 4.53129 13.8645 3.96841 12.9477 3.58419C12.0309 3.19997 11.0468 3.0021 10.0527 3.0021C9.05864 3.0021 8.07452 3.19997 7.15772 3.58419C6.24091 3.96841 5.40976 4.53129 4.7127 5.24C3.29458 6.68363 2.5 8.62636 2.5 10.65C2.5 12.6736 3.29458 14.6164 4.7127 16.06L16.5027 28L28.2927 16.06C29.7108 14.6164 30.5054 12.6736 30.5054 10.65C30.5054 8.62636 29.7108 6.68363 28.2927 5.24C27.5958 4.53091 26.7648 3.96765 25.8479 3.58306C24.9311 3.19848 23.9469 3.00028 22.9527 3Z"
                          fill="#0259EB"
                        />
                      </svg>
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
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.5 6C28.5 5.46957 28.2893 4.96086 27.9142 4.58579C27.5391 4.21071 27.0304 4 26.5 4H22.5V2H20.5V4H12.5V2H10.5V4H6.5C5.96957 4 5.46086 4.21071 5.08579 4.58579C4.71071 4.96086 4.5 5.46957 4.5 6V26C4.5 26.5304 4.71071 27.0391 5.08579 27.4142C5.46086 27.7893 5.96957 28 6.5 28H10.5V26H6.5V6H10.5V8H12.5V6H20.5V8H22.5V6H26.5V12H28.5V6Z"
                          fill="white"
                        />
                        <path
                          d="M21.5 15L24.049 19.938L29.5 20.729L25.5 24.573L26.5 30L21.5 27.438L16.5 30L17.5 24.573L13.5 20.729L19.1 19.938L21.5 15Z"
                          fill="white"
                        />
                      </svg>
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
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.5 6C28.5 5.46957 28.2893 4.96086 27.9142 4.58579C27.5391 4.21071 27.0304 4 26.5 4H22.5V2H20.5V4H12.5V2H10.5V4H6.5C5.96957 4 5.46086 4.21071 5.08579 4.58579C4.71071 4.96086 4.5 5.46957 4.5 6V26C4.5 26.5304 4.71071 27.0391 5.08579 27.4142C5.46086 27.7893 5.96957 28 6.5 28H10.5V26H6.5V6H10.5V8H12.5V6H20.5V8H22.5V6H26.5V12H28.5V6Z"
                          fill="white"
                        />
                        <path
                          d="M21.5 15L24.049 19.938L29.5 20.729L25.5 24.573L26.5 30L21.5 27.438L16.5 30L17.5 24.573L13.5 20.729L19.1 19.938L21.5 15Z"
                          fill="white"
                        />
                      </svg>
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
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.5 6C28.5 5.46957 28.2893 4.96086 27.9142 4.58579C27.5391 4.21071 27.0304 4 26.5 4H22.5V2H20.5V4H12.5V2H10.5V4H6.5C5.96957 4 5.46086 4.21071 5.08579 4.58579C4.71071 4.96086 4.5 5.46957 4.5 6V26C4.5 26.5304 4.71071 27.0391 5.08579 27.4142C5.46086 27.7893 5.96957 28 6.5 28H10.5V26H6.5V6H10.5V8H12.5V6H20.5V8H22.5V6H26.5V12H28.5V6Z"
                          fill="white"
                        />
                        <path
                          d="M21.5 15L24.049 19.938L29.5 20.729L25.5 24.573L26.5 30L21.5 27.438L16.5 30L17.5 24.573L13.5 20.729L19.1 19.938L21.5 15Z"
                          fill="white"
                        />
                      </svg>
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
