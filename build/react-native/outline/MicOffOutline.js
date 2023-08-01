import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MicOffOutline = (props) => (
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
      strokeWidth={1.5}
      d="M14.125 15.493a3.302 3.302 0 0 1-2.399 1.05 3.3 3.3 0 0 1-2.399-1.05 3.694 3.694 0 0 1-.994-2.537V9.61M5.62 11.522v1.434c0 1.589.554 3.121 1.555 4.305 1.002 1.184 2.38 1.936 3.874 2.113h.678M8.333 23h3.393m3.393 0h-3.393m4.552-5.739c-1.001 1.184-2.38 1.936-3.873 2.113h-.679M8.446 4.149a3.64 3.64 0 0 1 .881-1.62 3.302 3.302 0 0 1 2.4-1.05 3.3 3.3 0 0 1 2.398 1.05 3.69 3.69 0 0 1 .994 2.536v5.978M2 1l19 18.174m-9.274.2V23"
    />
  </Svg>
);
export default MicOffOutline;
