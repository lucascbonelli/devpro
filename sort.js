function sortProducts(products, sortKey, ascending) {
    return products.sort((a, b) => {
      if (ascending) {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    });
  }
  
  // Example Input
  const products = [
    { "name": "Product A", "price": 100, "stock": 5 },
    { "name": "Product B", "price": 200, "stock": 3 },
    { "name": "Product C", "price": 50, "stock": 10 },
    { "name": "Product D", "price": 87, "stock": 10 },
    { "name": "Product E", "price": 433, "stock": 10 },
    { "name": "Product F", "price": 7, "stock": 10 },
    { "name": "Product G", "price": 99, "stock": 10 }
];
  const sortKey = "price";
  const ascending = false;
  
  // Sort products
  const sortedProducts = sortProducts(products, sortKey, ascending);
  console.log(sortedProducts);