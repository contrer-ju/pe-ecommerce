export default function onOffTooltips(shopingCart, setAShopingCart) {
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));

  for (let i = 0; i < aShopingCart.length; i++)
    aShopingCart[i].showTooltip = false;

  setAShopingCart(aShopingCart);
}
