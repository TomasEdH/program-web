const data_kids = [
  {
    name: "Nike Air T-shirt",
    stock: "10",
    price: "20",
    "age-range": "4-6",
  },
  {
    name: "Adidas Joggers",
    stock: "5",
    price: "65",
    "age-range": "7-9",
  },
  {
    name: "Puma Hoodie",
    stock: "7",
    price: "25",
    "age-range": "10-12",
  },
  {
    name: "Nike Pro Shorts",
    stock: "3",
    price: "30",
    "age-range": "4-6",
  },
  {
    name: "Adidas Superstar Tracksuit",
    stock: "9",
    price: "18",
    "age-range": "7-9",
  },
  {
    name: "Puma Future Sweatpants",
    stock: "2",
    price: "22",
    "age-range": "10-12",
  },
  {
    name: "Nike Elite Jacket",
    stock: "6",
    price: "28",
    "age-range": "4-6",
  },
  {
    name: "Adidas Ultraboost T-shirt",
    stock: "4",
    price: "16",
    "age-range": "7-9",
  },
  {
    name: "Puma EvoKnit Hoodie",
    stock: "8",
    price: "24",
    "age-range": "10-12",
  },
  {
    name: "Nike Dri-FIT Pants",
    stock: "1",
    price: "89",
    "age-range": "4-6",
  },
];

const $section = document.querySelector("section");

data_kids.forEach((item) => {
  const $product = document.createElement("div");
  $product.className = "product";
  $product.innerHTML = `
      <img src='https://via.placeholder.com/200' alt='Product Image' />
      <h4 class='item-name'>${item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Stock: ${item.stock}</p>
    `;
  $section.appendChild($product);
});
