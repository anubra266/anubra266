import { css } from "styled-system/css";
import { SystemStyleObject } from "styled-system/types";

export function Blob5({ css: cssProp }: { css?: SystemStyleObject }) {
  return (
    <svg
      className={css(cssProp)}
      width="1319"
      height="957"
      viewBox="0 0 1319 957"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <g filter="url(#filter0_f_710_2691)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M579.15 200.347C816.902 195.648 1039.24 345.889 1105.08 574.677C1165.49 784.572 1018.26 979.369 839.319 1104.32C673.044 1220.43 456.56 1259.99 290.628 1143.4C116.775 1021.23 51.2536 797.611 113.463 594.277C179.267 379.194 354.529 204.787 579.15 200.347Z"
            fill="url(#paint0_linear_710_2691)"
          />
        </g>
        <g filter="url(#filter1_f_710_2691)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M613.614 115.524C488.467 113.006 353.922 157.97 314.595 277.296C274.775 398.119 354.526 516.425 456.643 591.805C560.993 668.833 699.623 714.976 804.89 639.217C911.732 562.323 923.167 412.551 877.904 288.627C837.864 179 729.876 117.862 613.614 115.524Z"
            fill="url(#paint1_linear_710_2691)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_710_2691"
          x="-109.549"
          y="0.239868"
          width="1428.41"
          height="1413.33"
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
            result="effect1_foregroundBlur_710_2691"
          />
        </filter>
        <filter
          id="filter1_f_710_2691"
          x="204.146"
          y="15.4241"
          width="798.795"
          height="762.464"
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
            result="effect1_foregroundBlur_710_2691"
          />
        </filter>
        <linearGradient
          id="paint0_linear_710_2691"
          x1="604.657"
          y1="200.24"
          x2="604.657"
          y2="1213.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FC50B7" />
          <stop offset="1" stop-color="#FFC56F" stop-opacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_710_2691"
          x1="603.544"
          y1="115.424"
          x2="603.544"
          y2="677.888"
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
