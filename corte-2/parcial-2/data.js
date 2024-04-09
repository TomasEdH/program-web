const data = [
    {
      "name": "Nike Air Max 90",
      "price": "$120",
      "stock": "100"
    },
    {
      "name": "Adidas Ultraboost",
      "price": "$180",
      "stock": "50"
    },
    {
      "name": "Under Armour HeatGear",
      "price": "$30",
      "stock": "200"
    },
    {
      "name": "Puma Evostripe Hoodie",
      "price": "$60",
      "stock": "75"
    },
    {
      "name": "Reebok CrossFit Nano",
      "price": "$130",
      "stock": "30"
    },
    {
      "name": "New Balance Fresh Foam",
      "price": "$100",
      "stock": "90"
    },
    {
      "name": "Columbia Silver Ridge",
      "price": "$50",
      "stock": "150"
    },
    {
      "name": "Oakley Radar EV",
      "price": "$150",
      "stock": "20"
    },
    {
      "name": "Vans Old Skool",
      "price": "$60",
      "stock": "120"
    },
    {
      "name": "Converse Chuck Taylor",
      "price": "$50",
      "stock": "80"
    }
]

const data_kids = [
    {
      "name": "product1",
      "stock": "10",
      "price": "20",
      "age-range": "4-6"
    },
    {
      "name": "product2",
      "stock": "5",
      "price": "15",
      "age-range": "7-9"
    },
    {
      "name": "product3",
      "stock": "7",
      "price": "25",
      "age-range": "10-12"
    },
    {
      "name": "product4",
      "stock": "3",
      "price": "30",
      "age-range": "4-6"
    },
    {
      "name": "product5",
      "stock": "9",
      "price": "18",
      "age-range": "7-9"
    },
    {
      "name": "product6",
      "stock": "2",
      "price": "22",
      "age-range": "10-12"
    },
    {
      "name": "product7",
      "stock": "6",
      "price": "28",
      "age-range": "4-6"
    },
    {
      "name": "product8",
      "stock": "4",
      "price": "16",
      "age-range": "7-9"
    },
    {
      "name": "product9",
      "stock": "8",
      "price": "24",
      "age-range": "10-12"
    },
    {
      "name": "product10",
      "stock": "1",
      "price": "32",
      "age-range": "4-6"
    }
  ]

const $section = document.querySelector('section');

data.forEach((item) => {
  const $product = document.createElement('div');
  $product.className = 'product';
  $product.innerHTML = `
    <img src='https://via.placeholder.com/200' alt='Product Image' />
    <h4 class='item-name'>${item.name}</h4>
    <p>Price: ${item.price}</p>
    <p>Stock: ${item.stock}</p>
  `;
  $section.appendChild($product);
});


