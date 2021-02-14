import "./App.css";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosRetry from "axios-retry";

function App() {
  // axiosRetry(axios, { retries: 1 });
  const [employees, setEmployees] = useState([]);
  // const [age, setAge] = useState([]);
  // const [salary, setSalary] = useState([]);
  const data = {
    labels: ["12", "19", "3", "5"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],

        backgroundColor: [
          "rgba(33,43,64,1)", //baker
          "rgba(194,244,120,1)", //benton
          "rgba(223,211,182,1)", //clackamas
          "rgba(186,220,221,1)",
        ],
        // borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  //   async function getUsers() {
  //     let url = 'http://dummy.restapiexample.com/api/v1/employees?_limit=20';
  //     try {
  //         let res = await fetch(url);
  //         return await res.json();
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  useEffect(async () => {
    let empSal = [];
    let empAge = [];
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    await axios.get(url, { timeout: 11 }).then((res) => {
      // const interval = 160;
      // let promise = Promise.resolve();
      console.log(res);
      for (const dataObj of res.data.data) {
        empSal.push(parseInt(dataObj.employee_salary));
        console.log(dataObj.employee_salary);
      }
      // console.log(employees);
      // return new Promise((resolve) => {
      //   setTimeout(resolve, interval);
      // });
    });
  }, []);

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
        <div className="contain-data-el">Data Visualization Using Doughnut</div>
      </div>
    </div>
  );
}

export default App;
