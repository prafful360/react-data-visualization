import "./App.css";
import { Doughnut, Line, Radar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosRetry from "axios-retry";

function App() {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let data1 = [];
    let data2 = [];
    const url1 = "https://pokeapi.co/api/v2/pokemon/1";
    const urlEmp = "http://dummy.restapiexample.com/api/v1/employees";
    axios
      .get(url1)
      .then((res) => {
        console.log(res);

        setChartData({
          labels: data1,
          datasets: [
            {
              label: "Ratio B/W Age and Salary",
              data: data2,
              backgroundColor: [
                "rgba(156,39,176 ,0.5)",
                // "rgba(205,220,57 ,1)",
                // "rgba(2,136,209 ,1)",
                "rgba(156,39,176 ,1)",
              ],
              // borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data1, data2);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <div className=" center-flex">
        {/* <div
          className="center-flex"
          style={{
            width: "50vh",
            height: "50vh",
            backgroundColor: "#E0E0E0",
            display: "inline-block",
            marginTop: "1rem",
            borderRadius: "6px",
          }}
        >


        </div> */}
        <div className="contain-data-el">Data Visualization Using Doughnut</div>
        <div className="container">
          <Radar
            data={chartData}
            options={{
              responsive: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
