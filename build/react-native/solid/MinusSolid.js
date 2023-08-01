import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MinusSolid = (props) => (
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
      d="M4 12.5c0-.398.079-.78.22-1.06.14-.282.331-.44.53-.44h15c.199 0 .39.158.53.44.141.28.22.662.22 1.06s-.079.78-.22 1.06c-.14.282-.331.44-.53.44h-15c-.199 0-.39-.158-.53-.44-.141-.28-.22-.662-.22-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MinusSolid;
