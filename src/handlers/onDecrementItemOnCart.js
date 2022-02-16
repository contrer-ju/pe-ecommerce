export default function onDecrementItemOnCart(
  itemId,
  shopingCart,
  setAShopingCart,
  searchResult,
  setASearchResult,
  setALowerLimitItemInStock,
  setAIdItemToRemoveFromCart
) {
  const inventory = JSON.parse(JSON.stringify(searchResult));
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));
  const itemOnInventory = {
    availability: false,
    index: null,
  };

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === itemId) {
      itemOnInventory.availability = true;
      itemOnInventory.index = i;
    }
  }

  for (let i = 0; i < aShopingCart.length; i++)
    if (aShopingCart[i].id === itemId) {
      if (aShopingCart[i].qtySelected > 0) aShopingCart[i].qtySelected -= 1;
      if (aShopingCart[i].qtySelected === 0) {
        setALowerLimitItemInStock(true);
        setAIdItemToRemoveFromCart(aShopingCart[i].id);
      }
      if (itemOnInventory.availability) {
        inventory[itemOnInventory.index].qtyStock += 1;
        inventory[itemOnInventory.index].initStock += 1;
        setASearchResult(inventory);
      }
      break;
    }
  setAShopingCart(aShopingCart);
}
