document.addEventListener("DOMContentLoaded", function () {
  // ==================== CONFIGURACIÓN DE PRODUCTOS ====================
  const allProducts = [
    {
      id: 1,
      name: { en: 'Silver Rings', es: 'Anillos de plata' },
      price: 350,
      category: 'rings',
      img: './assets/img/productos/anillos/1.jpg',
      description: {
        en: 'Elegant 925 silver ring, perfect for any occasion. Classic and timeless design that highlights the beauty of your hands.',
        es: 'Elegante anillo de plata 925, perfecto para cualquier ocasión. Diseño clásico y atemporal que resalta la belleza de tus manos.'
      },
      color: { en: 'Silver', es: 'Plata' },
      specifications: {
        en: [
          'Material: 925 Silver',
          'Adjustable size',
          'Hypoallergenic',
          'Handmade',
          'Includes gift box'
        ],
        es: [
          'Material: Plata 925',
          'Tamaño ajustable',
          'Hipoalergénico',
          'Hecho a mano',
          'Incluye estuche de regalo'
        ]
      },
      images: [
        'assets/img/productos/anillos/1.jpg',
        'assets/img/productos/anillos/2.jpg',
        'assets/img/productos/anillos/3.jpg'
      ]
    },
    {
      id: 2,
      name: { en: 'Gold Rings', es: 'Anillos de oro' },
      price: 480,
      category: 'rings',
      img: './assets/img/productos/anillos/5.jpg',
      description: {
        en: 'Exclusive 18k gold ring, ideal for special occasions. Incomparable shine and elegance.',
        es: 'Exclusivo anillo de oro 18k, ideal para ocasiones especiales. Brillo y elegancia incomparables.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Adjustable size',
          'Hypoallergenic',
          'Handmade',
          'Includes luxury box'
        ],
        es: [
          'Material: Oro 18k',
          'Tamaño ajustable',
          'Hipoalergénico',
          'Hecho a mano',
          'Incluye estuche de lujo'
        ]
      },
      images: [
        'assets/img/productos/anillos/5.jpg',
        'assets/img/productos/anillos/4.jpg',
        'assets/img/productos/anillos/6.jpg'
      ]
    },
    {
      id: 3,
      name: { en: 'Gold Crosses', es: 'Cruces de oro' },
      price: 520,
      category: 'necklaces',
      img: './assets/img/productos/collares/11.jpg',
      description: {
        en: 'Beautiful 18k gold cross, symbol of faith and elegance. Perfect to give as a gift or wear on special occasions.',
        es: 'Hermosa cruz de oro 18k, símbolo de fe y elegancia. Perfecta para regalar o lucir en ocasiones especiales.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Chain included',
          'Hypoallergenic',
          'Handmade',
          'Includes luxury box'
        ],
        es: [
          'Material: Oro 18k',
          'Cadena incluida',
          'Hipoalergénico',
          'Hecho a mano',
          'Incluye estuche de lujo'
        ]
      },
      images: [
        'assets/img/productos/collares/11.jpg',
        'assets/img/productos/collares/12.jpg',
        'assets/img/productos/collares/13.jpg'
      ]
    },
    {
      id: 4,
      name: { en: 'Gold Hearts', es: 'Corazones de oro' },
      price: 620,
      category: 'necklaces',
      img: './assets/img/productos/collares/9.jpg',
      description: {
        en: '18k gold heart necklace, romantic and elegant design. Ideal to give to someone special or wear on unique occasions.',
        es: 'Collar de corazones de oro 18k, diseño romántico y elegante. Ideal para regalar a alguien especial o lucir en ocasiones únicas.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          '45cm chain included',
          'Hypoallergenic',
          'Handmade',
          'Includes luxury box'
        ],
        es: [
          'Material: Oro 18k',
          'Cadena de 45cm incluida',
          'Hipoalergénico',
          'Hecho a mano',
          'Incluye estuche de lujo'
        ]
      },
      images: [
        'assets/img/productos/collares/2.jpg',
        'assets/img/productos/collares/9.jpg',
        'assets/img/productos/collares/14.jpg'
      ]
    },
    {
      id: 5,
      name: { en: 'Gold Virgin Mary', es: 'Vírgenes de oro' },
      price: 850,
      category: 'necklaces',
      img: './assets/img/productos/collares/1.jpg',
      description: {
        en: '18k gold Virgin Mary necklace, symbol of protection and faith. Unique and elegant piece for special occasions.',
        es: 'Collar Virgen de oro 18k, símbolo de protección y fe. Pieza única y elegante para ocasiones especiales.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          '45cm chain included',
          'Hypoallergenic',
          'Handmade',
          'Includes luxury box'
        ],
        es: [
          'Material: Oro 18k',
          'Cadena de 45cm incluida',
          'Hipoalergénico',
          'Hecho a mano',
          'Incluye estuche de lujo'
        ]
      },
      images: [
        'assets/img/productos/collares/1.jpg',
        'assets/img/productos/collares/5.jpg',
        'assets/img/productos/collares/8.jpg'
      ]
    },
    {
      id: 6,
      name: { en: 'Gold Shell Necklaces', es: 'Collares estilo conchas de oro' },
      price: 780,
      category: 'necklaces',
      img: 'assets/img/productos/collares/4.jpg',
      description: {
        en: '18k gold necklace with shell design, elegant and summery. Perfect to stand out on any occasion.',
        es: 'Collar de oro 18k con diseño de conchas, elegante y veraniego. Perfecto para destacar en cualquier ocasión.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Shell design',
          'Chain included',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Diseño de conchas',
          'Cadena incluida',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/collares/4.jpg',
        'assets/img/productos/collares/3.jpg'
      ]
    },
    {
      id: 7,
      name: { en: 'Van Cleef Style Necklaces', es: 'Collares estilo van cleef' },
      price: 950,
      category: 'necklaces',
      img: 'assets/img/productos/collares/6.jpg',
      description: {
        en: '18k gold Van Cleef style necklace, elegant and sophisticated. Ideal for special occasions.',
        es: 'Collar de oro 18k estilo Van Cleef, elegante y sofisticado. Ideal para ocasiones especiales.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Van Cleef inspired design',
          'Adjustable',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Diseño inspirado en Van Cleef',
          'Ajustable',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/collares/6.jpg',
        'assets/img/productos/collares/7.jpg'
      ]
    },
    {
      id: 8,
      name: { en: 'Gold Charms', es: 'Dijes de oro' },
      price: 420,
      category: 'pendants',
      img: './assets/img/productos/dijes/2.jpg',
      description: {
        en: '18k gold charm, elegant and versatile for any occasion. A touch of distinction for your favorite chain.',
        es: 'Dije de oro 18k, elegante y versátil para cualquier ocasión. Un toque de distinción para tu cadena favorita.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Classic design',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Diseño clásico',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/dijes/2.jpg',
        'assets/img/productos/dijes/3.jpg',
        'assets/img/productos/dijes/8.jpg'
      ]
    },
    {
      id: 9,
      name: { en: 'Assorted Charms', es: 'Dijes variados' },
      price: 350,
      category: 'pendants',
      img: './assets/img/productos/dijes/1.jpg',
      description: {
        en: 'Collection of assorted 18k gold charms, ideal to personalize your style and combine with different chains.',
        es: 'Colección de dijes variados en oro 18k, ideales para personalizar tu estilo y combinar con diferentes cadenas.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Various designs',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Varios diseños',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/dijes/1.jpg',
        'assets/img/productos/dijes/5.jpg'
      ]
    },
    {
      id: 10,
      name: { en: 'Religious Gold Charms', es: 'Dijes religiosos de oro' },
      price: 480,
      category: 'pendants',
      img: './assets/img/productos/dijes/4.jpg',
      description: {
        en: 'Religious charms in 18k gold, symbols of faith and protection. Perfect to express your spirituality with elegance.',
        es: 'Dijes religiosos en oro 18k, símbolos de fe y protección. Perfectos para expresar tu espiritualidad con elegancia.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Religious motifs',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Motivos religiosos',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/dijes/4.jpg',
        'assets/img/productos/dijes/6.jpg',
        'assets/img/productos/dijes/7.jpg'
      ]
    },
    {
      id: 11,
      name: { en: 'Classic Gold Bracelet', es: 'Pulsera de oro clásica' },
      price: 690,
      category: 'bracelets',
      img: './assets/img/productos/pulseras/1.jpg',
      description: {
        en: '18k gold bracelet, classic and elegant design for any occasion. An essential basic in your collection.',
        es: 'Pulsera de oro 18k, diseño clásico y elegante para cualquier ocasión. Un básico imprescindible en tu colección.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Classic design',
          'Adjustable',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Diseño clásico',
          'Ajustable',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/pulseras/1.jpg',
        'assets/img/productos/pulseras/3.jpg',
        'assets/img/productos/pulseras/5.jpg'
      ]
    },
    {
      id: 12,
      name: { en: 'Woven Bracelet', es: 'Pulsera tejida' },
      price: 520,
      category: 'bracelets',
      img: './assets/img/productos/pulseras/2.jpg',
      description: {
        en: 'Woven bracelet, mix of tradition and modernity. Ideal for those looking for an artisanal and sophisticated touch.',
        es: 'Pulsera tejida, mezcla de tradición y modernidad. Ideal para quienes buscan un toque artesanal y sofisticado.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Artisanal weaving',
          'Adjustable',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Tejido artesanal',
          'Ajustable',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/pulseras/2.jpg'
      ]
    },
    {
      id: 13,
      name: { en: 'Classic Pearl Bracelet', es: 'Pulsera de perlas clásica' },
      price: 430,
      category: 'bracelets',
      img: './assets/img/productos/pulseras/7.jpg',
      description: {
        en: 'Classic natural pearl bracelet, symbol of timeless elegance and sophistication.',
        es: 'Pulsera clásica de perlas naturales, símbolo de elegancia y sofisticación atemporal.'
      },
      color: { en: 'Pearl', es: 'Perla' },
      specifications: {
        en: [
          'Material: Natural pearls',
          '18k gold clasp',
          'Handmade',
          'Adjustable'
        ],
        es: [
          'Material: Perlas naturales',
          'Cierre de oro 18k',
          'Hecho a mano',
          'Ajustable'
        ]
      },
      images: [
        'assets/img/productos/pulseras/7.jpg',
        'assets/img/productos/pulseras/4.jpg'
      ]
    },
    {
      id: 14,
      name: { en: 'Modern Pearl Bracelet', es: 'Pulsera de perlas modernas' },
      price: 470,
      category: 'bracelets',
      img: './assets/img/productos/pulseras/6.jpg',
      description: {
        en: 'Pearl bracelet with modern design and gold details, perfect for a contemporary look.',
        es: 'Pulsera de perlas con diseño moderno y detalles en oro, perfecta para un look contemporáneo.'
      },
      color: { en: 'Pearl', es: 'Perla' },
      specifications: {
        en: [
          'Material: Natural pearls and 18k gold',
          'Modern design',
          'Handmade',
          'Adjustable'
        ],
        es: [
          'Material: Perlas naturales y oro 18k',
          'Diseño moderno',
          'Hecho a mano',
          'Ajustable'
        ]
      },
      images: [
        'assets/img/productos/pulseras/6.jpg'
      ]
    },
    {
      id: 15,
      name: { en: 'Tropical Style Gold Earrings', es: 'Zarcillos de oro estilo tropical' },
      price: 520,
      category: 'earrings',
      img: './assets/img/productos/zarcillos/6.jpg',
      description: {
        en: '18k gold earrings with tropical designs, ideal for a fresh and summery look.',
        es: 'Zarcillos de oro 18k con diseños tropicales, ideales para un look fresco y veraniego.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Tropical design',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Diseño tropical',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/zarcillos/3.jpg',
        'assets/img/productos/zarcillos/6.jpg',
        'assets/img/productos/zarcillos/5.jpg'
      ]
    },
    {
      id: 16,
      name: { en: 'Herbal Style Gold Earrings', es: 'Zarcillos de oro estilo herval' },
      price: 490,
      category: 'earrings',
      img: './assets/img/productos/zarcillos/1.jpg',
      description: {
        en: '18k gold earrings inspired by herbal shapes, elegant and delicate for any occasion.',
        es: 'Zarcillos de oro 18k inspirados en formas herbales, elegantes y delicados para cualquier ocasión.'
      },
      color: { en: 'Gold', es: 'Oro' },
      specifications: {
        en: [
          'Material: 18k Gold',
          'Herbal design',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Oro 18k',
          'Diseño herbal',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/zarcillos/1.jpg',
        'assets/img/productos/zarcillos/2.jpg',
        'assets/img/productos/zarcillos/7.jpg'
      ]
    },
    {
      id: 17,
      name: { en: 'Classic Silver Earrings', es: 'Zarcillos de plata clásicos' },
      price: 320,
      category: 'earrings',
      img: './assets/img/productos/zarcillos/4.jpg',
      description: {
        en: 'Classic 925 silver earrings, perfect for an elegant and timeless style.',
        es: 'Zarcillos clásicos de plata 925, perfectos para un estilo elegante y atemporal.'
      },
      color: { en: 'Silver', es: 'Plata' },
      specifications: {
        en: [
          'Material: 925 Silver',
          'Classic design',
          'Hypoallergenic',
          'Handmade'
        ],
        es: [
          'Material: Plata 925',
          'Diseño clásico',
          'Hipoalergénico',
          'Hecho a mano'
        ]
      },
      images: [
        'assets/img/productos/zarcillos/4.jpg'
      ]
    }
  ];

  // ==================== FUNCIÓN PARA OBTENER NOMBRE TRADUCIDO ====================
  function getTranslatedProductName(product, lang = 'en') {
    return typeof product.name === 'object' ? product.name[lang] : product.name;
  }

  // ==================== FUNCIÓN PARA GUARDAR PRODUCTO ====================
  function saveProductToLocalStorage(productId) {
    const product = allProducts.find(p => p.id == productId);
    if (product) {
      console.log('Guardando producto:', product);
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      return true;
    }
    console.error('Producto no encontrado:', productId);
    return false;
  }

  // ==================== CARGAR COMPONENTES ====================
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

  // ==================== VER MÁS BUTTON ====================
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

  // ==================== FAVICON ====================
  const faviconLink = document.createElement("link");
  faviconLink.rel = "shortcut icon";
  faviconLink.type = "image/x-icon";
  faviconLink.href = "assets/img/logo2.png";
  document.head.appendChild(faviconLink);

  // ==================== FLIP CARDS ====================
  const valueCards = document.querySelectorAll('.flip-card');
  valueCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // ==================== CARRITO DE COMPRAS ====================
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

  // ==================== EVENT DELEGATION ====================
  document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-eye') || e.target.closest('.fa-eye')) {
      e.preventDefault();
      e.stopPropagation();

      const eyeIcon = e.target.classList.contains('fa-eye') ? e.target : e.target.closest('.fa-eye');
      const card = eyeIcon.closest('.product-wap');

      if (card && card.dataset.id) {
        const productId = card.dataset.id;
        if (saveProductToLocalStorage(productId)) {
          setTimeout(() => {
            window.location.href = 'shop-single.html';
          }, 100);
        }
      }
      return;
    }

    if (e.target.classList.contains('fa-cart-plus') || e.target.closest('.add-to-cart-btn')) {
      e.preventDefault();
      e.stopPropagation();

      const addBtn = e.target.closest('.add-to-cart-btn');
      if (addBtn) {
        const card = addBtn.closest('.product-wap');
        if (card) {
          const product = {
            id: card.dataset.id,
            name: card.dataset.name,
            price: parseFloat(card.dataset.price),
            img: card.dataset.img,
          };
          addToCart(product);
        }
      }
      return;
    }

    if (e.target.closest('.h3.text-decoration-none')) {
      const nameLink = e.target.closest('.h3.text-decoration-none');
      e.preventDefault();
      e.stopPropagation();

      const card = nameLink.closest('.product-wap');
      if (card && card.dataset.id) {
        const productId = card.dataset.id;
        if (saveProductToLocalStorage(productId)) {
          setTimeout(() => {
            window.location.href = 'shop-single.html';
          }, 100);
        }
      }
      return;
    }

    if (e.target.closest('.remove-from-cart')) {
      e.preventDefault();
      e.stopPropagation();
      const cartItem = e.target.closest('.cart-item');
      const productId = cartItem.dataset.id;
      const itemIndex = cart.findIndex(item => item.id === productId);
      if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
      }
      updateCart();
      return;
    }

    if (e.target.closest('.quantity-change')) {
      e.preventDefault();
      e.stopPropagation();
      const quantityBtn = e.target.closest('.quantity-change');
      const cartItem = quantityBtn.closest('.cart-item');
      const productId = cartItem.dataset.id;
      const change = parseInt(quantityBtn.dataset.change);
      const itemInCart = cart.find(item => item.id === productId);
      if (itemInCart) {
        itemInCart.quantity += change;
        if (itemInCart.quantity <= 0) {
          cart = cart.filter(item => item.id !== productId);
        }
      }
      updateCart();
      return;
    }

    if (e.target.id === 'clear-cart-btn') {
      e.preventDefault();
      cart = [];
      updateCart();
      return;
    }

    if (e.target.closest('#checkout-btn')) {
      e.preventDefault();
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
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      mensaje += `\nTotal: ${total.toFixed(2)}`;

      const numero = '19452179299';
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
      return;
    }
  });

  // ==================== PÁGINA DE TIENDA (shop.html) ====================
  if (window.location.pathname.endsWith('shop.html')) {
    const productContainer = document.querySelector('.product-container');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const sortNav = document.querySelector('.shop-sort-nav');
    const paginationContainer = document.getElementById('pagination-container');
    const searchForm = document.getElementById('shop-search-form');
    const searchInput = document.getElementById('shop-search-input');

    let currentPage = 1;
    const itemsPerPage = 9;

    function renderProducts(productsToRender) {
      const currentLang = localStorage.getItem('preferredLanguage') || 'en';
      productContainer.innerHTML = '';
      if (productsToRender.length === 0) {
        const noProductsText = currentLang === 'es' ? 'No se encontraron productos.' : 'No products found.';
        productContainer.innerHTML = `<div class="col-12 text-center"><p>${noProductsText}</p></div>`;
        return;
      }
      productsToRender.forEach(product => {
        const productName = getTranslatedProductName(product, currentLang);
        const productHTML = `
          <div class="col-md-4 product-card" data-category="${product.category}">
            <div class="card mb-4 product-wap rounded-0" data-id="${product.id}" data-name="${productName}" data-price="${product.price}" data-img="${product.img}">
              <div class="card rounded-0">
                <div class="product-img-container">
                  <img class="card-img rounded-0 img-fluid" src="${product.img}">
                </div>
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul class="list-unstyled">
                    <li><a class="btn btn-success text-white mt-2 view-product-btn" href="#" data-product-id="${product.id}"><i class="far fa-eye"></i></a></li>
                    <li><a class="btn btn-success text-white mt-2 add-to-cart-btn" href="#"><i class="fas fa-cart-plus"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="card-body text-center">
                <a href="#" class="h3 text-decoration-none">${productName}</a>
                <p class="mb-0">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        `;
        productContainer.innerHTML += productHTML;
      });

      document.querySelectorAll('.view-product-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const productId = this.dataset.productId;
          if (productId && saveProductToLocalStorage(productId)) {
            window.location.href = 'shop-single.html';
          }
        });
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
      const currentLang = localStorage.getItem('preferredLanguage') || 'en';
      const activeCategory = document.querySelector('.category-filter.active').dataset.filter;
      const searchTerm = searchInput.value.toLowerCase().trim();
      const sortType = sortNav.dataset.sortType || 'featured';
      const sortDirection = sortNav.dataset.sortDirection || 'asc';

      let processedProducts = [...allProducts];
      if (activeCategory !== 'all') {
        processedProducts = processedProducts.filter(p => p.category === activeCategory);
      }
      if (searchTerm) {
        processedProducts = processedProducts.filter(p => {
          const name = getTranslatedProductName(p, currentLang);
          return name.toLowerCase().includes(searchTerm);
        });
      }

      switch (sortType) {
        case 'a-z':
          processedProducts.sort((a, b) => {
            const nameA = getTranslatedProductName(a, currentLang);
            const nameB = getTranslatedProductName(b, currentLang);
            return nameA.localeCompare(nameB);
          });
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

  // ==================== TEMA OSCURO ====================
  const themeToggleButton = document.getElementById("toggle-theme-btn");

  if (themeToggleButton) {
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
  }

  // ==================== CAMBIO DE IDIOMA ====================
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

        // Para placeholders
        const placeholder = element.getAttribute(`data-lang-placeholder-${lang}`);
        if (placeholder) {
          element.placeholder = placeholder;
        }
      });

      localStorage.setItem('preferredLanguage', lang);

      // Re-renderizar productos si estamos en shop.html
      if (window.location.pathname.endsWith('shop.html')) {
        updateShopView();
      }

      // Actualizar shop-single.html si estamos allí
      if (window.location.pathname.endsWith('shop-single.html')) {
        updateProductDetails(lang);
      }
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

  // ==================== ACTUALIZAR DETALLES DEL PRODUCTO (shop-single) ====================
  function updateProductDetails(lang) {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) return;

    const nameElem = document.getElementById('product-name');
    const descElem = document.getElementById('product-description');
    const colorElem = document.getElementById('product-color');
    const specsElem = document.getElementById('product-specs');

    if (nameElem && product.name) {
      const name = typeof product.name === 'object' ? product.name[lang] : product.name;
      nameElem.textContent = name;
    }

    if (descElem && product.description) {
      const desc = typeof product.description === 'object' ? product.description[lang] : product.description;
      descElem.textContent = desc;
    }

    if (colorElem && product.color) {
      const color = typeof product.color === 'object' ? product.color[lang] : product.color;
      colorElem.innerHTML = `<strong>${color}</strong>`;
    }

    if (specsElem && product.specifications) {
      const specs = typeof product.specifications === 'object' ? product.specifications[lang] : product.specifications;
      specsElem.innerHTML = '';
      specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsElem.appendChild(li);
      });
    }
  }

  // ==================== HACER FUNCIONES GLOBALES ====================
  window.updateCart = updateCart;
  window.addToCart = addToCart;
  window.updateProductDetails = updateProductDetails;
});