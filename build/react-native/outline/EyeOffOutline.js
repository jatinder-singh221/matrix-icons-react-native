import * as React from "react";
import Svg, { Path } from "react-native-svg";
const EyeOffOutline = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.137 14.621a3 3 0 0 1-4.243-4.242m.606-5.27A10.586 10.586 0 0 1 11.016 5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639-.366 1.1-.91 2.12-1.596 3.026m-2.66 2.471A10.449 10.449 0 0 1 11.017 20c-4.638 0-8.574-3.007-9.964-7.178a1.012 1.012 0 0 1 0-.639c.73-2.2 2.17-4.076 4.048-5.359M3 2l19 19"
    />
  </Svg>
);
export default EyeOffOutline;
