import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserGroupSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M16.5 6.583c0 2.532-2.462 4.584-5.5 4.584S5.5 9.115 5.5 6.583C5.5 4.052 7.962 2 11 2s5.5 2.052 5.5 4.583ZM1 17.417c0-2.532 2.462-4.584 5.5-4.584h9c3.038 0 5.5 2.052 5.5 4.584C21 19.948 18.538 22 15.5 22h-9C3.462 22 1 19.948 1 17.417Zm20.2-8.584c0 1.013-.985 1.834-2.2 1.834-1.215 0-2.2-.821-2.2-1.834C16.8 7.821 17.785 7 19 7c1.215 0 2.2.82 2.2 1.833Z" />
    <Path d="M15 13.167c0-1.013.985-1.834 2.2-1.834h3.6c1.215 0 2.2.821 2.2 1.834C23 14.179 22.015 15 20.8 15h-3.6c-1.215 0-2.2-.82-2.2-1.833Z" />
  </Svg>
);
export default UserGroupSolid;
