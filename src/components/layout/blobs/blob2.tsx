import { css } from "styled-system/css";
import { SystemStyleObject } from "styled-system/types";

export function Blob2({ css: cssProp }: { css?: SystemStyleObject }) {
  return (
    <svg
      className={css(cssProp)}
      width="1079"
      height="644"
      viewBox="0 0 1079 644"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_660_3831)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M490.467 926.923C661.358 930.292 821.167 822.592 868.496 658.586C911.917 508.124 806.091 368.485 677.471 278.913C557.956 195.682 402.352 167.32 283.084 250.903C158.122 338.474 111.027 498.777 155.742 644.536C203.04 798.718 329.014 923.741 490.467 926.923Z"
          fill="url(#paint0_linear_660_3831)"
        />
      </g>
      <g filter="url(#filter1_f_660_3831)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M515.239 987.729C425.286 989.533 328.578 957.301 300.311 871.763C271.689 785.151 329.012 700.344 402.412 646.308C477.416 591.091 577.06 558.013 652.724 612.321C729.52 667.442 737.739 774.805 705.205 863.64C676.425 942.226 598.806 986.052 515.239 987.729Z"
          fill="url(#paint1_linear_660_3831)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_660_3831"
          x="-60.7988"
          y="0.600098"
          width="1139.2"
          height="1126.4"
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
            result="effect1_foregroundBlur_660_3831"
          />
        </filter>
        <filter
          id="filter1_f_660_3831"
          x="192.801"
          y="484.6"
          width="630.4"
          height="603.2"
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
            result="effect1_foregroundBlur_660_3831"
          />
        </filter>
        <linearGradient
          id="paint0_linear_660_3831"
          x1="508.801"
          y1="927"
          x2="508.801"
          y2="200.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC50B7" />
          <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_660_3831"
          x1="508.001"
          y1="987.8"
          x2="508.001"
          y2="584.6"
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
