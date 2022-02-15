export default function onCalculateTotalShopping(
  shopingCart,
  setATotalShopping
) {
  const aShopingCart = JSON.parse(JSON.stringify(shopingCart));
  let totalShopping = 0;

  for (let i = 0; i < aShopingCart.length; i++)
    totalShopping +=
      aShopingCart[i].qtySelected *
      Number(aShopingCart[i].price.substring(1, aShopingCart[i].price.length));

  setATotalShopping(totalShopping.toFixed(2));
}
