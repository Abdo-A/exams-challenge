import React from "react";
import "./AnnouncementsDeclarationItem.scss";

const AnnouncementsDeclarationItem = props => {
  return (
    <div className="AnnouncementsDeclarationItem">
      <div className="AnnouncementsDeclarationItem__Left">
        <img
          className="AnnouncementsDeclarationItem__Picture"
          src={props.image}
        />
        <div className="AnnouncementsDeclarationItem__TeacherInfoContainer">
          <p className="AnnouncementsDeclarationItem__TeacherName">
            {props.name}
          </p>
          <p className="AnnouncementsDeclarationItem__TeacherSubject">
            {props.subject}
          </p>
        </div>
      </div>
      <div className="AnnouncementsDeclarationItem__Right">
        {props.announcement}
      </div>
    </div>
  );
};

export default AnnouncementsDeclarationItem;
