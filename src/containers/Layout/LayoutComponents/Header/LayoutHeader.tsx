import * as React from "react";
import StyledMainHeader from "./components/StyledMainHeader";
import logoSmall from "../../../../assets/logoSmall.png"

const LayoutHeader = () => (
  <StyledMainHeader>
    <img src={logoSmall} alt={"LOGO"}/>
  </StyledMainHeader>
);

export default LayoutHeader;
