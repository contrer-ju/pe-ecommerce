export default function onOffTooltips(shopingCart, setAShopingCart) {
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));

  for (let i = 0; i < aShopingCart.length; i++)
    aShopingCart[i].showTooltip = false;
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < 550);

  setAShopingCart(aShopingCart);
}
