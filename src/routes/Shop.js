import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { covers_API_URL, suffix_covers_API_URL } from "../constants/baseURL";
import spinner from "../img/spinner.gif";
import noImage from "../img/no-image.png";
import networkError from "../img/unplugged.png";
import "../Styles.css";

export default function Shop({
  searchResult,
  setASearchResult,
  isLoading,
  apiErrorStatus,
  timeLoading,
  setAProductToShow,
  onAddToCart,
  onSelectedItem,
  onClearSelectedItem,
  shopingCart,
  setAShopingCart,
  setAProductInitStock,
}) {
  const navigate = useNavigate();
  const goToProductLink = useCallback(() => navigate("/product"), [navigate]);

  return (
    <>
      {!apiErrorStatus && (
        <div className="marginTop">
          <div className="flexColumnRowSpaceBetween">
            <h2 className="paddingTopRightBottomLeft3">Result Search:</h2>
            {isLoading && (
              <img
                className="spinnerSize paddingTopRightBottomLeft5"
                src={spinner}
                alt="Spinnet"
              />
            )}
            {!isLoading && (
              <h3 className="paddingTopRightBottomLeft4">
                {searchResult.length} results in {timeLoading}s
              </h3>
            )}
          </div>
          <div className="mainLayout flexRowSpaceAround2">
            {searchResult.map((element) => (
              <div
                className="bottomLine paddingTop boxLayout flexRowFlexStart"
                key={element.id}
              >
                <div>
                  <img
                    className="coverBook cursorPointer"
                    src={
                      element.id[0] !== "U"
                        ? covers_API_URL + element.id + suffix_covers_API_URL
                        : noImage
                    }
                    alt="Book Cover"
                    onClick={() => {
                      setAProductToShow({
                        author_name: element.author_name,
                        title: element.title,
                        id: element.id,
                        publish_year: element.publish_year,
                        publisher: element.publisher,
                        isbn: element.isbn,
                        subject: element.subject,
                        price: element.price,
                      });
                      setAProductInitStock(element.initStock);
                      onClearSelectedItem(searchResult, setASearchResult);
                      goToProductLink();
                    }}
                  />
                </div>
                <div className="subBoxLayout">
                  <h3 className="textBold  marginBottom1">{element.title}</h3>
                  <h3 className="textNormal  marginBottom2">
                    {element.author_name}
                  </h3>
                  <div className="gridRowSpaceAround">
                    <span className="gridRowSpaceAroundLeftElement paddingTopRightBottomLeft">
                      Price: {element.price}
                    </span>
                    <span
                      className={
                        element.initStock !== 0
                          ? "gridRowSpaceAroundCenterElement paddingTopRightBottomLeft greenText"
                          : "gridRowSpaceAroundCenterElement paddingTopRightBottomLeft redText"
                      }
                    >
                      {element.initStock !== 0 ? "In Stock" : "Unavailable"}
                    </span>
                    <span className="gridRowSpaceAroundRightElement paddingTopRightBottomLeft">
                      <select
                        value={element.qtySelected}
                        onChange={(event) =>
                          onSelectedItem(
                            event.target.value,
                            element.id,
                            searchResult,
                            setASearchResult
                          )
                        }
                      >
                        {Array.from(
                          { length: element.initStock + 1 },
                          (_, i) => i
                        ).map((value, index) => (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() =>
                          onAddToCart(
                            element,
                            searchResult,
                            setASearchResult,
                            shopingCart,
                            setAShopingCart
                          )
                        }
                      >
                        Add to cart
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {apiErrorStatus && (
        <div className="marginTop flexRowCenter">
          <div className="screenLayout flexColumnRowCenter">
            <div>
              <img
                className="errorImage"
                src={networkError}
                alt="Network Error"
              />
            </div>
            <div className="textLayout textCenter">
              <h2>Looks like something went wrong.</h2>
              <h3>
                Please try again later, if the problem persists please inform
                the administrator.
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
