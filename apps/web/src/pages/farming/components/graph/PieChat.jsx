import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const [options] = useState({
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  });

  // Use useEffect to check if we're on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Window is defined!");
      // Access window-dependent code here
    }
  }, []);

  return (
    <div>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart options={options} series={series} type="donut" width={380} />
          </div>
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
