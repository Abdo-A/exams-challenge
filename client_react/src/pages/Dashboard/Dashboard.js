import { connect } from "react-redux";
import React, { Component } from "react";

import * as apiActions from "../../store/actions/apiActions";
import announcements from "../../api/fakeAnnouncmentService";
import AnnouncementsDeclaration from "../../components/Dashboard/AnnouncementsDeclaration/AnnouncementsDeclaration";
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
    let fetchedAnnouncements = this.props.announcements;
    let fetchedQuizzes = this.props.quizzes;

    if (this.props.useFakeServices) {
      fetchedAnnouncements = announcements;
      fetchedQuizzes = quizzes;
    }

    return (
      <div className="Dashboard">
        <Header />
        <div className="Dashboard__ExamsDeclarationContainer">
          <ExamsDeclaration />
        </div>
        <div className="Dashboard__SecondRowContainer">
          <AnnouncementsDeclaration announcements={fetchedAnnouncements} />
          <DueDeclaration quizzes={fetchedQuizzes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
)(Dashboard);
