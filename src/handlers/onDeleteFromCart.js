export default function onDeleteFromCart(itemId, shopingCart, setAShopingCart) {
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));

  for (let i = 0; i < aShopingCart.length; i++)
    if (aShopingCart[i].id === itemId) {
      aShopingCart.splice(i, 1);
      break;
    }

  setAShopingCart(aShopingCart);
}
