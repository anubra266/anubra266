import { css } from "styled-system/css";
import { SystemStyleObject } from "styled-system/types";

export function Blob1({ css: cssProp }: { css?: SystemStyleObject }) {
  return (
    <svg
      className={css(cssProp)}
      width="759"
      height="624"
      viewBox="0 0 759 624"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_13_2811)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M382.767 200.038C297.321 198.354 217.417 252.204 193.752 334.207C172.042 409.438 224.955 479.258 289.265 524.043C349.022 565.659 426.825 579.84 486.459 538.049C548.939 494.263 572.487 414.112 550.13 341.232C526.481 264.141 463.493 201.63 382.767 200.038Z"
          fill="url(#paint0_linear_13_2811)"
        />
      </g>
      <g filter="url(#filter1_f_13_2811)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M370.381 169.636C415.357 168.734 463.712 184.849 477.845 227.619C492.156 270.924 463.495 313.328 426.795 340.346C389.292 367.954 339.47 384.493 301.639 357.339C263.241 329.779 259.131 276.097 275.398 231.68C289.788 192.387 328.598 170.474 370.381 169.636Z"
          fill="url(#paint1_linear_13_2811)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_13_2811"
          x="-11.2"
          y="0"
          width="769.6"
          height="763.2"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_13_2811"
          />
        </filter>
        <filter
          id="filter1_f_13_2811"
          x="166.4"
          y="69.6001"
          width="415.2"
          height="401.6"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_13_2811"
          />
        </filter>
        <linearGradient
          id="paint0_linear_13_2811"
          x1="373.6"
          y1="200"
          x2="373.6"
          y2="563.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FC50B7" />
          <stop offset="1" stop-color="#FFC56F" stop-opacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_13_2811"
          x1="374"
          y1="169.6"
          x2="374"
          y2="371.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF08AB" />
          <stop offset="1" stop-color="#F58A25" stop-opacity="0" />
          <stop offset="1" stop-color="#7061A3" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
