import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserOutline = (props) => (
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
      strokeWidth={1.5}
      d="M17.5 6.342c0 2.398-2.462 4.342-5.5 4.342S6.5 8.74 6.5 6.342C6.5 3.944 8.962 2 12 2s5.5 1.944 5.5 4.342ZM2 18.658c0-2.398 2.462-4.342 5.5-4.342h9c3.038 0 5.5 1.944 5.5 4.342C22 21.056 19.538 23 16.5 23h-9C4.462 23 2 21.056 2 18.658Z"
    />
  </Svg>
);
export default UserOutline;
