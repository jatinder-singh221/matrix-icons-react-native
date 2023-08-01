import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GridSquareAddSolid = (props) => (
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
      d="M2 4.917A2.917 2.917 0 0 1 4.917 2h2.5a2.917 2.917 0 0 1 2.916 2.917v2.5a2.917 2.917 0 0 1-2.916 2.916h-2.5A2.917 2.917 0 0 1 2 7.417v-2.5Zm11.667 0A2.917 2.917 0 0 1 16.583 2h2.5A2.917 2.917 0 0 1 22 4.917v2.5a2.917 2.917 0 0 1-2.917 2.916h-2.5a2.917 2.917 0 0 1-2.916-2.916v-2.5Zm-8.75 8.75A2.917 2.917 0 0 0 2 16.583v2.5A2.917 2.917 0 0 0 4.917 22h2.5a2.917 2.917 0 0 0 2.916-2.917v-2.5a2.917 2.917 0 0 0-2.916-2.916h-2.5ZM18.75 14a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25V20a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V14Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default GridSquareAddSolid;
