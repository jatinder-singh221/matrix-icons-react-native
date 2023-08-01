import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HandLeftOutline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.78 3.154c0-.637.563-1.154 1.257-1.154s1.257.517 1.257 1.154v8.427a.42.42 0 0 0 .838 0V6.23c0-.637.563-1.154 1.258-1.154.694 0 1.257.517 1.257 1.154v5.35a.42.42 0 0 0 .838 0V7.769c0-.637.563-1.154 1.258-1.154.694 0 1.257.517 1.257 1.154v8.846C21 19.59 18.373 22 15.133 22h-.839c-2.281 0-4.258-1.195-5.229-2.94l-5.697-6.231c-.447-.488-.532-1.074 0-1.484.532-.41 1.48-.488 1.926 0l3.133 3.427v-9.31c0-.638.563-1.154 1.257-1.154.695 0 1.258.516 1.258 1.154v6.119a.42.42 0 0 0 .838 0V3.154Z"
    />
  </Svg>
);
export default HandLeftOutline;
