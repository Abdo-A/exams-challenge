import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const requireAuth = props => {
  if (props.loggedIn) return props.children;
  else {
    props.history.replace("/");
    return null;
  }
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default connect(mapStateToProps)(withRouter(requireAuth));
