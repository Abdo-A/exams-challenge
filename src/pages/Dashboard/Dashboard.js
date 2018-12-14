import React, { Component } from "react";

import announcements from "../../api/fakeAnnouncmentService";
import AnnouncementsDeclaration from "../../components/Dashboard/AnnouncementsDeclaration/AnnouncementsDeclaration";
import DueDeclaration from "../../components/Dashboard/DueDeclaration/DueDeclaration";
import ExamsDeclaration from "../../components/Dashboard/ExamsDeclaration/ExamsDeclaration";
import Header from "../../components/PageTop/Header/Header";
import quizzes from "../../api/fakeQuizesService";

import "./Dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Header />
        <div className="Dashboard__ExamsDeclarationContainer">
          <ExamsDeclaration />
        </div>
        <div className="Dashboard__SecondRowContainer">
          <AnnouncementsDeclaration announcements={announcements} />
          <DueDeclaration quizzes={quizzes} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
