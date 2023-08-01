import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserMinusSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 11.167c3.038 0 5.5-2.052 5.5-4.584C17.5 4.052 15.038 2 12 2S6.5 4.052 6.5 6.583c0 2.532 2.462 4.584 5.5 4.584Zm-4.5 1.666c-3.038 0-5.5 2.052-5.5 4.584C2 19.948 4.462 22 7.5 22h9c3.038 0 5.5-2.052 5.5-4.583 0-2.532-2.462-4.584-5.5-4.584h-9ZM17 10.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" />
  </Svg>
);
export default UserMinusSolid;
