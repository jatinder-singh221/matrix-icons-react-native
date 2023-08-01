import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserAddSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11 11.167c3.038 0 5.5-2.052 5.5-4.584C16.5 4.052 14.038 2 11 2S5.5 4.052 5.5 6.583c0 2.532 2.462 4.584 5.5 4.584Zm-4.5 1.666c-3.038 0-5.5 2.052-5.5 4.584C1 19.948 3.462 22 6.5 22h9c3.038 0 5.5-2.052 5.5-4.583 0-2.532-2.462-4.584-5.5-4.584h-9ZM20 7.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2Z" />
  </Svg>
);
export default UserAddSolid;
