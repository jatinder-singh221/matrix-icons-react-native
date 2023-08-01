import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TrashSolid = (props) => (
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
      d="M16.5 4.978v.227c1.299.119 2.593.29 3.878.512a.75.75 0 0 1-.256 1.478l-.209-.035-1.005 13.07A3 3 0 0 1 15.917 23H8.084a3 3 0 0 1-2.991-2.77L4.087 7.16l-.209.035a.75.75 0 1 1-.256-1.478A48.564 48.564 0 0 1 7.5 5.205v-.227c0-1.564 1.213-2.9 2.816-2.951a52.663 52.663 0 0 1 3.369 0c1.603.05 2.815 1.387 2.815 2.95Zm-6.136-1.452a51.186 51.186 0 0 1 3.273 0C14.39 3.55 15 4.184 15 4.978v.113a49.49 49.49 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default TrashSolid;
