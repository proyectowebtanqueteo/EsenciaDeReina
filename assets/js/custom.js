document.addEventListener("DOMContentLoaded", function () {
  function loadComponent(componentPath, placeholderId) {
    return fetch(componentPath)
      .then((response) => response.text())
      .then((data) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
          placeholder.innerHTML = data;
        }
      });
  }

  loadComponent("./assets/components/navbar.html", "navbar-placeholder").then(
    () => {
      const navbar = document.querySelector(".navbar.shadow");

      function setNavbarHeight() {
        if (navbar && navbar.offsetHeight > 0) {
          const navbarHeight = navbar.offsetHeight;
          document.documentElement.style.setProperty(
            "--navbar-height",
            `${navbarHeight}px`
          );
        }
      }

      function runFinalSetup() {
        document.fonts.ready.then(() => {
          setNavbarHeight();
          document.body.classList.add("ready");
        });
        setTimeout(() => {
          setNavbarHeight();
          if (!document.body.classList.contains("ready")) {
            document.body.classList.add("ready");
          }
        }, 300);
      }

      if (navbar) {
        runFinalSetup();
        window.addEventListener("resize", setNavbarHeight);
      }

      const mainNav = document.getElementById("templatemo_main_nav");
      const toggler = document.querySelector(".navbar-toggler");
      if (mainNav && toggler) {
        const bsCollapse = new bootstrap.Collapse(mainNav, { toggle: false });

        mainNav.addEventListener("show.bs.collapse", () =>
          document.body.classList.add("menu-open")
        );
        mainNav.addEventListener("hide.bs.collapse", () =>
          document.body.classList.remove("menu-open")
        );

        document.addEventListener("click", function (event) {
          const isClickInsideNav = mainNav.contains(event.target);
          const isClickOnToggler = toggler.contains(event.target);
          if (
            document.body.classList.contains("menu-open") &&
            !isClickInsideNav &&
            !isClickOnToggler
          ) {
            bsCollapse.hide();
          }
        });
      }

      const currentPagePath =
        window.location.pathname.split("/").pop() || "index.html";
      const navLinks = document.querySelectorAll(
        "#templatemo_main_nav .nav-link"
      );
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPagePath) {
          link.classList.add("active");
        }
      });

      setupLanguageSwitcher();

      updateCart();
    }
  );

  $("#footer-placeholder").load("./assets/components/footer.html");

  const products = $("#featured-products .col-12.col-md-4.mb-4");
  const verMasBtn = $("#ver-mas-btn");
  const initialShow = 3;
  const step = 3;
  let currentlyVisible = initialShow;

  products.slice(initialShow).hide();

  if (products.length <= initialShow) {
    verMasBtn.hide();
  }

  verMasBtn.on("click", function () {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const showAllText = currentLang === 'es' ? 'Mostrar todos' : 'Show all';
    const viewMoreText = currentLang === 'es' ? 'Ver más' : 'View more';

    if ($(this).text().trim() === showAllText) {
      window.location.href = "shop.html";
      return;
    }

    const nextLimit = currentlyVisible + step;

    products.slice(currentlyVisible, nextLimit).slideDown();

    currentlyVisible = nextLimit;

    if (currentlyVisible >= products.length) {
      $(this).text(showAllText);
      $(this).attr('data-lang-en', 'Show all');
      $(this).attr('data-lang-es', 'Mostrar todos');
    }
  });

  const faviconLink = document.createElement("link");
  faviconLink.rel = "shortcut icon";
  faviconLink.type = "image/x-icon";
  faviconLink.href = "assets/img/logo2.png";
  document.head.appendChild(faviconLink);

  const valueCards = document.querySelectorAll('.flip-card');
  valueCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalElement = document.getElementById('cart-total');
    const cartBadge = document.getElementById('cart-badge');

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="text-center text-muted" data-lang-en="Your cart is empty." data-lang-es="Tu carrito está vacío.">Your cart is empty.</p>';
    } else {
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;

        const cartItemHTML = `
          <div class="card mb-3 cart-item" data-id="${item.id}">
            <div class="row g-0 align-items-center">
              <div class="col-4">
                <img src="${item.img}" class="img-fluid rounded-start" alt="${item.name}">
              </div>
              <div class="col-8">
                <div class="card-body py-2">
                  <h5 class="card-title fs-6 mb-2">${item.name}</h5>
                  <p class="card-text small mb-2">$${item.price}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <button class="btn btn-sm btn-secondary quantity-change" data-change="-1">-</button>
                      <span class="mx-2">${item.quantity}</span>
                      <button class="btn btn-sm btn-secondary quantity-change" data-change="1">+</button>
                    </div>
                    <button class="btn btn-sm btn-outline-danger remove-from-cart"><i class="fas fa-trash"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
      });
    }

    cartTotalElement.innerText = `$${total.toFixed(2)}`;
    cartBadge.innerText = totalItems;
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    setupLanguageSwitcher();
  }

  function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCart();
  }

  document.body.addEventListener('click', function (e) {
    const addToCartBtn = e.target.closest('.add-to-cart-btn');
    if (addToCartBtn) {
      const card = addToCartBtn.closest('.product-wap');
      const product = {
        id: card.dataset.id,
        name: card.dataset.name,
        price: parseFloat(card.dataset.price),
        img: card.dataset.img,
      };
      addToCart(product);
    }

    const removeFromCartBtn = e.target.closest('.remove-from-cart');
    if (removeFromCartBtn) {
      e.stopPropagation();
      const cartItem = removeFromCartBtn.closest('.cart-item');
      const productId = cartItem.dataset.id;
      const itemIndex = cart.findIndex(item => item.id === productId);
      if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
      }
      updateCart();
    }

    const quantityChangeBtn = e.target.closest('.quantity-change');
    if (quantityChangeBtn) {
      e.stopPropagation();
      const cartItem = quantityChangeBtn.closest('.cart-item');
      const productId = cartItem.dataset.id;
      const change = parseInt(quantityChangeBtn.dataset.change);
      const itemInCart = cart.find(item => item.id === productId);
      if (itemInCart) {
        itemInCart.quantity += change;
        if (itemInCart.quantity <= 0) {
          cart = cart.filter(item => item.id !== productId);
        }
      }
      updateCart();
    }

    if (e.target.id === 'clear-cart-btn') {
      cart = [];
      updateCart();
    }

    // Evento para el botón de Checkout (Pagar)
    const checkoutBtn = e.target.closest('#checkout-btn');
    if (checkoutBtn) {
      const now = new Date();
      const hour = now.getHours();
      let saludo = 'Buenas tardes';
      if (hour < 12) saludo = 'Buenos días';
      else if (hour >= 19) saludo = 'Buenas noches';

      let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
      if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
      }

      let mensaje = `${saludo}, estoy interesad@ en estos productos:\n`;
      cart.forEach(item => {
        mensaje += `- ${item.name} (Cantidad: ${item.quantity})\n`;
      });
      // Agrega el total al mensaje
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      mensaje += `\nTotal: $${total.toFixed(2)}`;

      const numero = '19452179299';
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    }
  });



  if (window.location.pathname.endsWith('shop.html')) {
    const allProducts = [
      { id: 1, name: 'Golden Hoop Earrings', price: 150.00, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 2, name: 'Silver Drop Earrings', price: 120.00, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 3, name: 'Diamond Ring', price: 980.00, category: 'rings', img: './assets/img/anillo.png' },
      { id: 4, name: 'Sapphire Ring', price: 750.00, category: 'rings', img: './assets/img/anillo.png' },
      { id: 5, name: 'Pearl Necklace', price: 420.00, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 6, name: 'Gold Bracelet', price: 360.00, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 7, name: 'Elegant Pearl Necklace', price: 450.00, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 8, name: 'Classic Gold Bracelet', price: 380.00, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 9, name: 'Emerald Stud Earrings', price: 250.00, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 10, name: 'Ruby Engagement Ring', price: 1200.00, category: 'rings', img: './assets/img/anillo.png' },
      { id: 11, name: 'Simple Silver Bracelet', price: 90.00, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 12, name: 'Dangling Diamond Earrings', price: 600.00, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 13, name: 'Opal Ring', price: 320.00, category: 'rings', img: './assets/img/anillo.png' },
      { id: 14, name: 'Choker Necklace', price: 180.00, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 15, name: 'Beaded Bracelet', price: 75.00, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 16, name: 'Small Hoop Earrings', price: 110.00, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 17, name: 'Vintage Style Ring', price: 400.00, category: 'rings', img: './assets/img/anillo.png' },
      { id: 18, name: 'Layered Necklace', price: 220.00, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 19, name: 'Golden Hoop Earrings II', price: 155, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 20, name: 'Silver Drop Earrings II', price: 125, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 21, name: 'Diamond Ring II', price: 985, category: 'rings', img: './assets/img/anillo.png' },
      { id: 22, name: 'Sapphire Ring II', price: 755, category: 'rings', img: './assets/img/anillo.png' },
      { id: 23, name: 'Pearl Necklace II', price: 425, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 24, name: 'Gold Bracelet II', price: 365, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 25, name: 'Elegant Pearl Necklace II', price: 455, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 26, name: 'Classic Gold Bracelet II', price: 385, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 27, name: 'Emerald Stud Earrings II', price: 255, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 28, name: 'Ruby Engagement Ring II', price: 1205, category: 'rings', img: './assets/img/anillo.png' },
      { id: 29, name: 'Simple Silver Bracelet II', price: 95, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 30, name: 'Dangling Diamond Earrings II', price: 605, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 31, name: 'Opal Ring II', price: 325, category: 'rings', img: './assets/img/anillo.png' },
      { id: 32, name: 'Choker Necklace II', price: 185, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 33, name: 'Beaded Bracelet II', price: 80, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 34, name: 'Small Hoop Earrings II', price: 115, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 35, name: 'Vintage Style Ring II', price: 405, category: 'rings', img: './assets/img/anillo.png' },
      { id: 36, name: 'Layered Necklace II', price: 225, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 37, name: 'Golden Hoop Earrings III', price: 160, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 38, name: 'Silver Drop Earrings III', price: 130, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 39, name: 'Diamond Ring III', price: 990, category: 'rings', img: './assets/img/anillo.png' },
      { id: 40, name: 'Sapphire Ring III', price: 760, category: 'rings', img: './assets/img/anillo.png' },
      { id: 41, name: 'Pearl Necklace III', price: 430, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 42, name: 'Gold Bracelet III', price: 370, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 43, name: 'Elegant Pearl Necklace III', price: 460, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 44, name: 'Classic Gold Bracelet III', price: 390, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 45, name: 'Emerald Stud Earrings III', price: 260, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 46, name: 'Ruby Engagement Ring III', price: 1210, category: 'rings', img: './assets/img/anillo.png' },
      { id: 47, name: 'Simple Silver Bracelet III', price: 100, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 48, name: 'Dangling Diamond Earrings III', price: 610, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 49, name: 'Opal Ring III', price: 330, category: 'rings', img: './assets/img/anillo.png' },
      { id: 50, name: 'Choker Necklace III', price: 190, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 51, name: 'Beaded Bracelet III', price: 85, category: 'bracelets', img: './assets/img/collar.png' },
      { id: 52, name: 'Small Hoop Earrings III', price: 120, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 53, name: 'Vintage Style Ring III', price: 410, category: 'rings', img: './assets/img/anillo.png' },
      { id: 54, name: 'Layered Necklace III', price: 230, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 55, name: 'Golden Hoop Earrings IV', price: 170, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 56, name: 'Silver Drop Earrings IV', price: 140, category: 'earrings', img: './assets/img/zarcillo.jpg' },
      { id: 57, name: 'Diamond Ring IV', price: 1000, category: 'rings', img: './assets/img/anillo.png' },
      { id: 58, name: 'Sapphire Ring IV', price: 770, category: 'rings', img: './assets/img/anillo.png' },
      { id: 59, name: 'Pearl Necklace IV', price: 440, category: 'necklaces', img: './assets/img/collar.png' },
      { id: 60, name: 'Gold Bracelet IV', price: 380, category: 'bracelets', img: './assets/img/collar.png' }
    ];

    const productContainer = document.querySelector('.product-container');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const sortNav = document.querySelector('.shop-sort-nav');
    const paginationContainer = document.getElementById('pagination-container');
    const searchForm = document.getElementById('shop-search-form');
    const searchInput = document.getElementById('shop-search-input');

    let currentPage = 1;
    const itemsPerPage = 9;

    function renderProducts(productsToRender) {
      productContainer.innerHTML = '';
      if (productsToRender.length === 0) {
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        const noProductsText = currentLang === 'es' ? 'No se encontraron productos.' : 'No products found.';
        productContainer.innerHTML = `<div class="col-12 text-center"><p>${noProductsText}</p></div>`;
        return;
      }
      productsToRender.forEach(product => {
        const productHTML = `
          <div class="col-md-4 product-card" data-category="${product.category}">
            <div class="card mb-4 product-wap rounded-0" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-img="${product.img}">
              <div class="card rounded-0">
                <div class="product-img-container">
                  <img class="card-img rounded-0 img-fluid" src="${product.img}">
                </div>
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul class="list-unstyled">
                    <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                    <li><a class="btn btn-success text-white mt-2 add-to-cart-btn" href="#"><i class="fas fa-cart-plus"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="card-body text-center">
                <a href="shop-single.html" class="h3 text-decoration-none">${product.name}</a>
                <p class="mb-0">$${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        `;
        productContainer.innerHTML += productHTML;
      });
    }

    function renderPagination(totalProducts) {
      const totalPages = Math.ceil(totalProducts / itemsPerPage);
      paginationContainer.innerHTML = '';
      if (totalPages <= 1) return;

      if (window.innerWidth < 768) {
        paginationContainer.classList.remove('justify-content-end');
        paginationContainer.classList.add('justify-content-center');
      } else {
        paginationContainer.classList.add('justify-content-end');
        paginationContainer.classList.remove('justify-content-center');
      }

      function createPageItem(content, pageNum, isDisabled = false, isActive = false) {
        const li = document.createElement('li');
        li.className = `page-item ${isDisabled ? 'disabled' : ''} ${isActive ? 'active' : ''}`;
        const a = document.createElement('a');
        a.className = 'page-link';
        a.href = '#';
        a.innerHTML = content;
        if (pageNum) {
          a.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage !== pageNum) {
              currentPage = pageNum;
              updateShopView();
              document.querySelector('.col-lg-9').scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
        li.appendChild(a);
        return li;
      }

      const pages = [];
      const isMobile = window.innerWidth < 768;
      const siblingCount = isMobile ? 1 : 2;
      const totalPageNumbers = siblingCount * 2 + 5;

      if (totalPages > totalPageNumbers) {
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        if (!shouldShowLeftDots && shouldShowRightDots) {
          let leftItemCount = 3 + 2 * siblingCount;
          for (let i = 1; i < leftItemCount; i++) pages.push(i);
          pages.push('...');
          pages.push(totalPages);
        } else if (shouldShowLeftDots && !shouldShowRightDots) {
          let rightItemCount = 3 + 2 * siblingCount;
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - rightItemCount + 2; i <= totalPages; i++) pages.push(i);
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
          pages.push('...');
          pages.push(totalPages);
        }
      } else {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      }

      paginationContainer.appendChild(createPageItem('&laquo;', currentPage > 1 ? currentPage - 1 : null, currentPage === 1));
      [...new Set(pages)].forEach(page => {
        if (page === '...') {
          paginationContainer.appendChild(createPageItem('...', null, true));
        } else {
          paginationContainer.appendChild(createPageItem(page, page, false, page === currentPage));
        }
      });
      paginationContainer.appendChild(createPageItem('&raquo;', currentPage < totalPages ? currentPage + 1 : null, currentPage === totalPages));
    }

    function updateShopView() {
      const activeCategory = document.querySelector('.category-filter.active').dataset.filter;
      const searchTerm = searchInput.value.toLowerCase().trim();
      const sortType = sortNav.dataset.sortType || 'featured';
      const sortDirection = sortNav.dataset.sortDirection || 'asc';

      let processedProducts = [...allProducts];
      if (activeCategory !== 'all') {
        processedProducts = processedProducts.filter(p => p.category === activeCategory);
      }
      if (searchTerm) {
        processedProducts = processedProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
      }

      switch (sortType) {
        case 'a-z':
          processedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'price':
          processedProducts.sort((a, b) => a.price - b.price);
          break;
        default:
          processedProducts.sort((a, b) => a.id - b.id);
          break;
      }
      if (sortType !== 'featured' && sortDirection === 'desc') {
        processedProducts.reverse();
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedProducts = processedProducts.slice(startIndex, endIndex);

      renderProducts(paginatedProducts);
      renderPagination(processedProducts.length);
    }

    categoryFilters.forEach(filter => {
      filter.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.classList.contains('active')) return;
        categoryFilters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        currentPage = 1;
        updateShopView();
      });
    });

    sortNav.addEventListener('click', function (e) {
      e.preventDefault();
      const targetLink = e.target.closest('.nav-link');
      if (!targetLink) return;

      const newSortType = targetLink.dataset.sort;
      let currentSortType = this.dataset.sortType;
      let currentDirection = this.dataset.sortDirection || 'asc';
      let newDirection = 'asc';

      if (newSortType !== 'featured' && newSortType === currentSortType) {
        newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
      }

      this.dataset.sortType = newSortType;
      this.dataset.sortDirection = newDirection;

      sortNav.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.sort === 'a-z') {
          link.innerHTML = 'A to Z'; 
        }
        if (link.dataset.sort === 'price') {
          link.innerHTML = 'Price'; 
        }
      });

      targetLink.classList.add('active');

      if (newSortType === 'a-z') {
        targetLink.innerHTML = (newDirection === 'asc' ? 'A to Z' : 'Z to A');
      } else if (newSortType === 'price') {
        const arrow = newDirection === 'asc'
          ? '<span class="sort-indicator"><i class="fas fa-arrow-up"></i></span>'
          : '<span class="sort-indicator"><i class="fas fa-arrow-down"></i></span>';
        targetLink.innerHTML = `Price${arrow}`;
      }

      currentPage = 1;
      updateShopView();
    });

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      currentPage = 1;
      updateShopView();
    });

    searchInput.addEventListener('input', () => {
      currentPage = 1;
      updateShopView();
    });

    updateShopView();
  }

  const themeToggleButton = document.getElementById("toggle-theme-btn");

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('theme-dark');
  }

  themeToggleButton.addEventListener("click", function () {
    document.body.classList.toggle("theme-dark");

    if (document.body.classList.contains("theme-dark")) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  });

  function setupLanguageSwitcher() {
    const languageButtons = document.querySelectorAll("[data-lang]");
    const translatableElements = document.querySelectorAll("[data-lang-en], [data-lang-es]");

    function changeLanguage(lang) {
      if (!['en', 'es'].includes(lang)) return;

      translatableElements.forEach(element => {
        const text = element.getAttribute(`data-lang-${lang}`);
        if (text) {
          element.innerHTML = text;
        }
      });
      localStorage.setItem('preferredLanguage', lang);
    }

    languageButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
  }

});
