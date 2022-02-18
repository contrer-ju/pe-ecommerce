export default function onIncrementItemOnCart(
  itemId,
  shopingCart,
  setAShopingCart,
  searchResult,
  setASearchResult,
  stock,
  updateStock,
  setAUpperLimitItemInStock
) {
  const aSearchResult = JSON.parse(JSON.stringify(searchResult));
  const inventory = JSON.parse(JSON.stringify(stock));
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));

  const itemIndexOnSearchResult = aSearchResult.findIndex(
    (item) => item.id === itemId
  );
  const itemIndexOnInventory = inventory.findIndex(
    (item) => item.id === itemId
  );

  for (let i = 0; i < aShopingCart.length; i++) {
    if (aShopingCart[i].id === itemId) {
      if (inventory[itemIndexOnInventory].stock > 0) {
        aShopingCart[i].qtySelected += 1;
        inventory[itemIndexOnInventory].stock -= 1;
        aSearchResult[itemIndexOnSearchResult].initStock -= 1;
        aSearchResult[itemIndexOnSearchResult].qtyStock -= 1;
        setASearchResult(aSearchResult);
        setAShopingCart(aShopingCart);
        updateStock(inventory);
        break;
      } else {
        aShopingCart[i].showTooltip = true;
        setAShopingCart(aShopingCart);
        setAUpperLimitItemInStock(true);
        break;
      }
    }
  }
}
