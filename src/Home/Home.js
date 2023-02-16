import FirstSection from "./FirstSection";

export default function Home(props) {
  if (props.navbarClass === "header2") {
    props.setNavbarClass("header3");
  }
  return (
    <div className="Home">
      <FirstSection />
    </div>
  );
}
