import { css } from "styled-system/css";
import { SystemStyleObject } from "styled-system/types";

export function Blob7({ css: cssProp }: { css?: SystemStyleObject }) {
  return (
    <svg
      className={css(cssProp)}
      width="1090"
      height="720"
      viewBox="0 0 1090 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <g filter="url(#filter0_f_742_3195)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M592.671 186.106C783.428 182.346 961.815 302.566 1014.65 485.637C1063.11 653.591 944.986 809.463 801.414 909.447C668.006 1002.35 494.312 1034.01 361.179 940.714C221.691 842.962 169.121 664.024 219.033 501.32C271.83 329.215 412.449 189.658 592.671 186.106Z"
            fill="url(#paint0_linear_742_3195)"
          />
        </g>
        <g filter="url(#filter1_f_742_3195)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M620.323 118.232C519.914 116.217 411.963 152.196 380.409 247.679C348.46 344.359 412.447 439.025 494.38 499.342C578.104 560.978 689.331 597.901 773.79 537.28C859.514 475.752 868.688 355.907 832.373 256.746C800.247 169.025 713.604 120.103 620.323 118.232Z"
            fill="url(#paint1_linear_742_3195)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_742_3195"
          x="0.570312"
          y="-13.98"
          width="1225.13"
          height="1210.84"
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
            result="effect1_foregroundBlur_742_3195"
          />
        </filter>
        <filter
          id="filter1_f_742_3195"
          x="272.027"
          y="18.1521"
          width="680.434"
          height="650.072"
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
            result="effect1_foregroundBlur_742_3195"
          />
        </filter>
        <linearGradient
          id="paint0_linear_742_3195"
          x1="613.136"
          y1="186.02"
          x2="613.136"
          y2="996.864"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC50B7" />
          <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_742_3195"
          x1="612.244"
          y1="118.152"
          x2="612.244"
          y2="568.224"
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
