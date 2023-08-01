import * as React from "react";
import Svg, { Path } from "react-native-svg";
const WaletSolid = (props) => (
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
      d="M19.75 1.636c0-.217-.13-.42-.347-.536a.867.867 0 0 0-.72-.04L4.013 6.868C2.842 7.214 2 8.16 2 9.273v10.181C2 20.86 3.343 22 5 22h14c1.657 0 3-1.14 3-2.546V9.274c0-1.188-.959-2.186-2.256-2.467a.557.557 0 0 0 .006-.079v-5.09Zm-1.5 5.091V2.636L7.916 6.727H18.25Zm.75 8.06c0 .704-.672 1.274-1.5 1.274s-1.5-.57-1.5-1.273.672-1.273 1.5-1.273 1.5.57 1.5 1.273Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default WaletSolid;
