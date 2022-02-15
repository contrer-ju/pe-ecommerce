export default function onClearSelectedItem(searchResult, setASearchResult) {
  const inventory = JSON.parse(JSON.stringify(searchResult));
  
  for (let i = 0; i < inventory.length; i++) {
    inventory[i].qtySelected = 0;
    inventory[i].qtyStock = inventory[i].initStock;
  }

  setASearchResult(inventory);
}
