import { withRouter } from "react-router-dom";

const requireAuth = props => {
  if (true) return props.children;
  else {
    props.history.replace("/");
    return null;
  }
};

export default withRouter(requireAuth);
