export default function onIncrementItemOnCart(
  itemId,
  shopingCart,
  setAShopingCart,
  searchResult,
  setASearchResult,
  setAUpperLimitItemInStock
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

  for (let i = 0; i < aShopingCart.length; i++) {
    if (aShopingCart[i].id === itemId) {
      if (itemOnInventory.availability && inventory[itemOnInventory.index].qtyStock > 0) {
        aShopingCart[i].qtySelected += 1;
        inventory[itemOnInventory.index].qtyStock -= 1;
        inventory[itemOnInventory.index].initStock -= 1;
        setAShopingCart(aShopingCart);
        setASearchResult(inventory);
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
