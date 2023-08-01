import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PencilSquareSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M19.875 1.5a2.625 2.625 0 0 1 1.856 4.48l-1.157 1.158-3.712-3.712 1.157-1.157a2.625 2.625 0 0 1 1.856-.769Zm-4.074 2.987 3.712 3.712-8.4 8.4a5.248 5.248 0 0 1-2.214 1.32l-2.685.8a.75.75 0 0 1-.933-.933l.8-2.685a5.25 5.25 0 0 1 1.32-2.214l8.4-8.4Z" />
    <Path d="M3.129 6.129a3 3 0 0 1 2.121-.88h5.25a.75.75 0 1 1 0 1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V13.5a.75.75 0 0 1 1.5 0v5.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 .879-2.12Z" />
  </Svg>
);
export default PencilSquareSolid;
