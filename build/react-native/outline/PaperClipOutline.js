import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PaperClipOutline = (props) => (
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
      d="m19.5 12-8.21 7.194a4.435 4.435 0 0 1-6.137-.28v0a4.435 4.435 0 0 1 .258-6.363l9.622-8.599a3.23 3.23 0 0 1 4.34.031v0a3.23 3.23 0 0 1-.039 4.79l-9.44 8.404a1.88 1.88 0 0 1-2.625-.122v0a1.88 1.88 0 0 1 .172-2.727L15.044 8"
    />
  </Svg>
);
export default PaperClipOutline;
