import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeartOffSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4.53 2.211a.77.77 0 0 0-1.06 0 .703.703 0 0 0 0 1.02l16.25 15.647a.77.77 0 0 0 1.06 0 .703.703 0 0 0 0-1.02L4.53 2.21ZM19.346 5.5c2.26 2.355 2.174 6.198-.189 8.44L7.997 3.723a5.497 5.497 0 0 1 4.105 1.173c2.182-1.647 5.263-1.46 7.244.604ZM11.715 21l-7.03-7.224c-2.029-2.085-2.227-5.369-.587-7.687L15.77 17.152 11.715 21Z" />
  </Svg>
);
export default HeartOffSolid;
