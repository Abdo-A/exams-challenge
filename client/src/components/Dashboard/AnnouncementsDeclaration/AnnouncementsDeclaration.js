import { Card } from "semantic-ui-react";
import React, { Component } from "react";

import "./AnnouncementsDeclaration.scss";
import AnnouncementsDeclarationItem from "./AnnouncementsDeclarationItem/AnnouncementsDeclarationItem";

class AnnouncementsDeclaration extends Component {
  render() {
    let noAnnouncementsMessage = null;

    if (!this.props.announcements || this.props.announcements.length <= 0) {
      noAnnouncementsMessage = <h1>No announcements to show now :)</h1>;
    }

    return (
      <Card
        style={{
          width: "73%",
          height: "85%",
          boxShadow: "rgba(0, 1, 0, 0.75) 1px 6px 18px -3px"
        }}
      >
        <div className="AnnouncementsDeclaration__ContentContainer">
          <div className="AnnouncementsDeclaration__Header">
            <div className="AnnouncementsDeclaration__Header__Left">
              <p className="AnnouncementsDeclaration__Header__Heading">
                Announcements
              </p>
            </div>

            <div className="AnnouncementsDeclaration__Header__Right">All</div>
          </div>

          <p className="AnnouncementsDeclaration__Subheader">
            We educate warriors! Keep updated
          </p>

          {this.props.announcements
            ? this.props.announcements.map(announcement => (
                <AnnouncementsDeclarationItem
                  name={announcement.name}
                  subject={announcement.subject}
                  image={announcement.image}
                  announcement={announcement.announcement}
                />
              ))
            : null}

          {noAnnouncementsMessage}
        </div>
      </Card>
    );
  }
}

export default AnnouncementsDeclaration;
