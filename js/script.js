// Toogle Class Navbar Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Menu di Click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik tombol search untuk menampilkan search box
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik tombol cart untuk menampilkan shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar sidebar untuk menutup
const hm = document.querySelector("#menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  // Klik untuk tombol close
  document.querySelector(".modal .close").onclick = (e) => {
    detailModal.style.display = "none";
    e.preventDefault();
  };

  // Klik diluar untuk close
  window.onclick = (e) => {
    if (e.target == modal) {
      detailModal.style.display = "none";
    }
  }; 
});

// Fungsi untuk membuka modal
function openModal(modalNumber) {
  var modal = document.getElementById("detail-modal-" + modalNumber);
  modal.style.display = "block";

  // Fungsi menutup modal selain dari close
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal(modalNumber);
    }
});
}

// Fungsi untuk menutup modal
function closeModal(modalNumber) {
  var modal = document.getElementById("detail-modal-" + modalNumber);
  modal.style.display = "none";
}