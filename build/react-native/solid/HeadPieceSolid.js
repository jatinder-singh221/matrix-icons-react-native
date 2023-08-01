import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeadPieceSolid = (props) => (
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
      d="M11.09 6.762c0 2.63-2.034 4.762-4.545 4.762a4.392 4.392 0 0 1-2.727-.952v10.476c0 .526-.407.952-.909.952S2 21.574 2 21.048V6.762C2 4.132 4.035 2 6.545 2s4.546 2.132 4.546 4.762Zm-2.272-1.19c.377 0 .682.32.682.714v1.428c0 .395-.305.715-.682.715-.376 0-.682-.32-.682-.715V6.286c0-.395.306-.715.682-.715Zm4.092 1.19c0 2.63 2.034 4.762 4.544 4.762a4.392 4.392 0 0 0 2.728-.952v10.476c0 .526.407.952.909.952s.909-.426.909-.952V6.762C22 4.132 19.965 2 17.454 2c-2.51 0-4.545 2.132-4.545 4.762Zm2.272-1.19c-.377 0-.682.32-.682.714v1.428c0 .395.305.715.682.715.376 0 .682-.32.682-.715V6.286c0-.395-.306-.715-.682-.715Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HeadPieceSolid;
