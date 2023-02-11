import "./Study.scss";
import { useState, useRef } from "react";
import Books from "./Books";

export default function Study() {
  const [menuRotation, setMenuRotation] = useState("rotation");
  const [levelRotation, setLevelRotation] = useState("rotationLevelContainer");
  const [Content, setContent] = useState("contentNone");

  const [propRef, setPropRef] = useState("");
  const [contentBookFast, setContentBookFast] = useState("BookSection");
  const contentDefault = "contentNone";

  const containerSection = "containerSection selected";
  const containerSectionNone = "containerSectionNone";

  const levelContainer = "levelContainer selected";
  const levelContainerNone = "levelContainerNone";

  const defaultMenu = {
    Books: "containerSection",
    Youtube: "containerSection",
    Websites: "containerSection",
    ContentBooks: "contentNone",
    ContentYoutube: "contentNone",
    ContentWebsites: "contentNone",

    Beginner: "levelContainer", // Beginner Button Books
    BeginnerElements: contentDefault, // Beginner Content

    Intermediate: "levelContainer", // Intermediate Button Books
    IntermediateElements: contentDefault,

    Advanced: "levelContainer", // Advanced Button Books
    AdvancedElements: contentDefault,
  };
  const [menuScale, setMenutScale] = useState(defaultMenu);

  const handleClickLevel = (e) => {
    const number = e.target.value;

    setPropRef(Number(number));

    if (levelRotation != "rotationLevelContainerRotation") {
      setLevelRotation("rotationLevelContainerRotation");
    }
    if (Content != "content2") {
      setContent("content2");
    }
    if (contentBookFast === "BookSection") {
      setContentBookFast("BookSectionFast");
    }
    if (number === "1") {
      setMenutScale((prev) => ({
        ...prev,
        Beginner: levelContainer,
        Intermediate: levelContainerNone,
        Advanced: levelContainerNone,
        BeginnerElements: contentBookFast,
        IntermediateElements: contentDefault,
        AdvancedElements: contentDefault,
      }));
    } else if (number === "2") {
      setMenutScale((prev) => ({
        ...prev,
        Beginner: levelContainerNone,
        Intermediate: levelContainer,
        Advanced: levelContainerNone,
        BeginnerElements: contentDefault,
        IntermediateElements: contentBookFast,
        AdvancedElements: contentDefault,
      }));
    } else {
      setMenutScale((prev) => ({
        ...prev,
        Beginner: levelContainerNone,
        Intermediate: levelContainerNone,
        Advanced: levelContainer,
        BeginnerElements: "contentNone",
        IntermediateElements: "contentNone",
        AdvancedElements: contentBookFast,
      }));
    }
  };

  const handleClick1 = () => {
    if (Content != "content1" && Content != "content2") {
      setContent("content1");
    } else {
      setContent("content1_1");
    }
    if (menuScale.Beginner === levelContainer) {
      setContent("content2");
    }
    setMenuRotation("rotation2");
    setMenutScale((prev) => ({
      ...prev,
      Books: containerSection,
      Youtube: containerSectionNone,
      Websites: containerSectionNone,
      ContentBooks: "contentBooks",
      ContentYoutube: "contentNone",
      ContentWebsites: "contentNone",
    }));
  };
  const handleClick2 = () => {
    if (Content != "content1" && Content != "content2") {
      setContent("content1");
    }
    if (
      menuScale.Books === containerSection ||
      menuScale.Websites === containerSection
    ) {
      setContent("contentFast");
    }

    setMenuRotation("rotation2");
    setMenutScale((prev) => ({
      ...prev,
      Books: containerSectionNone,
      Youtube: containerSection,
      Websites: containerSectionNone,
      ContentBooks: "contentNone",
      ContentYoutube: "contentYoutube",
      ContentWebsites: "contentNone",
    }));
  };
  const handleClick3 = () => {
    if (Content != "content1" && Content != "content2") {
      setContent("content1");
    }
    if (
      menuScale.Books === containerSection ||
      menuScale.Youtube === containerSection
    ) {
      setContent("contentFast");
    }
    setMenuRotation("rotation2");
    setMenutScale((prev) => ({
      ...prev,
      Books: containerSectionNone,
      Youtube: containerSectionNone,
      Websites: containerSection,
      ContentBooks: "contentNone",
      ContentYoutube: "contentNone",
      ContentWebsites: "contentWebsites",
    }));
  };

  return (
    <div className="Study">
      <div className={menuRotation}>
        <button value="1" onClick={handleClick1} className={menuScale.Books}>
          Books
        </button>
        <button value="2" onClick={handleClick2} className={menuScale.Youtube}>
          Youtube Channels
        </button>
        <button value="3" onClick={handleClick3} className={menuScale.Websites}>
          Websites
        </button>
      </div>
      <div className={Content}>
        <div className={menuScale.ContentBooks}>
          <div className={levelRotation}>
            <button
              value="1"
              onClick={handleClickLevel}
              className={menuScale.Beginner}
            >
              Beginner
            </button>
            <button
              value="2"
              onClick={handleClickLevel}
              className={menuScale.Intermediate}
            >
              Intermediate
            </button>
            <button
              value="3"
              onClick={handleClickLevel}
              className={menuScale.Advanced}
            >
              Advanced
            </button>
          </div>
          <div className={menuScale.BeginnerElements}>
            <Books props={propRef} />
          </div>
          <div className={menuScale.IntermediateElements}>
            <Books props={propRef} />
          </div>
          <div className={menuScale.AdvancedElements}>
            <Books props={propRef} />
          </div>
        </div>
        <div className={menuScale.ContentYoutube}>Youtube</div>
        <div className={menuScale.ContentWebsites}>Websites</div>
      </div>
    </div>
  );
}
