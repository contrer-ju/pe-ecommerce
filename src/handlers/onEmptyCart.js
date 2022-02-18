export default function onEmptyCart(
  shopingCart,
  setAShopingCart,
  searchResult,
  setASearchResult,
  stock,
  updateStock
) {
  const aSearchResult = JSON.parse(JSON.stringify(searchResult));
  const inventory = JSON.parse(JSON.stringify(stock));
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));

  for (let i = 0; i < aShopingCart.length; i++) {
    const itemIndexOnSearchResult = aSearchResult.findIndex(
      (item) => item.id === aShopingCart[i].id
    );
    const itemIndexOnInventory = inventory.findIndex(
      (item) => item.id === aShopingCart[i].id
    );

    if (itemIndexOnSearchResult !== -1) {
      aSearchResult[itemIndexOnSearchResult].initStock =
        aSearchResult[itemIndexOnSearchResult].initStock +
        aShopingCart[i].qtySelected;
      aSearchResult[itemIndexOnSearchResult].qtyStock =
        aSearchResult[itemIndexOnSearchResult].qtyStock +
        aShopingCart[i].qtySelected;
    }

    if (itemIndexOnInventory !== -1)
      inventory[itemIndexOnInventory].stock =
        inventory[itemIndexOnInventory].stock + aShopingCart[i].qtySelected;
  }

  setAShopingCart([]);
  setASearchResult(aSearchResult);
  updateStock(inventory);
}
