const burgermenu = document.querySelector(".burgermenu");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const menuUl = document.querySelector(".menu ul");
const cartIcon = document.querySelector(".cart-icon");
const cartMenu = document.querySelector(".cart-menu");
const leftBTN = document.querySelector(".left");
const rightBTN = document.querySelector(".right");
const mainImg = document.querySelectorAll(".main-img");
const productImg = document.querySelectorAll(".product-img");
const cartItems = document.querySelector(".cart-items");

let product = {
  ProductName: "Fall Limited Edition Sneakers",
  price: 125,
  pieces: 0,
  producMainImg: "image-product-1-thumbnail.jpg",
  added: false,
};
burgermenu.addEventListener("click", toggleWindow);
close.addEventListener("click", toggleWindow);
overlay.addEventListener("click", toggleWindow);

cartIcon.addEventListener("click", () => {
  cartMenu.classList.toggle("visible");
});

function toggleWindow() {
  if (menu.classList.contains("aside")) {
    menuUl.classList.add("close");
    setTimeout(() => {
      menu.classList.remove("aside");
      menuUl.classList.remove("close");
    }, 500);
  } else {
    menu.classList.add("aside");
  }
}
leftBTN.addEventListener("click", () => {
  ChangeImg("left");
});
rightBTN.addEventListener("click", () => ChangeImg("right"));

productImg.forEach((e) =>
  e.addEventListener("click", () => {
    // document.querySelector(".selected").classList.remove("selected");
    changeUI(e.getAttribute("num"), e);
  })
);
function ChangeImg(action) {
  let NewImgNum;
  let CurrentImgNum = parseInt(mainImg[0].getAttribute("num"));
  if (action == "left") {
    if (CurrentImgNum > 1) {
      NewImgNum = CurrentImgNum - 1;
    } else {
      NewImgNum = productImg.length;
    }
  } else {
    if (CurrentImgNum < 4) {
      NewImgNum = CurrentImgNum + 1;
    } else {
      NewImgNum = 1;
    }
  }

  let newSelectedImg = document.querySelector(`[num="${NewImgNum}"]`);
  changeUI(NewImgNum, newSelectedImg);
}
function changeUI(num, e) {
  document.querySelector(".selected").classList.remove("selected");
  e.children[0].classList.add("selected");

  mainImg.forEach((img) => {
    img.src = `images/image-product-${num}.jpg`;
    img.setAttribute("num", num);
  });
}

// cart menu
const plusBTN = document.querySelector(".plus");
const minusBTN = document.querySelector(".minus");
let amountNum = document.querySelector(".amountNum");
let amount = 0;
const addToCartBTN = document.querySelector(".addToCart button");
const cartIconAfter = document.querySelector(".cart-icon-num");
plusBTN.addEventListener("click", () => {
  amount++;
  updateUI(amount);
});
minusBTN.addEventListener("click", () => {
  amount = amount > 0 ? amount - 1 : amount;
  updateUI(amount);
});
function updateUI(num) {
  amountNum.innerHTML = num;
}
addToCartBTN.addEventListener("click", () => {
  if (amount > 0) {
    addItem();
  }
});
function addItem() {
  product.pieces = amount;

  const newDiv = document.createElement("div");
  const firstDiv = document.createElement("div");

  newDiv.appendChild(firstDiv);

  newDiv.classList.add("item", "d-flex", "flex-column");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add(
    "info",
    "d-flex",
    "align-items-end",
    "justify-content-around"
  );

  const img = document.createElement("img");
  img.src = `images/image-product-1-thumbnail.jpg`;

  const namePriceDiv = document.createElement("div");
  namePriceDiv.classList.add("name-Price", "text-black-50", "fw-normal");

  const nameParagraph = document.createElement("p");
  nameParagraph.classList.add("m-0");
  nameParagraph.textContent = product.ProductName;

  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("m-0");
  priceParagraph.innerHTML = `${product.price} x ${
    product.pieces
  } <span class='fw-bold text-black'>$${product.price * product.pieces}</span>`;

  const deleteDiv = document.createElement("div");
  deleteDiv.classList.add("delete");
  deleteDiv.addEventListener("click", function () {
    this.parentNode.parentNode.remove();
    cartIconAfter.style.display =
      cartItems.children.length === 0 ? "none" : "block";
  });

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");

  const checkoutDiv = document.createElement("div");
  checkoutDiv.classList.add("checkout");

  const checkoutButton = document.createElement("button");
  checkoutButton.textContent = "CheckOut";

  infoDiv.appendChild(img);
  namePriceDiv.appendChild(nameParagraph);
  namePriceDiv.appendChild(priceParagraph);
  infoDiv.appendChild(namePriceDiv);
  deleteDiv.appendChild(trashIcon);
  infoDiv.appendChild(deleteDiv);
  newDiv.appendChild(infoDiv);
  newDiv.appendChild(checkoutDiv);
  checkoutDiv.appendChild(checkoutButton);
  cartItems.appendChild(newDiv);
  cartIconAfter.style.display =
    cartItems.children.length === 0 ? "none" : "block";
}
// end
