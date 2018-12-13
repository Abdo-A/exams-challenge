import React, { Component } from "react";
import "./Dashboard.scss";
import Header from "../../components/PageTop/Header/Header";
import { Card } from "semantic-ui-react";
import ExamsDeclaration from "../../components/Dashboard/ExamsDeclaration/ExamsDeclaration";
import AnnouncementsDeclaration from "../../components/Dashboard/AnnouncementsDeclaration/AnnouncementsDeclaration";
import DueDeclaration from "../../components/Dashboard/DueDeclaration/DueDeclaration";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Header />
        <div className="Dashboard__ExamsDeclarationContainer">
          <ExamsDeclaration />
        </div>
        <div className="Dashboard__SecondRowContainer">
          <AnnouncementsDeclaration />
          <DueDeclaration />
        </div>
      </div>
    );
  }
}

export default Dashboard;
