import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChatOffOutline = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.486 10-.493.75m-1.702 2.526-.822-.905-.823-.905L9 14.138"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m19.835 20.902-1.71-.448a1.374 1.374 0 0 0-1.044.16A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12a9.96 9.96 0 0 1 2.4-6.5m3.1-2.433A9.958 9.958 0 0 1 12 2c5.523 0 10 4.477 10 10a9.969 9.969 0 0 1-.791 3.905M4 2l18.385 18.385"
    />
  </Svg>
);
export default ChatOffOutline;
