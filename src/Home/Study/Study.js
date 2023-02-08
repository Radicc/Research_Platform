import "./Study.scss";
import { useState } from "react";

export default function Study() {
  const [menuRotation, setMenuRotation] = useState("rotation");
  const [Content, setContent] = useState("contentNone");
  const containerSection = "containerSection selected";
  const containerSectionNone = "containerSectionNone";

  const defaultMenu = {
    Books: "containerSection",
    Youtube: "containerSection",
    Websites: "containerSection",
    ContentBooks: "contentNone",
    ContentYoutube: "contentNone",
    ContentWebsites: "contentNone",
  };
  const [menuScale, setMenutScale] = useState(defaultMenu);

  const handleClick = (e) => {
    const number = e.target.value;

    if (Content != "content1") {
      setContent("content1");
    }

    if (number === "1") {
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
    } else if (number === "2") {
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
    } else {
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
    }
  };
  return (
    <div className="Study">
      <div className={menuRotation}>
        <button value={1} onClick={handleClick} className={menuScale.Books}>
          Books
        </button>
        <button value="2" onClick={handleClick} className={menuScale.Youtube}>
          Youtube Channels
        </button>
        <button value="3" onClick={handleClick} className={menuScale.Websites}>
          Websites
        </button>
      </div>
      <div className={Content}>
        <div className={menuScale.ContentBooks}>Books</div>
        <div className={menuScale.ContentYoutube}>Youtube</div>
        <div className={menuScale.ContentWebsites}>Websites</div>
      </div>
    </div>
  );
}
