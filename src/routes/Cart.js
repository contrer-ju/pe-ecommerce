import { covers_API_URL, suffix_covers_API_URL } from "../constants/baseURL";
import noImage from "../img/no-image.png";
import plusSign from "../img/add-25.png";
import minusSign from "../img/reduce-25.png";
import trashDark from "../img/trash-dark-25.png";
import trashLight from "../img/trash-light-25.png";
import "../Styles.css";

export default function Cart({
  setAPhraseSearch,
  searchResult,
  setASearchResult,
  setATimeLoading,
  setAProductToShow,
  setAProductInitStock,
  setAProductQtySelected,
  shopingCart,
  setAShopingCart,
  totalShopping,
  onDeleteFromCart,
  onIncrementItemOnCart,
  onDecrementItemOnCart,
  setAUpperLimitItemInStock,
}) {
  return (
    <div className="marginTop">
      <div className="flexRowSpaceBetween">
        <h2 className="paddingTopRightBottomLeft">Shopping Cart</h2>
        <img
          className="paddingRight cursorPointer"
          src={trashDark}
          alt="Empty Item"
          onClick={() => {
            setAPhraseSearch("Find Your Book Here");
            setASearchResult([]);
            setATimeLoading(0);
            setAProductToShow({});
            setAProductInitStock(0);
            setAProductQtySelected(0);
            setAShopingCart([]);
          }}
        />
      </div>
      <div className="mainLayout paddingBottom2">
        <span className="level2Title">Order Summary</span>
      </div>
      <div className="mainLayout flexRowSpaceBetween paddingBottom2">
        <span className="level3Title">Shipping</span>
        <span className="level3Title">FREE</span>
      </div>
      <div className="mainLayout flexRowSpaceBetween paddingBottom2">
        <span className="level3Title">Estimated Sales Tax</span>
        <span className="level3Title">$0.00</span>
      </div>
      <div className="mainLayout flexRowSpaceBetween paddingBottom3">
        <span className="level2Title">TOTAL</span>
        <span className="level2Title">
          $
          {totalShopping > 999 && totalShopping < 100000
            ? totalShopping.substring(0, 1) +
              "," +
              totalShopping.substring(1, totalShopping.length)
            : totalShopping}
        </span>
      </div>
      <div className="mainLayout flexRowFlexEnd paddingBottom1">
        <button type="button">Checkout</button>
      </div>

      {shopingCart.map((element) => (
        <div
          className="mainLayout bottomLine flexRowFlexStart"
          key={element.id}
        >
          <div>
            <img
              className="coverBook"
              src={
                element.id[0] !== "U"
                  ? covers_API_URL + element.id + suffix_covers_API_URL
                  : noImage
              }
              alt="Book Cover"
            />
          </div>
          <div className="subBoxLayout">
            <div className="flexRowSpaceBetween">
              <div>
                <h3 className="textBold  marginBottom2">{element.title}</h3>
                <h3 className="textNormal  marginBottom1">
                  {element.author_name}
                </h3>
              </div>
              <h3>{element.price}</h3>
            </div>
            <div className="flexRowSpaceBetween">
              <div className="flexRowCenter">
                <img
                  className="cursorPointer"
                  src={minusSign}
                  alt="Minus Sign"
                  onClick={() =>
                    onDecrementItemOnCart(
                      element.id,
                      shopingCart,
                      setAShopingCart,
                      searchResult,
                      setASearchResult
                    )
                  }
                />
                <span className="paddingRightLeft2">
                  Qty: {element.qtySelected}
                </span>
                <img
                  className="cursorPointer"
                  src={plusSign}
                  alt="Plus Sign"
                  onClick={() =>
                    onIncrementItemOnCart(
                      element.id,
                      shopingCart,
                      setAShopingCart,
                      searchResult,
                      setASearchResult,
                      setAUpperLimitItemInStock
                    )
                  }
                />
                <span className="paddingRightLeft2"></span>
                <img
                  className="paddingRightLeft2 cursorPointer"
                  src={trashLight}
                  alt="Empty Item"
                  onClick={() =>
                    onDeleteFromCart(element.id, shopingCart, setAShopingCart)
                  }
                />
              </div>
              <span className="level2Title">
                ${""}
                {Number(
                  (
                    element.qtySelected *
                    element.price.substring(1, element.price.length)
                  ).toFixed(2)
                ) > 999 &&
                Number(
                  (
                    element.qtySelected *
                    element.price.substring(1, element.price.length)
                  ).toFixed(2)
                ) < 100000
                  ? (
                      element.qtySelected *
                      element.price.substring(1, element.price.length)
                    )
                      .toFixed(2)
                      .substring(0, 1) +
                    "," +
                    (
                      element.qtySelected *
                      element.price.substring(1, element.price.length)
                    )
                      .toFixed(2)
                      .substring(
                        1,
                        (
                          element.qtySelected *
                          element.price.substring(1, element.price.length)
                        ).toFixed(2).length
                      )
                  : (
                      element.qtySelected *
                      element.price.substring(1, element.price.length)
                    ).toFixed(2)}
              </span>
            </div>
            <div
              className={
                element.showTooltip
                  ? "tooltip_container"
                  : "tooltip_container tooltip_hidden"
              }
            >
              No more items on stock
            </div>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}
