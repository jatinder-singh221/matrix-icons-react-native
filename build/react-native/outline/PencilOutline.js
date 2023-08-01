import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PencilOutline = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.886 5.018 1.321-1.886c.438-.625 1.343-.747 2.022-.272.678.476.874 1.368.436 1.993l-1.321 1.886m-2.458-1.72L5.64 18.223c-.26.37-.297.834-.143 1.25l-.107.943c-.044.383.387.685.732.513l.85-.424c.443.003.866-.191 1.125-.561l9.247-13.206m-2.458-1.72 1.23.86 1.228.86"
    />
  </Svg>
);
export default PencilOutline;
