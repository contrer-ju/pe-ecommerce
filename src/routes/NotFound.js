import error404 from "../img/error404.png";
import "../Styles.css";

export default function NotFound() {
  return (
    <div className="marginTop flexRowCenter">
      <div className="screenLayout flexColumnRowCenter">
        <div>
          <img className="errorImage" src={error404} alt="Error404" />
        </div>
        <div className="textLayout textCenter">
          <h2>Something's missing.</h2>
          <h3>This page is missing or your assembled the link incorrectly</h3>
        </div>
      </div>
    </div>
  );
}
