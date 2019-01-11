import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {MainWrapper} from "./LayoutComponents/LayoutComponent";


const mapDispatchToProps = () => ({
  //
});

const mapStateToProps = () => ({
  //
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(MainWrapper);