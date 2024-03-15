import { css } from "styled-system/css";
import { SystemStyleObject } from "styled-system/types";

export function Blob4({ css: cssProp }: { css?: SystemStyleObject }) {
  return (
    <svg
      className={css(cssProp)}
      width="925"
      height="916"
      viewBox="0 0 925 916"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_660_3525)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M475.773 200.435C354.654 198.047 241.389 274.379 207.844 390.618C177.07 497.259 252.074 596.228 343.234 659.712C427.94 718.701 538.224 738.803 622.756 679.564C711.322 617.498 744.701 503.883 713.009 400.576C679.487 291.3 590.202 202.69 475.773 200.435Z"
          fill="url(#paint0_linear_660_3525)"
        />
      </g>
      <g filter="url(#filter1_f_660_3525)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M458.215 157.339C521.969 156.06 590.511 178.904 610.546 239.53C630.832 300.915 590.204 361.022 538.182 399.32C485.022 438.455 414.4 461.899 360.773 423.409C306.344 384.342 300.519 308.248 323.577 245.287C343.975 189.589 398.988 158.527 458.215 157.339Z"
          fill="url(#paint1_linear_660_3525)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_660_3525"
          x="0.824219"
          y="0.380127"
          width="923.908"
          height="914.836"
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
            result="effect1_foregroundBlur_660_3525"
          />
        </filter>
        <filter
          id="filter1_f_660_3525"
          x="210.822"
          y="57.2881"
          width="505.047"
          height="485.768"
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
            result="effect1_foregroundBlur_660_3525"
          />
        </filter>
        <linearGradient
          id="paint0_linear_660_3525"
          x1="462.778"
          y1="200.38"
          x2="462.778"
          y2="715.216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC50B7" />
          <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_660_3525"
          x1="463.345"
          y1="157.288"
          x2="463.345"
          y2="443.056"
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
