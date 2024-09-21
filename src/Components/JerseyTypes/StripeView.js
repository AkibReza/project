import React from "react";

const StripeView = ({ primary, secondary, size }) => {
  return (
    <div>
      <div className="relative ">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={`${size}`}
          viewBox="0 0 1600.000000 1600.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
            fill={primary}
            stroke="none"
          >
            <path
              d="M3500 11875 l0 -1125 500 0 500 0 0 -2250 0 -2250 500 0 500 0 0
   -125 0 -125 250 0 250 0 0 -125 0 -125 2000 0 2000 0 0 125 0 125 250 0 250 0
   0 125 0 125 500 0 500 0 0 2250 0 2250 500 0 500 0 0 1125 0 1125 -1500 0
   -1500 0 0 -125 0 -125 -125 0 -125 0 0 -125 0 -125 -125 0 -125 0 0 -125 0
   -125 -125 0 -125 0 0 -125 0 -125 -125 0 -125 0 0 -125 0 -125 -500 0 -500 0
   0 125 0 125 -125 0 -125 0 0 125 0 125 -125 0 -125 0 0 125 0 125 -125 0 -125
   0 0 125 0 125 -125 0 -125 0 0 125 0 125 -1500 0 -1500 0 0 -1125z m3000
   -2500 l0 -3375 -250 0 -250 0 0 125 0 125 -250 0 -250 0 0 3250 0 3250 500 0
   500 0 0 -3375z m4000 125 l0 -3250 -250 0 -250 0 0 -125 0 -125 -250 0 -250 0
   0 3375 0 3375 500 0 500 0 0 -3250z"
            />
          </g>
        </svg>

        <svg
          className="absolute left-1/2 transform -translate-x-1/2"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={`${size}`}
          viewBox="0 0 1600.000000 1600.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
            fill={secondary}
            stroke="none"
          >
            <path
              d="M5500 9500 l0 -3250 250 0 250 0 0 -125 0 -125 250 0 250 0 0 3375 0
3375 -500 0 -500 0 0 -3250z"
            />
            <path
              d="M9500 9375 l0 -3375 250 0 250 0 0 125 0 125 250 0 250 0 0 3250 0
3250 -500 0 -500 0 0 -3375z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default StripeView;