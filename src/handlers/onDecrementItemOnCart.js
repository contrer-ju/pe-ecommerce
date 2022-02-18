export default function onDecrementItemOnCart(
  itemId,
  shopingCart,
  setAShopingCart,
  searchResult,
  setASearchResult,
  stock,
  updateStock,
  setALowerLimitItemInStock,
  setAIdItemToRemoveFromCart
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

  for (let i = 0; i < aShopingCart.length; i++)
    if (aShopingCart[i].id === itemId) {
      if (aShopingCart[i].qtySelected > 0) aShopingCart[i].qtySelected -= 1;
      if (aShopingCart[i].qtySelected === 0) {
        setALowerLimitItemInStock(true);
        setAIdItemToRemoveFromCart(aShopingCart[i].id);
      }
      inventory[itemIndexOnInventory].stock += 1;
      aSearchResult[itemIndexOnSearchResult].initStock += 1;
      aSearchResult[itemIndexOnSearchResult].qtyStock += 1;
      setASearchResult(aSearchResult);
      updateStock(inventory);
      setAShopingCart(aShopingCart);
      break;
    }
}
