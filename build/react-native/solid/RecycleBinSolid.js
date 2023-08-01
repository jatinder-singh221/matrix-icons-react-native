import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RecycleBinSolid = (props) => (
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
      d="M5 1a1 1 0 0 0-.999 1.048l.814 17.095A3 3 0 0 0 7.812 22h8.279a3 3 0 0 0 2.996-2.857l.814-17.095A1 1 0 0 0 18.903 1H5Zm8.517 6.453c-.645-1.29-2.486-1.29-3.131 0l-.772 1.545a.75.75 0 0 0 1.341.67l.773-1.544a.25.25 0 0 1 .447 0l.772 1.545a.75.75 0 0 0 1.342-.671l-.772-1.545Zm2.438 4.878a.75.75 0 1 0-1.341.671l.943 1.886a.25.25 0 0 1-.224.362h-.882a.75.75 0 0 0 0 1.5h.882a1.75 1.75 0 0 0 1.565-2.533l-.943-1.886Zm-6.666.671a.75.75 0 0 0-1.342-.67l-.943 1.885A1.75 1.75 0 0 0 8.57 16.75h.882a.75.75 0 0 0 0-1.5H8.57a.25.25 0 0 1-.223-.362l.943-1.886Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default RecycleBinSolid;
