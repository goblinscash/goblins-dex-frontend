import React, { useState } from "react";


// css
import styles from "./UnavailablePop.module.scss";


const UnavailablePop = ({  handleUnavailable }) => {


  return (
    <>
      <div
        className={`${styles.UnavailablePop} fixed inset-0 flex items-center justify-center cstmModal`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className={`${styles.modalDialog} modalDialog p-2 mx-auto rounded-lg z-10`}
        >
          <div className="top flex items-center justify-between gap-2 pt-2 px-3">
            <div className="left flex items-center gap-2">
              <p className="m-0   text-white text-lg"></p>
            </div>

            <button
              onClick={handleUnavailable}
              className="m-0 border-0 p-0 transparent    text-gray-400 "
      

            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M20.425 2.5H9.5875C5.35 2.5 2.5 5.475 2.5 9.9V20.1125C2.5 24.525 5.35 27.5 9.5875 27.5H20.425C24.6625 27.5 27.5 24.525 27.5 20.1125V9.9C27.5 5.475 24.6625 2.5 20.425 2.5Z"
                  fill="#00FF00"
                />
                <path
                  d="M18.7697 17.2131L16.5459 14.9906L18.7684 12.7681C19.1959 12.3419 19.1959 11.6481 18.7684 11.2219C18.3409 10.7919 17.6497 10.7931 17.2222 11.2206L14.9984 13.4431L12.7747 11.2181C12.3472 10.7906 11.6547 10.7931 11.2272 11.2181C10.8009 11.6456 10.8009 12.3394 11.2272 12.7656L13.4522 14.9906L11.2322 17.2094C10.8047 17.6369 10.8047 18.3306 11.2322 18.7556C11.4459 18.9706 11.7247 19.0769 12.0047 19.0769C12.2859 19.0769 12.5647 18.9706 12.7784 18.7569L14.9984 16.5369L17.2234 18.7606C17.4372 18.9744 17.7159 19.0806 17.9959 19.0806C18.2759 19.0806 18.5559 18.9731 18.7697 18.7606C19.1972 18.3331 19.1972 17.6406 18.7697 17.2131Z"
                  fill="#00FF00"
                />
              </svg>
            </button>
          </div>
          <div className="modalBody py-2 px-4">
            <div className="inner py-3 text-center">
              <div className="py-2">
                <svg
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 354 354"
                  fill="none"
                >
                  <circle cx="177" cy="177" r="177" fill="#00FF00" />
                  <path
                    d="M132.466 115.483L177.5 160.516L222.3 115.716C223.289 114.663 224.481 113.82 225.804 113.239C227.128 112.658 228.554 112.35 230 112.333C233.094 112.333 236.061 113.562 238.249 115.75C240.437 117.938 241.666 120.905 241.666 124C241.693 125.43 241.428 126.851 240.886 128.175C240.345 129.499 239.538 130.699 238.516 131.7L193.133 176.5L238.516 221.883C240.439 223.764 241.567 226.312 241.666 229C241.666 232.094 240.437 235.061 238.249 237.249C236.061 239.437 233.094 240.666 230 240.666C228.513 240.728 227.029 240.48 225.643 239.938C224.258 239.395 223 238.571 221.95 237.516L177.5 192.483L132.583 237.4C131.597 238.418 130.42 239.231 129.118 239.791C127.816 240.352 126.417 240.649 125 240.666C121.905 240.666 118.938 239.437 116.75 237.249C114.562 235.061 113.333 232.094 113.333 229C113.306 227.569 113.571 226.149 114.113 224.824C114.654 223.5 115.461 222.301 116.483 221.3L161.866 176.5L116.483 131.116C114.56 129.235 113.433 126.688 113.333 124C113.333 120.905 114.562 117.938 116.75 115.75C118.938 113.562 121.905 112.333 125 112.333C127.8 112.368 130.483 113.5 132.466 115.483Z"
                    fill="#002628"
                  />
                </svg>
              </div>
              <div className="content py-2 text-center">
                <h4 className="m-0 text-white py-2 text-4xl  ">
                  Our Product is unavailable in your location
                </h4>
                <p className="m-0 themeClr py-2 ">
                  Sorry, our product are unavailable in your location
                </p>
              </div>
              <div className="btnWRpper mt-3">
                <button className="flex items-center justify-center commonBtn btn w-full   text-lg" onClick={handleUnavailable} type="button">
                  Agree and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnavailablePop;
