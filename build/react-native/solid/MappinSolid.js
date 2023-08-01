import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MappinSolid = (props) => (
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
      d="M12 23s10-4.82 10-13.2c0-2.334-1.054-4.572-2.929-6.223C17.196 1.927 14.652 1 12 1s-5.196.927-7.071 2.577S2 7.467 2 9.8C2 18.18 12 23 12 23Zm2.828-10.711C15.578 11.629 16 10.734 16 9.8c0-.934-.421-1.829-1.172-2.489-.75-.66-1.767-1.031-2.828-1.031-1.06 0-2.078.37-2.828 1.031C8.422 7.971 8 8.866 8 9.8c0 .934.421 1.829 1.172 2.489.75.66 1.767 1.031 2.828 1.031 1.06 0 2.078-.37 2.828-1.031Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MappinSolid;
