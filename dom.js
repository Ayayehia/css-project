var products_container = document.querySelector(".products-container");
var shopping_cart = document.querySelector(".shopping-cart");
var total_price = document.querySelector(".total-price");
var total = 0;
var products = [
  {
    id: 0,
    quantity: 0,
    count: 0,
    title: "consultation",
    description: "book your first counsaltation",
    price: 20,
    img: "./consl..jpg",
  },
  {
    id: 1,
    quantity: 0,
    count: 0,
    title: "ux/ui design",
    description: "Black t-shirt",
    price: 30,
    img: "./website-ui-ux-icon.webp",
  },
  {
    id: 2,
    quantity: 0,
    count: 0,
    title: "choose templates",
    description: "templates",
    price: 40,
    img: "./template-1.jpg",
  },
  {
    id: 3,
    quantity: 0,
    count: 0,
    title: "specialist",
    description: "contact our specialist",
    price: 50,
    img: "./marketing-specialist.webp",
  },
];
var cart_products = [];

// var quantity = {
//   shoes: 10,
//   pants: 5,
//   t_shirt: 4,
//   watch: 7,
// };
function displayProducts() {
  products_container.innerHTML = "";
  products.map(
    (product) =>
      (products_container.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${product.img}" alt="Card image cap">
        <div class="card-body" style="text-align:center;">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <p>${product.price} </p>
          <div class="quantity-container">
          <button onclick="decrement(${product.id})">-</button>
            <p> ${product.count}</p>
            <button onclick="increment(${product.id})">+</button>
          </div>
          <a href="#" onclick="buyProduct(${product.id})" class="btn btn-primary">Buy now</a>
        </div>
      </div>
        `)
  );
}

function displayCart() {
  shopping_cart.innerHTML = "";
  cart_products.map(
    (product) =>
      (shopping_cart.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${product.img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <p>${product.price} </p>
          <p>${product.quantity}</p>
          <a href="#" onclick="deleteProduct(${product.id})" class="btn btn-primary">Delete</a>
        </div>
      </div>
        `)
  );
  total = 0;
  cart_products.map((product) => (total += product.quantity * product.price));
  total_price.innerHTML = "The total is " + total;
}
displayProducts();
displayCart();

function buyProduct(id) {
  let product_to_buy = products.filter((product) => {
    return product.id == id;
  });
  if (product_to_buy[0].count == 0) {
    alert("Select quantity");
    return;
  }
  cart_products.push(product_to_buy[0]);
  let index = cart_products.findIndex((element) => element.id == id);
  cart_products[index].quantity += product_to_buy[0].count;
  let final_cart = cart_products.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  cart_products = final_cart;
  console.log(cart_products);
  displayCart();
}

function deleteProduct(id) {
  // cart_products
  let product_to_remain = cart_products.filter((product) => {
    return product.id !== id;
  });
  let index = cart_products.findIndex((element) => element.id == id);
  cart_products[index].quantity = 0;
  cart_products = product_to_remain;
  displayCart();
}

function decrement(id) {
  if (products[id].count >= 1) {
    products[id].count--;
  }
  displayProducts();
}
function increment(id) {
  products[id].count++;
  displayProducts();
}
