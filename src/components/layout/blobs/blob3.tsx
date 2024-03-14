import { css } from "styled-system/css";
import { SystemStyleObject } from "styled-system/types";

export function Blob3({
  css: cssProp,
  style,
  id,
}: {
  css?: SystemStyleObject;
  style?: any;
  id?: any;
}) {
  return (
    <svg
      className={css(cssProp)}
      width="1084"
      height="982"
      viewBox="0 0 1084 982"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      id={id}
    >
      <g opacity="0.4">
        <g filter="url(#filter0_f_660_3894)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M271.728 200.661C541.095 195.351 792.994 365.113 867.596 623.627C936.038 860.794 769.23 1080.9 566.493 1222.09C378.108 1353.28 132.836 1397.99 -55.1604 1266.24C-252.131 1128.2 -326.365 875.527 -255.883 645.774C-181.329 402.745 17.2377 205.678 271.728 200.661Z"
            fill="url(#paint0_linear_660_3894)"
          />
        </g>
        <g filter="url(#filter1_f_660_3894)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M310.774 104.817C168.986 101.972 16.5496 152.778 -28.0071 287.608C-73.1223 424.129 17.2336 557.806 132.93 642.98C251.156 730.016 408.22 782.155 527.484 696.552C648.534 609.668 661.489 440.437 610.208 300.411C564.843 176.541 442.496 107.459 310.774 104.817Z"
            fill="url(#paint1_linear_660_3894)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_660_3894"
          x="-481.955"
          y="0.540039"
          width="1565.16"
          height="1544.99"
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
            result="effect1_foregroundBlur_660_3894"
          />
        </filter>
        <filter
          id="filter1_f_660_3894"
          x="-139.844"
          y="4.7041"
          width="878.418"
          height="835.544"
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
            result="effect1_foregroundBlur_660_3894"
          />
        </filter>
        <linearGradient
          id="paint0_linear_660_3894"
          x1="300.627"
          y1="200.54"
          x2="300.627"
          y2="1345.53"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC50B7" />
          <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_660_3894"
          x1="299.365"
          y1="104.704"
          x2="299.365"
          y2="740.248"
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
