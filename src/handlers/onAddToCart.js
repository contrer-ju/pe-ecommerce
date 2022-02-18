export default function onAddToCart(
  selectedItem,
  searchResult,
  setASearchResult,
  shopingCart,
  setAShopingCart,
  setAProductInitStock,
  setAProductQtySelected,
  stock,
  updateStock
) {
  if (selectedItem.qtySelected !== 0) {
    const newShopingCart = JSON.parse(JSON.stringify(shopingCart));
    const aSearchResult = JSON.parse(JSON.stringify(searchResult));
    const inventory = JSON.parse(JSON.stringify(stock));

    if (
      newShopingCart.find((item) => item.id === selectedItem.id) === undefined
    ) {
      newShopingCart.push({
        author_name: selectedItem.author_name,
        title: selectedItem.title,
        id: selectedItem.id,
        price: selectedItem.price,
        qtySelected: selectedItem.qtySelected,
        showTooltip: false,
      });
    } else {
      for (let i = 0; i < newShopingCart.length; i++) {
        if (newShopingCart[i].id === selectedItem.id)
          newShopingCart[i].qtySelected += selectedItem.qtySelected;
      }
    }
    setAShopingCart(newShopingCart);

    const itemIndexOnSearchResult = aSearchResult.findIndex(
      (item) => item.id === selectedItem.id
    );

    setAProductInitStock(aSearchResult[itemIndexOnSearchResult].qtyStock);
    setAProductQtySelected(0);
    aSearchResult[itemIndexOnSearchResult].initStock =
      aSearchResult[itemIndexOnSearchResult].qtyStock;
    aSearchResult[itemIndexOnSearchResult].qtySelected = 0;
    setASearchResult(aSearchResult);

    const itemIndexOnInventory = inventory.findIndex(
      (item) => item.id === selectedItem.id
    );

    inventory[itemIndexOnInventory].stock =
      aSearchResult[itemIndexOnSearchResult].qtyStock;
    updateStock(inventory);
  }
}
