import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import React, { Component } from "react";
import withSizes from "react-sizes";

import * as apiActions from "../../store/actions/apiActions";
import announcements from "../../api/fakeAnnouncmentService";
import AnnouncementsDeclaration from "../../components/Dashboard/AnnouncementsDeclaration/AnnouncementsDeclaration";
import devicesSizes from "../../assets/devices_sizes";
import DueDeclaration from "../../components/Dashboard/DueDeclaration/DueDeclaration";
import ExamsDeclaration from "../../components/Dashboard/ExamsDeclaration/ExamsDeclaration";
import Header from "../../components/PageTop/Header/Header";
import quizzes from "../../api/fakeQuizesService";

import "./Dashboard.scss";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAnnouncements();
    this.props.getQuizzes();
  }

  render() {
    //Deciding whether or not the viewed items are provided by the fake services
    let viewedAnnouncements = this.props.announcements;
    let viewedQuizzes = this.props.quizzes;

    if (this.props.useFakeServices) {
      viewedAnnouncements = announcements;
      viewedQuizzes = quizzes;
    }

    //Three blocks main styles
    const examsDeclarationStyle = {
      width: "100%",
      height: "100%",
      boxShadow: "rgba(0, 1, 0, 0.75) 1px 6px 18px -3px"
    };

    const announcementsDeclarationStyle = {
      width: this.props.deviceWidth < devicesSizes.large ? "100%" : "73%",
      height: "85%",
      boxShadow: "rgba(0, 1, 0, 0.75) 1px 6px 18px -3px"
    };

    const dueDeclarationStyle = {
      width: this.props.deviceWidth < devicesSizes.large ? "100%" : "25%",
      height: "100%",
      marginTop: this.props.deviceWidth < devicesSizes.large ? "25px" : 0,
      boxShadow: "rgba(0, 1, 0, 0.75) 1px 6px 18px -3px"
    };

    return (
      <div className="Dashboard">
        <Header />
        <div className="Dashboard__HeadingMobile">
          Welcome {this.props.username},
        </div>
        <div className="Dashboard__ExamsDeclarationContainer">
          <ExamsDeclaration style={examsDeclarationStyle} />
        </div>
        <div className="Dashboard__SecondRowContainer">
          <AnnouncementsDeclaration
            announcements={viewedAnnouncements}
            style={announcementsDeclarationStyle}
          />
          <DueDeclaration quizzes={viewedQuizzes} style={dueDeclarationStyle} />
        </div>
      </div>
    );
  }
}

//Adding sizes
const mapSizesToProps = ({ width }) => ({
  deviceWidth: width
});

const DashboardWithSizes = withSizes(mapSizesToProps)(Dashboard);

//Redux
const mapStateToProps = state => {
  return {
    username: state.auth.username,
    announcements: state.api.announcements,
    quizzes: state.api.quizzes,
    useFakeServices: state.api.useFakeServices
  };
};

const mapDispatchToProps = {
  getAnnouncements: apiActions.getAnnouncements,
  getQuizzes: apiActions.getQuizzes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardWithSizes);
