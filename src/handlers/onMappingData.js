export default function onMappingData(data, setASearchResult) {
  let booksArray = [];

  for (let i = 0; i < data.length; i++) {
    booksArray.push({
      author_name: data[i].hasOwnProperty("author_name")
        ? data[i].author_name[0]
        : "No data available",
      title: data[i].hasOwnProperty("title")
        ? data[i].title
        : "No data available",
      id: data[i].hasOwnProperty("cover_i")
        ? data[i].cover_i
        : "U" + "0".repeat(7 - i.toString().length) + i,
      publish_year: data[i].hasOwnProperty("first_publish_year")
        ? data[i].first_publish_year
        : "No data available",
      publisher: data[i].hasOwnProperty("publisher")
        ? data[i].publisher[0]
        : "No data available",
      isbn: data[i].hasOwnProperty("isbn")
        ? data[i].isbn[0]
        : "No data available",
      subject: data[i].hasOwnProperty("subject")
        ? data[i].subject
        : "No data available",
      price: "$" + (Math.random() * 75 + 1).toFixed(2),
      initStock: Math.floor(Math.random() * 20),
      qtySelected: 0,
    });
    booksArray[i].qtyStock = booksArray[i].initStock;
  }

  setASearchResult(booksArray);
}
