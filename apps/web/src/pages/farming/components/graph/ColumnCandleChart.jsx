import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

class ColumnCandleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "PRODUCT A",
          data: [
            44000, 55000, 41000, 67000, 22000, 43000, 21000, 49000, 67000, 22000, 43000, 21000,
          ],
        },
        {
          name: "PRODUCT B",
          data: [13000, 23000, 20000, 8000, 13000, 27000, 33000, 12000, 20000, 8000, 13000, 27000],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
        },
        colors: ["#8647EE", "#FE6BBA"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
                show: false, // Hide the legend
              },
            },
          },
        ],
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val / 1000 + "k";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          //   position: "right",
          //   offsetX: 0,
          //   offsetY: 50,
          show: false, // Hide the legend
        },
      },
    };
  }

  componentDidMount() {
    // Check if we're on the client-side
    if (typeof window !== "undefined") {
      // Access window-dependent code here
      console.log("Window is defined!");
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ColumnCandleChart;
