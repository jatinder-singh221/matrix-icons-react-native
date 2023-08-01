import * as React from "react";
import Svg, { Path } from "react-native-svg";
const StarOutline = (props) => (
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
      strokeWidth={1.5}
      d="m14.601 8.505.176.423.457.037 5.404.433c.499.04.702.661.321.987l-4.117 3.527-.348.298.106.446 1.257 5.273a.562.562 0 0 1-.84.61l-4.626-2.825-.391-.239-.39.239-4.628 2.826a.562.562 0 0 1-.84-.61v-.001L7.4 14.656l.106-.446-.348-.298-4.117-3.527a.562.562 0 0 1 .32-.987l5.405-.433.457-.037.176-.423 2.082-5.007a.563.563 0 0 1 1.039 0l2.082 5.007Z"
    />
  </Svg>
);
export default StarOutline;
