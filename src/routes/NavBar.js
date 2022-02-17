import { useCallback } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../img/test-logo-50.png";
import shop from "../img/store-30.png";
import cartEmpty from "../img/shopping-cart-empty-30.png";
import cartFill from "../img/shopping-cart-fill-30.png";
import "../Styles.css";

export default function NavBar({
  phraseSearch,
  setAPhraseSearch,
  clearAPhraseSearch,
  onGettingData,
  onMappingData,
  isLoading,
  setTrueIsLoading,
  setFalseIsLoading,
  searchResult,
  setASearchResult,
  setATimeLoading,
  setAProductToShow,
  setAProductInitStock,
  setAProductQtySelected,
  onClearSelectedItem,
  isShopingCartEmpty,
  setAnApiErrorStatus,
  setAnApiErrorMessage,
}) {
  const navigate = useNavigate();
  const goToShopLink = useCallback(() => navigate("/shop"), [navigate]);

  return (
    <div className="stickyPosition">
      <nav className="bottomLine gridRowSpaceBetween">
        <div className="gridRowSpaceBetweenLeftElement">
          <Link
            className="flexRowFlexStart level1Title noneDecorationLink paddingRightLeft1"
            onClick={() => {
              setAPhraseSearch("Find Your Book Here");
              setASearchResult([]);
              setATimeLoading(0);
              setAProductToShow({});
              setAProductInitStock(0);
              setAProductQtySelected(0);
              setAnApiErrorStatus(false);
              setAnApiErrorMessage(null);
            }}
            to="/"
          >
            <img className="paddingRightLeft1" src={logo} alt="logo" />
            Test Store
          </Link>
        </div>
        <div className="gridRowSpaceBetweenCenterElement">
          <input
            type="text"
            className="inputBox"
            value={phraseSearch}
            onClick={() => clearAPhraseSearch()}
            onChange={(event) => setAPhraseSearch(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setASearchResult([]);
                setATimeLoading(0);
                setAProductToShow({});
                setAProductInitStock(0);
                setAProductQtySelected(0);
                setAnApiErrorStatus(false);
                onGettingData(
                  onMappingData,
                  setTrueIsLoading,
                  setFalseIsLoading,
                  setASearchResult,
                  phraseSearch,
                  setATimeLoading,
                  setAnApiErrorStatus,
                  setAnApiErrorMessage
                );
                goToShopLink();
              }
            }}
          />
          <button
            className="paddingTopRightBottomLeft2"
            disabled={isLoading}
            onClick={() => {
              setASearchResult([]);
              setATimeLoading(0);
              setAProductToShow({});
              setAProductInitStock(0);
              setAProductQtySelected(0);
              setAnApiErrorStatus(false);
              onGettingData(
                onMappingData,
                setTrueIsLoading,
                setFalseIsLoading,
                setASearchResult,
                phraseSearch,
                setATimeLoading,
                setAnApiErrorStatus,
                setAnApiErrorMessage
              );
              goToShopLink();
            }}
          >
            {isLoading ? "Loading" : "Search"}
          </button>
        </div>
        <div className="gridRowSpaceBetweenRightElement">
          <Link
            className="paddingRightLeft1"
            to="/shop"
            onClick={() => {
              setAProductToShow({});
              setAProductInitStock(0);
              setAProductQtySelected(0);
              onClearSelectedItem(searchResult, setASearchResult);
            }}
          >
            <img className="paddingRightLeft1" src={shop} alt="logo" />
          </Link>
          <Link
            className="paddingRightLeft1"
            to="/cart"
            onClick={() => {
              setAProductToShow({});
              setAProductInitStock(0);
              setAProductQtySelected(0);
              onClearSelectedItem(searchResult, setASearchResult);
            }}
          >
            <img
              className="paddingRightLeft1"
              src={isShopingCartEmpty ? cartEmpty : cartFill}
              alt="logo"
            />
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
