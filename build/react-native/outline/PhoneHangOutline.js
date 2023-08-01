import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const PhoneHangOutline = (props) => (
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
        d="M22.182 11.182c.482.482.774 1.115.812 1.759.038.644-.182 1.247-.61 1.675l-.74.74c-.463.463-1.222.512-1.84.119l-3.276-2.086a1.799 1.799 0 0 1-.628-.684 1.608 1.608 0 0 1-.183-.874l.109-1.285a.287.287 0 0 0-.146-.281 9.89 9.89 0 0 0-3.883-1.069 8.551 8.551 0 0 0-3.784.618c-.078.032-.14.129-.113.266l.26 1.306c.06.298.032.597-.08.86a1.278 1.278 0 0 1-.552.614l-3.052 1.713c-.576.323-1.347.184-1.868-.338l-.831-.83a2.743 2.743 0 0 1-.813-1.76c-.038-.644.182-1.247.61-1.675l1.213-1.213c4.686-4.686 12.76-4.21 18.031 1.061l1.364 1.364Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PhoneHangOutline;
