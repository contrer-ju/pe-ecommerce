import logo from "../img/test-logo-50.png";
import shop from "../img/store-50.png";
import cart from "../img/shopping-cart-empty-50.png";
import "../Styles.css";

export default function Home() {
  return (
    <div className="marginTop">
      <h2 className="paddingTopRightBottomLeft">Instructions for Use:</h2>
      <div className="mainLayout">
        <h3>
          Please select from the following icons to navigate between sections of
          the page.
        </h3>
        <div className="flexRowFlexStart">
          <img className="paddingTopRightBottomLeft" src={logo} alt="logo" />
          <span className="textBold">HOME</span>
        </div>
        <div className="flexRowFlexStart">
          <img className="paddingTopRightBottomLeft" src={shop} alt="logo" />
          <span className="textBold">STORE</span>
        </div>
        <div className="flexRowFlexStart">
          <img className="paddingTopRightBottomLeft" src={cart} alt="logo" />
          <span className="textBold">SHOPPING CART</span>
        </div>
      </div>
    </div>
  );
}
