export default function onAddToCart(
  selectedItem,
  searchResult,
  setASearchResult,
  shopingCart,
  setAShopingCart,
  setAProductInitStock,
  setAProductQtySelected
) {
  if (selectedItem.qtySelected !== 0) {
    const newShopingCart = JSON.parse(JSON.stringify(shopingCart));
    const inventory = JSON.parse(JSON.stringify(searchResult));

    if (
      newShopingCart.find((item) => item.id === selectedItem.id) === undefined
    ) {
      newShopingCart.push({
        author_name: selectedItem.author_name,
        title: selectedItem.title,
        id: selectedItem.id,
        price: selectedItem.price,
        qtySelected: selectedItem.qtySelected,
        showTooltip: false,
      });
    } else {
      for (let i = 0; i < newShopingCart.length; i++) {
        if (newShopingCart[i].id === selectedItem.id)
          newShopingCart[i].qtySelected += selectedItem.qtySelected;
      }
    }
    setAShopingCart(newShopingCart);

    const itemIndexOnInventory = inventory.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (setAProductInitStock !== undefined)
      setAProductInitStock(inventory[itemIndexOnInventory].qtyStock);
    if (setAProductQtySelected !== undefined) setAProductQtySelected(0);
    inventory[itemIndexOnInventory].initStock =
      inventory[itemIndexOnInventory].qtyStock;
    inventory[itemIndexOnInventory].qtySelected = 0;
    setASearchResult(inventory);
  }
}
