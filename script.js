/**
 * NEXURA — Professional E-Commerce JavaScript Engine
 */

// Mock Database of Store Products
const PRODUCTS = [
  {
    id: "p1",
    name: "Amul Taaza Fresh Milk 1L",
    category: "Dairy & Eggs",
    brand: "Amul",
    price: 64,
    mrp: 70,
    discount: "8% OFF",
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    description: "Pasteurised toned milk rich in calcium and vital vitamins for daily health.",
    isDeal: true,
    needCategory: "Breakfast Essentials"
  },
  {
    id: "p2",
    name: "Aashirvaad Whole Wheat Atta 5kg",
    category: "Household",
    brand: "Aashirvaad",
    price: 245,
    mrp: 290,
    discount: "15% OFF",
    rating: 4.7,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
    description: "Made from the choicest grains, dense with natural fibre and taste.",
    isDeal: false,
    needCategory: "Weekend Shopping"
  },
  {
    id: "p3",
    name: "Fresh Shimla Red Apples 1kg",
    category: "Fruits & Vegetables",
    brand: "FreshFarm",
    price: 180,
    mrp: 220,
    discount: "18% OFF",
    rating: 4.9,
    reviews: 430,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
    description: "Crisp, sweet and directly sourced from Shimla orchards.",
    isDeal: true,
    needCategory: "Healthy Choices"
  },
  {
    id: "p4",
    name: "Lays Classic Salted Potato Chips 50g",
    category: "Snacks",
    brand: "Lays",
    price: 20,
    mrp: 20,
    discount: "0% OFF",
    rating: 4.6,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80",
    description: "Crispy potato chips seasoned perfectly with salt for movie nights.",
    isDeal: false,
    needCategory: "Movie Night"
  },
  {
    id: "p5",
    name: "Tropicana 100% Orange Juice 1L",
    category: "Beverages",
    brand: "Tropicana",
    price: 110,
    mrp: 145,
    discount: "24% OFF",
    rating: 4.5,
    reviews: 670,
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=400&q=80",
    description: "100% real orange juice packed with Vitamin C and zero added sugar.",
    isDeal: true,
    needCategory: "Breakfast Essentials"
  },
  {
    id: "p6",
    name: "Britannia Multigrain Brown Bread 400g",
    category: "Bakery",
    brand: "Britannia",
    price: 50,
    mrp: 55,
    discount: "9% OFF",
    rating: 4.4,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    description: "Wholesome multigrain bread baked fresh daily.",
    isDeal: false,
    needCategory: "Breakfast Essentials"
  },
  {
    id: "p7",
    name: "Maggi 2-Minute Masala Noodles 280g Pack",
    category: "Instant Food",
    brand: "Nestle",
    price: 54,
    mrp: 60,
    discount: "10% OFF",
    rating: 4.9,
    reviews: 5400,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=400&q=80",
    description: "India's favourite instant noodle snack with signature spices.",
    isDeal: true,
    needCategory: "College Essentials"
  },
  {
    id: "p8",
    name: "Dettol Liquid Antiseptic Disinfectant 500ml",
    category: "Personal Care",
    brand: "Dettol",
    price: 195,
    mrp: 220,
    discount: "11% OFF",
    rating: 4.8,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    description: "Trusted protection against germs and personal hygiene care.",
    isDeal: false,
    needCategory: "Emergency Essentials"
  },
  {
    id: "p9",
    name: "Pedigree Adult Dog Food Chicken & Rice 1.2kg",
    category: "Pet Care",
    brand: "Pedigree",
    price: 340,
    mrp: 380,
    discount: "10% OFF",
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80",
    description: "Complete and balanced nutrition for adult dogs.",
    isDeal: false,
    needCategory: "Weekend Shopping"
  },
  {
    id: "p10",
    name: "Classmate Spiral Notebook A4 200 Pages",
    category: "Stationery",
    brand: "Classmate",
    price: 130,
    mrp: 150,
    discount: "13% OFF",
    rating: 4.6,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80",
    description: "High quality smooth white paper ideal for college notes.",
    isDeal: false,
    needCategory: "College Essentials"
  }
];

const CATEGORIES = [
  { name: "All", icon: "fa-border-all" },
  { name: "Fruits & Vegetables", icon: "fa-apple-whole" },
  { name: "Dairy & Eggs", icon: "fa-egg" },
  { name: "Snacks", icon: "fa-cookie-bite" },
  { name: "Beverages", icon: "fa-bottle-water" },
  { name: "Bakery", icon: "fa-bread-slice" },
  { name: "Personal Care", icon: "fa-pump-soap" },
  { name: "Household", icon: "fa-house-chimney" },
  { name: "Instant Food", icon: "fa-bowl-food" },
  { name: "Stationery", icon: "fa-pen-clip" },
  { name: "Pet Care", icon: "fa-dog" }
];

const NEEDS = [
  { name: "Breakfast Essentials", bg: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80" },
  { name: "Movie Night", bg: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=400&q=80" },
  { name: "College Essentials", bg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80" },
  { name: "Healthy Choices", bg: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80" }
];

// App State
let state = {
  cart: JSON.parse(localStorage.getItem('nexura_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('nexura_wishlist')) || [],
  activeCategory: "All",
  searchQuery: "",
  sortBy: "recommended"
};

// DOM Elements
const categoryGrid = document.getElementById('categoryGrid');
const filterPills = document.getElementById('filterPills');
const mainProductGrid = document.getElementById('mainProductGrid');
const dealsGrid = document.getElementById('dealsGrid');
const personalizedGrid = document.getElementById('personalizedGrid');
const needsGrid = document.getElementById('needsGrid');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortSelect = document.getElementById('sortSelect');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartBody = document.getElementById('cartBody');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDelivery = document.getElementById('cartDelivery');
const cartTotal = document.getElementById('cartTotal');
const quickViewModal = document.getElementById('quickViewModal');
const modalBody = document.getElementById('modalBody');

// Initialize Store
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderDeals();
  renderProducts();
  renderNeeds();
  renderPersonalized();
  updateCartUI();
  updateWishlistUI();
  startCountdown();
  setupEventListeners();
});

// Render Category Cards
function renderCategories() {
  categoryGrid.innerHTML = CATEGORIES.slice(1).map(cat => `
    <div class="category-card" onclick="setCategoryFilter('${cat.name}')">
      <div class="category-icon"><i class="fa-solid ${cat.icon}"></i></div>
      <div class="category-name">${cat.name}</div>
    </div>
  `).join('');

  filterPills.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-pill ${state.activeCategory === cat.name ? 'active' : ''}" onclick="setCategoryFilter('${cat.name}')">
      ${cat.name}
    </button>
  `).join('');
}

// Render Products Grid
function renderProducts() {
  let filtered = PRODUCTS.filter(p => {
    const matchesCategory = state.activeCategory === "All" || p.category === state.activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          p.brand.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (state.sortBy === "price-low") filtered.sort((a,b) => a.price - b.price);
  if (state.sortBy === "price-high") filtered.sort((a,b) => b.price - a.price);
  if (state.sortBy === "highest-rated") filtered.sort((a,b) => b.rating - a.rating);

  const noResults = document.getElementById('noResults');
  if (filtered.length === 0) {
    mainProductGrid.innerHTML = '';
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
    mainProductGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
  }
}

// Render Deal of the Day
function renderDeals() {
  const deals = PRODUCTS.filter(p => p.isDeal);
  dealsGrid.innerHTML = deals.map(p => createProductCardHTML(p)).join('');
}

// Render Shop By Need
function renderNeeds() {
  needsGrid.innerHTML = NEEDS.map(n => `
    <div class="need-card" style="background-image: url('${n.bg}')" onclick="filterByNeed('${n.name}')">
      <h4>${n.name}</h4>
    </div>
  `).join('');
}

// Render Personalized Section
function renderPersonalized() {
  const recommended = PRODUCTS.slice(0, 4);
  personalizedGrid.innerHTML = recommended.map(p => createProductCardHTML(p)).join('');
}

// HTML Template for Product Card
function createProductCardHTML(p) {
  const isWishlisted = state.wishlist.includes(p.id);
  return `
    <div class="product-card">
      <span class="product-badge">${p.discount}</span>
      <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}')">
        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      <div class="product-image-container" onclick="openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <span class="product-brand">${p.brand}</span>
      <h3 class="product-title" onclick="openQuickView('${p.id}')">${p.name}</h3>
      <div class="product-rating">
        <span class="stars-ic">★</span>
        <strong>${p.rating}</strong>
        <span class="rating-count">(${p.reviews})</span>
      </div>
      <div class="product-price-row">
        <span class="current-price">₹${p.price}</span>
        <span class="mrp-price">₹${p.mrp}</span>
      </div>
      <button class="add-cart-btn" onclick="addToCart('${p.id}')">
        + Add to Cart
      </button>
    </div>
  `;
}

// Cart Logic
function addToCart(productId) {
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast("✓ Added to Cart");
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(i => i.id !== productId);
    }
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('nexura_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalCount;

  if (state.cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-flatbed"></i>
        <p>Your cart is empty</p>
        <small>Explore items and add them to your cart!</small>
      </div>
    `;
    cartSubtotal.textContent = `₹0`;
    cartDelivery.textContent = `₹0`;
    cartTotal.textContent = `₹0`;
    return;
  }

  let subtotal = 0;
  cartBody.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p) return '';
    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-item-details">
          <div class="cart-item-title">${p.name}</div>
          <div class="cart-item-price">₹${p.price}</div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateCartQty('${p.id}', -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${p.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${p.id}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  const delivery = subtotal > 499 || subtotal === 0 ? 0 : 40;
  cartSubtotal.textContent = `₹${subtotal}`;
  cartDelivery.textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
  cartTotal.textContent = `₹${subtotal + delivery}`;
}

// Wishlist Logic
function toggleWishlist(productId) {
  if (state.wishlist.includes(productId)) {
    state.wishlist = state.wishlist.filter(id => id !== productId);
    showToast("Removed from Wishlist");
  } else {
    state.wishlist.push(productId);
    showToast("♡ Added to Wishlist");
  }
  localStorage.setItem('nexura_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts();
  renderDeals();
}

function updateWishlistUI() {
  wishlistCount.textContent = state.wishlist.length;
}

// Filtering & Search Events
function setCategoryFilter(categoryName) {
  state.activeCategory = categoryName;
  renderCategories();
  renderProducts();
}

function filterByNeed(needName) {
  state.activeCategory = "All";
  state.searchQuery = "";
  const filtered = PRODUCTS.filter(p => p.needCategory === needName);
  mainProductGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

// Quick View Modal
function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  modalBody.innerHTML = `
    <div>
      <img src="${p.image}" class="modal-img" alt="${p.name}">
    </div>
    <div class="modal-info">
      <span class="product-brand">${p.brand}</span>
      <h2>${p.name}</h2>
      <div class="product-rating" style="margin: 8px 0;">
        <span class="stars-ic">★</span> <strong>${p.rating}</strong> (${p.reviews} reviews)
      </div>
      <p class="modal-desc">${p.description}</p>
      <div class="product-price-row" style="margin-bottom: 20px;">
        <span class="current-price" style="font-size: 1.5rem;">₹${p.price}</span>
        <span class="mrp-price">₹${p.mrp}</span>
        <span class="discount-text">${p.discount}</span>
      </div>
      <button class="btn btn-primary" style="width:100%;" onclick="addToCart('${p.id}')">Add to Cart</button>
    </div>
  `;
  quickViewModal.classList.add('active');
}

// Event Listeners & Interactions
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderProducts();

    if (state.searchQuery.length > 1) {
      const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(state.searchQuery.toLowerCase())).slice(0, 5);
      if (matches.length > 0) {
        searchSuggestions.innerHTML = matches.map(m => `
          <div class="suggestion-item" onclick="openQuickView('${m.id}')">
            <img src="${m.image}" alt="">
            <span>${m.name}</span>
          </div>
        `).join('');
        searchSuggestions.style.display = 'block';
      } else {
        searchSuggestions.style.display = 'none';
      }
    } else {
      searchSuggestions.style.display = 'none';
    }
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchSuggestions.style.display = 'none';
    renderProducts();
  });

  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Cart Drawer
  document.getElementById('cartToggleBtn').addEventListener('click', () => {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  });

  document.getElementById('closeCartBtn').addEventListener('click', () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  });

  cartOverlay.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  });

  // Quick View Close
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    quickViewModal.classList.remove('active');
  });

  // Newsletter
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast("✓ Successfully subscribed!");
    document.getElementById('newsletterEmail').value = '';
  });

  // Reset Search button
  document.getElementById('resetSearchBtn').addEventListener('click', () => {
    state.searchQuery = '';
    state.activeCategory = 'All';
    searchInput.value = '';
    renderCategories();
    renderProducts();
  });

  // Promo Buttons Filter Trigger
  document.querySelectorAll('.filter-promo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.target.dataset.category;
      setCategoryFilter(cat);
      document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Countdown Timer Engine
function startCountdown() {
  let hours = 4, minutes = 14, seconds = 48;
  const hElem = document.getElementById('hours');
  const mElem = document.getElementById('minutes');
  const sElem = document.getElementById('seconds');

  setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) hours--;
      }
    }
    hElem.textContent = String(hours).padStart(2, '0');
    mElem.textContent = String(minutes).padStart(2, '0');
    sElem.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

// Toast Notifications
function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}