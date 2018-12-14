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
      <Card style={this.props.style}>
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
            ? this.props.announcements.map((announcement, i) => (
                <div key={announcement.name + announcement.image}>
                  <AnnouncementsDeclarationItem
                    name={announcement.name}
                    subject={announcement.subject}
                    image={announcement.image}
                    announcement={announcement.announcement}
                  />
                  {i !== this.props.announcements.length - 1 ? (
                    <hr className="AnnouncementsDeclaration__ItemsSeparator" />
                  ) : null}
                </div>
              ))
            : null}

          {noAnnouncementsMessage}
        </div>
      </Card>
    );
  }
}

export default AnnouncementsDeclaration;
