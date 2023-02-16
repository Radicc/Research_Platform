import "./FavoriteStocks.scss";

export default function FavoriteStocks(props) {
  if (props.navbarClass === "header2") {
    props.setNavbarClass("header3");
  }
  return (
    <div className="FavoriteStocks">
      <h1>FavoriteStocks</h1>
    </div>
  );
}
