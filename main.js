const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".story__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".story__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".story__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".story__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".story__content .story__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".client__image img", {
  ...scrollRevealOption,
  origin: "right",
});

const swiper = new Swiper(".swiper", {
  loop: true,
});



document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read__more");
  const detailModal = document.createElement("div");

  detailModal.classList.add("detail-modal");
  detailModal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2 id="product-title">Product Title</h2>
      <img id="product-image" src="" alt="Product Image" />
      <p id="product-description">Product description goes here.</p>
      <p id="product-price"></p>
    </div>
  `;
  document.body.appendChild(detailModal);

  readMoreButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
    
      const productDetails = [
        {
          title: "TERJAN GOLD",
          image: "assets/arrival-1.png",
          description:
            "A luxurious gold watch combining style and durability.",
          price: "$890",
        },
        {
          title: "SHEPARD PINK",
          image: "assets/arrival-2.png",
          description:
            "An elegant brown watch perfect for modern fashion enthusiasts.",
          price: "$589",
        },
        {
          title: "TITAN BLACK",
          image: "assets/arrival-3.png",
          description:
            "A bold black watch with a contemporary design.",
          price: "$678",
        },
        {
          title: "ADERTICA WHITE",
          image: "assets/arrival-4.png",
          description:
            "A sleek white watch that matches any outfit.",
          price: "$570",
        },
      ];

   
      const details = productDetails[index];
      document.getElementById("product-title").textContent = details.title;
      document.getElementById("product-image").src = details.image;
      document.getElementById("product-description").textContent =
        details.description;
      document.getElementById("product-price").textContent = details.price;

      detailModal.style.display = "flex";
    });
  });


  document.querySelector(".close-btn").addEventListener("click", () => {
    detailModal.style.display = "none";
  });


  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) {
      detailModal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  
  const addToCartButtons = document.querySelectorAll('.btn.add__cart');
  const cartIcon = document.querySelector('#cart-icon');
  const cartModal = document.querySelector('#cart-modal');
  const closeCart = document.querySelector('#close-cart');
  const cartCount = document.querySelector('#cart-count');
  const cartItems = document.querySelector('#cart-items');
  const cartTotalPrice = document.querySelector('#cart-total-price');

  let cart = [];


  cartIcon.addEventListener('click', function () {
    cartModal.style.display = 'flex';
  });


  closeCart.addEventListener('click', function () {
    cartModal.style.display = 'none';
  });

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const card = e.target.closest('.feature__card') || e.target.closest('.arrival__card');
      const productName = card.querySelector('h4').textContent;
      const productPrice = parseFloat(card.querySelector('p').textContent.replace('$', '').trim());
      const productImage = card.querySelector('img').src;

   
      const product = {
        name: productName,
        price: productPrice,
        image: productImage
      };
      cart.push(product);

   
      updateCart();
    });
  });


  function updateCart() {
 
    cartCount.textContent = cart.length;

  
    cartItems.innerHTML = '';
    cart.forEach((item) => {
      const listItem = document.createElement('li');
      

      const imgElement = document.createElement('img');
      imgElement.src = item.image;
      imgElement.alt = item.name;


      listItem.appendChild(imgElement);
      listItem.innerHTML += `${item.name} - $${item.price.toFixed(2)}`;
      
      cartItems.appendChild(listItem);
    });


    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
  }


  window.addEventListener('click', function (e) {
    if (e.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });
});










