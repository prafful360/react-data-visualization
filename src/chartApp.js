import React, { Component } from "react";
import "./App.css";
class chartApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="container center-flex">
          <div
            className="center-flex"
            style={{
              width: "35vh",
              height: "20vh",
              backgroundColor: "#E0E0E0",
              display: "inline-block",
              marginTop: "1rem",
              borderRadius: "6px",
            }}
          >
            <Doughnut
              data={data}
              options={{
                responsive: true,
              }}
            />
          </div>
          <div className="contain-data-el">
            Data Visualization Using Doughnut
          </div>
        </div>
      </div>
    );
  }
}

export default chartApp;
