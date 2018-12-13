import React, { Component } from "react";
import "./Dashboard.scss";
import Header from "../../components/PageTop/Header/Header";
import { Card } from "semantic-ui-react";
import ExamsDeclaration from "../../components/Dashboard/ExamsDeclaration/ExamsDeclaration";
import AnnouncementsDeclaration from "../../components/Dashboard/AnnouncementsDeclaration/AnnouncementsDeclaration";
import DueDeclaration from "../../components/Dashboard/DueDeclaration/DueDeclaration";
import announcements from "../../data/announcements";
import quizzes from "../../data/quizzes";

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
