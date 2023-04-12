import "./Study.scss";
import { useState } from "react";
import Books from "./Books/Books.tsx";
import Youtubers from "./Youtube/YoutubeGrid.tsx";
import Websites from "./WebSites/WebSites.tsx";
import BackSVG from "../images/backSVG.svg";

export default function Study(props) {
  const [menuRotation, setMenuRotation] = useState("rotation");
  const [levelRotation, setLevelRotation] = useState("rotationLevelContainer");

  const [Content, setContent] = useState("displayNone");
  const [propRef, setPropRef] = useState("");

  const contentBookDefault = "BookSection";
  const contentBookFast = "BookSectionFast";
  const displayNone = "displayNone"; /// DISPLAY NONE -> UI

  const containerDefault = "containerSection"; //// DEFAULT STUDY BUTTON -> UI
  const containerSection = "containerSection selected"; //// SELECTED STUDY BUTTON -> UI
  const containerSectionNone = "containerSectionNone"; //// NOT SELECTED STUDY BUTTON -> UI

  const levelContainerDefault = "levelContainer"; //// DEFAULT LEVEL BUTTON -> UI
  const levelContainer = "levelContainer selected"; //// SELECTED LEVEL BUTTON -> UI
  const levelContainerNone = "levelContainerNone"; //// NOT SELECTED LEVEL BUTTON -> UI

  const defaultLevelMenu = {
    ContentBook: contentBookDefault,

    Beginner: levelContainerDefault, // Beginner Button Books
    BeginnerElements: displayNone, // Beginner Content

    Intermediate: levelContainerDefault, // Intermediate Button Books
    IntermediateElements: displayNone,

    Advanced: levelContainerDefault, // Advanced Button Books
    AdvancedElements: displayNone,
  };
  const [levelMenu, setLevelMenu] = useState(defaultLevelMenu);

  const defaultMenu = {
    BackSVG: "backSVGHidden",

    Books: containerDefault,
    Youtube: containerDefault,
    Websites: containerDefault,

    ContentBooks: displayNone,
    ContentYoutube: displayNone,
    ContentWebsites: displayNone,
  };
  const [menuScale, setMenutScale] = useState(defaultMenu);

  //////////////// BEGINNER, INTERMEDIATE, ADVANCED ////////////////

  const handleClickLevel = (e) => {
    const number = e.target.value;

    setPropRef(Number(number));

    if (levelRotation !== "rotationLevelContainerRotation") {
      setLevelRotation("rotationLevelContainerRotation");
    }
    if (Content === "content1" || Content === "content1_1") {
      setContent("content2");
      setLevelMenu({ ContentBook: contentBookFast });
    }
    if (number === "1") {
      setLevelMenu((prev) => ({
        ...prev,
        Beginner: levelContainer,
        Intermediate: levelContainerNone,
        Advanced: levelContainerNone,
        BeginnerElements: levelMenu.ContentBook,
        IntermediateElements: displayNone,
        AdvancedElements: displayNone,
      }));
    } else if (number === "2") {
      setLevelMenu((prev) => ({
        ...prev,
        Beginner: levelContainerNone,
        Intermediate: levelContainer,
        Advanced: levelContainerNone,
        BeginnerElements: displayNone,
        IntermediateElements: levelMenu.ContentBook,
        AdvancedElements: displayNone,
      }));
    } else {
      setLevelMenu((prev) => ({
        ...prev,
        Beginner: levelContainerNone,
        Intermediate: levelContainerNone,
        Advanced: levelContainer,
        BeginnerElements: displayNone,
        IntermediateElements: displayNone,
        AdvancedElements: levelMenu.ContentBook,
      }));
    }
  };
  //////////////// BEGINNER, INTERMEDIATE, ADVANCED ////////////////

  //////////////// BOOKS, YOUTUBE, WEBSITES ////////////////////////
  //////////////////// BOOKS ////////////////////////
  const handleClick1 = () => {
    if (menuRotation !== "rotation") {
      props.setNavbarClass("header3");
    }

    if (Content !== "content1" && Content !== "content2") {
      setContent("content1");
    }
    if (levelMenu.Beginner === levelContainer) {
      setContent("content2");
    }
    setMenuRotation("rotation2");
    setMenutScale((prev) => ({
      ...prev,
      BackSVG: "backSVG",
      Books: containerSection,
      Youtube: containerSectionNone,
      Websites: containerSectionNone,
      ContentBooks: "contentBooks",
      ContentYoutube: displayNone,
      ContentWebsites: displayNone,
    }));
  };
  //////////////////// BOOKS ////////////////////////

  //////////////////// YOUTUBE ////////////////////////
  const handleClick2 = () => {
    props.setNavbarClass("header2");

    if (Content !== "content1" && Content !== "content2") {
      setContent("content1");
    }
    if (Content === "content2") {
      setContent("content1_1");
    }
    if (menuScale.Websites === containerSection) {
      setContent("contentFast");
    }

    setMenuRotation("rotation2");
    setMenutScale((prev) => ({
      ...prev,
      BackSVG: "backSVG",
      Books: containerSectionNone,
      Youtube: containerSection,
      Websites: containerSectionNone,
      ContentBooks: displayNone,
      ContentYoutube: "contentYoutube",
      ContentWebsites: displayNone,
    }));
    setLevelMenu(defaultLevelMenu);
    if (levelRotation === "rotationLevelContainerRotation") {
      setLevelRotation("rotationLevelContainer");
    }
  };
  //////////////////// YOUTUBE ////////////////////////

  //////////////////// WEBSITES ////////////////////////
  const handleClick3 = () => {
    props.setNavbarClass("header2");
    if (Content !== "content1" && Content !== "content2") {
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
      BackSVG: "backSVG",
      Books: containerSectionNone,
      Youtube: containerSectionNone,
      Websites: containerSection,
      ContentBooks: displayNone,
      ContentYoutube: displayNone,
      ContentWebsites: "contentWebsites",
    }));
    setLevelMenu(defaultLevelMenu);
    if (levelRotation === "rotationLevelContainerRotation") {
      setLevelRotation("rotationLevelContainer");
    }
  };
  //////////////////// WEBSITES ////////////////////////

  //////////////// BOOKS, YOUTUBE, WEBSITES ////////////////////////
  const handleBackButton = () => {
    setContent(displayNone);
    setMenuRotation("rotation");
    setMenutScale((prev) => ({
      ...prev,
      BackSVG: "backSVGHidden",
      Books: containerDefault,
      Youtube: containerDefault,
      Websites: containerDefault,
      ContentBooks: displayNone,
      ContentYoutube: displayNone,
      ContentWebsites: displayNone,
    }));
  };
  return (
    <div className="Study">
      <img
        className={menuScale.BackSVG}
        src={BackSVG}
        onClick={handleBackButton}
        alt="img"
      />
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
              className={levelMenu.Beginner}
            >
              Beginner
            </button>
            <button
              value="2"
              onClick={handleClickLevel}
              className={levelMenu.Intermediate}
            >
              Intermediate
            </button>
            <button
              value="3"
              onClick={handleClickLevel}
              className={levelMenu.Advanced}
            >
              Advanced
            </button>
          </div>

          <div className={levelMenu.BeginnerElements}>
            <Books difficult={propRef} />
          </div>
          <div className={levelMenu.IntermediateElements}>
            <Books difficult={propRef} />
          </div>
          <div className={levelMenu.AdvancedElements}>
            <Books difficult={propRef} />
          </div>
        </div>
        <div className={menuScale.ContentYoutube}>
          <Youtubers />
        </div>
        <div className={menuScale.ContentWebsites}>
          <Websites />
        </div>
      </div>
    </div>
  );
}
