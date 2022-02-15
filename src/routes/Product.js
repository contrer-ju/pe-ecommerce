import { covers_API_URL, suffix_covers_API_URL } from "../constants/baseURL";
import noImage from "../img/no-image.png";
import "../Styles.css";

export default function Product({
  productInitStock,
  setAProductInitStock,
  productToShow,
  productQtySelected,
  setAProductQtySelected,
  searchResult,
  setASearchResult,
  onSelectedItem,
  shopingCart,
  setAShopingCart,
  onAddToCart,
}) {
  return (
    <div className="marginTop">
      <h2 className="paddingTopRightBottomLeft">Chosen Book</h2>
      <div className="bottomLine paddingTop mainLayout flexColumnRowFlexStart">
        <div>
          <img
            className=""
            src={
              productToShow.id[0] !== "U"
                ? covers_API_URL + productToShow.id + suffix_covers_API_URL
                : noImage
            }
            alt="Book Cover"
          />
        </div>
        <div className="boxLayout">
          <h3 className="textNormal marginBottom1">
            <span className="textBold">Title of the Book: </span>
            {productToShow.title}
          </h3>
          <h3 className="textNormal marginBottom1">
            <span className="textBold">Author Name: </span>
            {productToShow.author_name}
          </h3>
          <h3 className="textNormal marginBottom1">
            <span className="textBold">Publisher: </span>
            {productToShow.publisher}
          </h3>
          <h3 className="textNormal marginBottom1">
            <span className="textBold">First Publish Year: </span>
            {productToShow.publish_year}
          </h3>
          <h3 className="textNormal marginBottom1">
            <span className="textBold">ISBN: </span>
            {productToShow.isbn}
          </h3>
          <h3 className="textNormal marginBottom2">
            <span className="textBold">Subjects: </span>
            {typeof productToShow.subject === "string"
              ? productToShow.subject
              : productToShow.subject.join(", ")}
          </h3>
          <div className="gridRowSpaceAround">
            <h3 className="gridRowSpaceAroundLeftElement paddingTopRightBottomLeft">
              Price: {productToShow.price}
            </h3>
            <h3
              className={
                productInitStock !== 0
                  ? "gridRowSpaceAroundCenterElement paddingTopRightBottomLeft greenText"
                  : "gridRowSpaceAroundCenterElement paddingTopRightBottomLeft redText"
              }
            >
              {productInitStock !== 0 ? "In Stock" : "Unavailable"}
            </h3>
            <span className="gridRowSpaceAroundRightElement paddingTopRightBottomLeft">
              <select
                value={productQtySelected}
                onChange={(event) =>
                  onSelectedItem(
                    event.target.value,
                    productToShow.id,
                    searchResult,
                    setASearchResult,
                    setAProductQtySelected
                  )
                }
              >
                {Array.from({ length: productInitStock + 1 }, (_, i) => i).map(
                  (value, index) => (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  )
                )}
              </select>
              <button
                type="button"
                onClick={() =>
                  onAddToCart(
                    {
                      author_name: productToShow.author_name,
                      title: productToShow.title,
                      id: productToShow.id,
                      price: productToShow.price,
                      qtySelected: productQtySelected,
                    },
                    searchResult,
                    setASearchResult,
                    shopingCart,
                    setAShopingCart,
                    setAProductInitStock,
                    setAProductQtySelected
                  )
                }
              >
                Add to cart
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
