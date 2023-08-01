import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PencilSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M18.665 4.853c.438-.625.242-1.517-.436-1.993-.679-.475-1.584-.353-2.022.272l-1.32 1.886 2.457 1.721 1.32-1.886Zm-1.849 2.641-8.719 12.45a1.343 1.343 0 0 1-1.125.562l-.85.424c-.345.172-.776-.13-.732-.513l.107-.943a1.347 1.347 0 0 1 .143-1.25l8.718-12.451 2.458 1.72Z" />
  </Svg>
);
export default PencilSolid;
