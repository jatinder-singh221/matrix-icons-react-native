import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SparkleOutline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m18.9 2 .732 2.379H22l-1.917 1.47.732 2.38L18.9 6.757l-1.917 1.47.732-2.379-1.917-1.47h2.37L18.9 2ZM7.622 5.376a.2.2 0 0 1 .382 0l1.23 3.995a.2.2 0 0 0 .191.141h4.001a.2.2 0 0 1 .122.36l-3.255 2.496a.2.2 0 0 0-.07.218l1.24 4.026a.2.2 0 0 1-.314.218l-3.214-2.466a.2.2 0 0 0-.243 0L4.477 16.83a.2.2 0 0 1-.313-.218l1.24-4.026a.2.2 0 0 0-.07-.218L2.079 9.871a.2.2 0 0 1 .121-.359h4.001a.2.2 0 0 0 .192-.14l1.23-3.996Zm12.01 12.774-.733-2.378-.732 2.379h-2.369l1.917 1.47L16.983 22l1.916-1.47L20.817 22l-.732-2.379 1.917-1.47h-2.37Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SparkleOutline;
