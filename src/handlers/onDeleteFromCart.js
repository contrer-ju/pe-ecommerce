export default function onDeleteFromCart(
  itemId,
  shopingCart,
  setAShopingCart,
  stock,
  updateStock
) {
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));
  const inventory = JSON.parse(JSON.stringify(stock));

  for (let i = 0; i < aShopingCart.length; i++)
    if (aShopingCart[i].id === itemId) {
      aShopingCart.splice(i, 1);
      break;
    }

  setAShopingCart(aShopingCart);

  for (let i = 0; i < inventory.length; i++)
    if (inventory[i].id === itemId) {
      inventory[i].stock = inventory[i].initStock;
      break;
    }

  updateStock(inventory);
}
