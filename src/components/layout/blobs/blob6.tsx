import { css } from "styled-system/css";
import { SystemStyleObject } from "styled-system/types";

export function Blob6({ css: cssProp }: { css?: SystemStyleObject }) {
  return (
    <svg
      className={css(cssProp)}
      width="1212"
      height="1199"
      viewBox="0 0 1212 1199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <g filter="url(#filter0_f_710_2972)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M586.026 201.004C773.579 197.307 948.97 315.508 1000.91 495.504C1048.57 660.637 932.424 813.891 791.263 912.195C660.095 1003.54 489.32 1034.67 358.423 942.937C221.278 846.827 169.59 670.895 218.665 510.924C270.575 341.71 408.832 204.497 586.026 201.004Z"
            fill="url(#paint0_linear_710_2972)"
          />
        </g>
        <g filter="url(#filter1_f_710_2972)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M613.213 134.271C514.49 132.29 408.352 167.664 377.329 261.543C345.916 356.599 408.829 449.675 489.385 508.979C571.702 569.58 681.062 605.883 764.102 546.28C848.386 485.785 857.406 367.954 821.701 270.458C790.114 184.21 704.927 136.11 613.213 134.271Z"
            fill="url(#paint1_linear_710_2972)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_710_2972"
          x="0.511719"
          y="0.919922"
          width="1211.27"
          height="1197.22"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_710_2972"
          />
        </filter>
        <filter
          id="filter1_f_710_2972"
          x="269.088"
          y="34.1921"
          width="672.363"
          height="642.512"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_710_2972"
          />
        </filter>
        <linearGradient
          id="paint0_linear_710_2972"
          x1="606.148"
          y1="200.92"
          x2="606.148"
          y2="998.144"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC50B7" />
          <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_710_2972"
          x1="605.269"
          y1="134.192"
          x2="605.269"
          y2="576.704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF08AB" />
          <stop offset="1" stopColor="#F58A25" stopOpacity="0" />
          <stop offset="1" stopColor="#7061A3" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
