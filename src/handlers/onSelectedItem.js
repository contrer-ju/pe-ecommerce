export default function onSelectedItem(
  selectedQty,
  selectedId,
  searchResult,
  setASearchResult,
  setAProductQtySelected
) {
  const inventory = JSON.parse(JSON.stringify(searchResult));
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === selectedId) {
      if (setAProductQtySelected !== undefined)
        setAProductQtySelected(Number(selectedQty));
      inventory[i].qtySelected = Number(selectedQty);
      inventory[i].qtyStock = inventory[i].initStock - selectedQty;
      break;
    }
  }

  setASearchResult(inventory);
}
