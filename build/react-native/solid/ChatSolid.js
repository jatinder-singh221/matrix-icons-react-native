import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChatSolid = (props) => (
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
      d="M20.932 17.139a1.37 1.37 0 0 1 .112-.867A9.961 9.961 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.954 9.954 0 0 0 5.08-1.385 1.376 1.376 0 0 1 1.045-.161l1.71.448a1.277 1.277 0 0 0 1.573-1.497l-.476-2.266Zm-4.349-6.667a.75.75 0 1 0-1.166-.943l-2.7 3.339-1.812-1.651a.75.75 0 0 0-1.107.106l-2.4 3.23a.75.75 0 1 0 1.204.894l1.905-2.563 1.788 1.629a.75.75 0 0 0 1.088-.083l3.2-3.958Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ChatSolid;
