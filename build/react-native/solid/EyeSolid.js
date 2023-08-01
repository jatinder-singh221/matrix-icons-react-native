import * as React from "react";
import Svg, { Path } from "react-native-svg";
const EyeSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M2.036 11.683a1.012 1.012 0 0 0 0 .639C3.426 16.493 7.362 19.5 12 19.5c4.64 0 8.577-3.01 9.963-7.183a.998.998 0 0 0 0-.639C20.573 7.507 16.638 4.5 12 4.5c-4.64 0-8.577 3.01-9.964 7.183Zm12.085 2.438A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default EyeSolid;
