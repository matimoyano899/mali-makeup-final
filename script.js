const WHATSAPP_NUMBER = "5492284474174";

const products = [
    {
        id: 1,
        name: "Magnum Big Shot Slender",
        category: "ojos",
        categoryLabel: "Ojos",
        price: 8000,
        image: "assets/images/mascara-slender.webp",
        description: "Máscara waterproof con cepillo delgado para mayor precisión y definición.",
        features: [
            "Cepillo delgado",
            "Acabado definido",
            "Fórmula waterproof"
        ],
        badge: "Sin stock",
        inStock: false
    },
    {
        id: 2,
        name: "Magnum Big Shot Thick",
        category: "ojos",
        categoryLabel: "Ojos",
        price: 8000,
        image: "assets/images/mascara-thick.webp",
        description: "Máscara con cepillo grueso para aportar volumen y una mirada intensa.",
        features: [
            "Cepillo grueso",
            "Efecto volumen",
            "Fórmula waterproof"
        ],
        badge: "Destacado",
        inStock: true
    },
    {
        id: 3,
        name: "Magnum Big Shot Curl",
        category: "ojos",
        categoryLabel: "Ojos",
        price: 8000,
        image: "assets/images/mascara-curl.webp",
        description: "Cepillo curvo diseñado para levantar, separar y rizar las pestañas.",
        features: [
            "Cepillo curvo",
            "Efecto rizado",
            "Larga duración"
        ],
        badge: "Sin stock",
        inStock: false
    },
    {
        id: 4,
        name: "Silk Skin Labial Mate",
        category: "labios",
        categoryLabel: "Labios",
        price: 7200,
        image: "assets/images/silk-skin.webp",
        description: "Labial líquido en tono nude con acabado mate suave y elegante.",
        features: [
            "Acabado mate",
            "Tono nude",
            "Aplicador de precisión"
        ],
        badge: "Nuevo",
        inStock: true
    },
    {
        id: 5,
        name: "Silk Skin Nude Intenso",
        category: "labios",
        categoryLabel: "Labios",
        price: 7200,
        image: "assets/images/silk-skin-model.webp",
        description: "Labial líquido nude intenso para un look definido y sofisticado.",
        features: [
            "Color intenso",
            "Acabado uniforme",
            "Aplicación sencilla"
        ],
        badge: "Recomendado",
        inStock: true
    },
    {
        id: 6,
        name: "Obsidian Crème Lip",
        category: "labios",
        categoryLabel: "Labios",
        price: 8700,
        image: "assets/images/obsidian.webp",
        description: "Labial líquido cremoso en tono marrón con brillo elegante.",
        features: [
            "Textura cremosa",
            "Tono marrón",
            "Efecto brillante"
        ],
        badge: "Sin stock",
        inStock: false
    },
    {
        id: 7,
        name: "TEI Matte Lip Gloss",
        category: "labios",
        categoryLabel: "Labios",
        price: 5800,
        image: "assets/images/matte-lip-gloss.webp",
        description: "Gloss mate rosa para un acabado delicado y moderno.",
        features: [
            "Tono rosa",
            "Acabado mate",
            "Aplicador cómodo"
        ],
        badge: "Nuevo",
        inStock: true
    },
    {
        id: 8,
        name: "Ruby Rose Glass",
        category: "labios",
        categoryLabel: "Labios",
        price: 8800,
        image: "assets/images/ruby-rose-glass.webp",
        description: "Brillo labial Ruby Rose con efecto glass y acabado luminoso.",
        features: [
            "Efecto glass",
            "Brillo luminoso",
            "Textura suave"
        ],
        badge: "Favorito",
        inStock: true
    },
    {
        id: 9,
        name: "Kit 4 Angels Brillo Labial",
        category: "kits",
        categoryLabel: "Kits",
        price: 10000,
        image: "assets/images/kit-angels.webp",
        description: "Kit con cuatro brillos labiales de colores surtidos.",
        features: [
            "Cuatro unidades",
            "Colores surtidos",
            "Presentación para regalo"
        ],
        badge: "Kit",
        inStock: true
    },
    {
        id: 10,
        name: "Kit Angels Accesorios",
        category: "kits",
        categoryLabel: "Kits",
        price: 8000,
        image: "assets/images/kit-accesorios.webp",
        description: "Set de accesorios rosas con brillo labial, vincha y complementos.",
        features: [
            "Accesorios combinados",
            "Brillo labial incluido",
            "Ideal para regalo"
        ],
        badge: "Kit",
        inStock: true
    },
    {
        id: 11,
        name: "Kit Completo de Maquillaje",
        category: "kits",
        categoryLabel: "Kits",
        price: 22500,
        image: "assets/images/kit-completo.webp",
        description: "Combo con máscara, base y set para labios en bolsa reutilizable.",
        features: [
            "Máscara incluida",
            "Base de maquillaje",
            "Productos para labios"
        ],
        badge: "Combo",
        inStock: true
    },
    {
        id: 12,
        name: "Kit Máscara + Matte Lip Gloss",
        category: "kits",
        categoryLabel: "Kits",
        price: 12500,
        image: "assets/images/kit-mascara-gloss.webp",
        description: "Combo de máscara Magnum Big Shot y gloss mate en tono rosa.",
        features: [
            "Dos productos",
            "Máscara de pestañas",
            "Gloss mate"
        ],
        badge: "Combo",
        inStock: true
    }
];

let activeFilter = "todos";
let searchTerm = "";
let cart = loadCart();
let toastTimer;

const elements = {
    productsGrid: document.getElementById("productsGrid"),
    emptyState: document.getElementById("emptyState"),
    searchInput: document.getElementById("searchInput"),
    filterButtons: document.getElementById("filterButtons"),
    cartCount: document.getElementById("cartCount"),
    cartDrawer: document.getElementById("cartDrawer"),
    openCartButton: document.getElementById("openCartButton"),
    closeCartButton: document.getElementById("closeCartButton"),
    cartItems: document.getElementById("cartItems"),
    cartEmpty: document.getElementById("cartEmpty"),
    cartFooter: document.getElementById("cartFooter"),
    cartTotal: document.getElementById("cartTotal"),
    checkoutButton: document.getElementById("checkoutButton"),
    clearCartButton: document.getElementById("clearCartButton"),
    overlay: document.getElementById("overlay"),
    productModal: document.getElementById("productModal"),
    modalContent: document.getElementById("modalContent"),
    closeModalButton: document.getElementById("closeModalButton"),
    toast: document.getElementById("toast"),
    siteHeader: document.getElementById("siteHeader"),
    backToTop: document.getElementById("backToTop"),
    menuButton: document.getElementById("menuButton"),
    mobileNav: document.getElementById("mobileNav"),
    accordion: document.getElementById("accordion"),
    currentYear: document.getElementById("currentYear")
};

function formatPrice(value) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(value);
}

function normalizeText(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem("maliMakeupCart");
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.filter((item) => {
            const product = products.find((productItem) => productItem.id === item.productId);
            const hasValidQuantity = Number.isInteger(item.quantity) && item.quantity > 0;

            return product && product.inStock && hasValidQuantity;
        });
    } catch (error) {
        console.warn("No se pudo cargar el carrito guardado.", error);
        return [];
    }
}

function saveCart() {
    localStorage.setItem("maliMakeupCart", JSON.stringify(cart));
}

function getFilteredProducts() {
    const normalizedSearch = normalizeText(searchTerm.trim());

    return products.filter((product) => {
        const matchesCategory = activeFilter === "todos" || product.category === activeFilter;
        const searchableText = normalizeText(`${product.name} ${product.description} ${product.categoryLabel}`);
        const matchesSearch = searchableText.includes(normalizedSearch);

        return matchesCategory && matchesSearch;
    });
}

function createProductCard(product) {
    const stockClass = product.inStock ? "" : "out-of-stock";
    const buttonText = product.inStock ? "Agregar" : "Sin stock";
    const disabledAttribute = product.inStock ? "" : "disabled";

    return `
        <article class="product-card reveal visible">
            <div class="product-image-wrap" data-product-id="${product.id}" role="button" tabindex="0" aria-label="Ver detalle de ${product.name}">
                <span class="product-badge ${stockClass}">${product.badge}</span>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="quick-view-button" type="button" data-view-product="${product.id}" aria-label="Ver detalle de ${product.name}">＋</button>
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-bottom">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-button" type="button" data-add-product="${product.id}" ${disabledAttribute}>${buttonText}</button>
                </div>
            </div>
        </article>
    `;
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();

    elements.productsGrid.innerHTML = filteredProducts
        .map(createProductCard)
        .join("");

    elements.emptyState.hidden = filteredProducts.length > 0;
}

function setActiveFilter(filter) {
    activeFilter = filter;

    document.querySelectorAll(".filter-button").forEach((button) => {
        button.classList.toggle("active", button.dataset.filter === filter);
    });

    renderProducts();
}

function addToCart(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product || !product.inStock) {
        return;
    }

    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    showToast(`${product.name} se agregó al carrito.`);
}

function updateQuantity(productId, change) {
    const item = cart.find((cartItem) => cartItem.productId === productId);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter((cartItem) => cartItem.productId !== productId);
    }

    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.productId !== productId);
    saveCart();
    renderCart();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    showToast("El carrito se vació.");
}

function getCartDetails() {
    return cart
        .map((item) => {
            const product = products.find((productItem) => productItem.id === item.productId);

            if (!product) {
                return null;
            }

            return {
                ...item,
                product,
                subtotal: product.price * item.quantity
            };
        })
        .filter(Boolean);
}

function renderCart() {
    const cartDetails = getCartDetails();
    const totalItems = cartDetails.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartDetails.reduce((total, item) => total + item.subtotal, 0);

    elements.cartCount.textContent = totalItems;
    elements.cartTotal.textContent = formatPrice(totalPrice);
    elements.cartEmpty.hidden = cartDetails.length > 0;
    elements.cartFooter.hidden = cartDetails.length === 0;

    elements.cartItems.innerHTML = cartDetails
        .map((item) => `
            <article class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}">
                <div>
                    <h4>${item.product.name}</h4>
                    <span class="cart-item-price">${formatPrice(item.product.price)}</span>
                    <div class="quantity-control" aria-label="Cantidad de ${item.product.name}">
                        <button type="button" data-decrease="${item.product.id}" aria-label="Disminuir cantidad">−</button>
                        <span>${item.quantity}</span>
                        <button type="button" data-increase="${item.product.id}" aria-label="Aumentar cantidad">+</button>
                    </div>
                </div>
                <button class="remove-item" type="button" data-remove="${item.product.id}" aria-label="Eliminar ${item.product.name}">×</button>
            </article>
        `)
        .join("");
}

function openCart() {
    closeMobileMenu();
    closeProductModal();
    elements.cartDrawer.classList.add("open");
    elements.cartDrawer.setAttribute("aria-hidden", "false");
    elements.overlay.classList.add("active");
    document.body.classList.add("no-scroll");
}

function closeCart() {
    elements.cartDrawer.classList.remove("open");
    elements.cartDrawer.setAttribute("aria-hidden", "true");
    elements.overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
}

function openProductModal(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product) {
        return;
    }

    const featuresMarkup = product.features
        .map((feature) => `<span>${feature}</span>`)
        .join("");

    const buttonMarkup = product.inStock
        ? `<button class="primary-button" type="button" data-modal-add="${product.id}">Agregar al carrito</button>`
        : `<button class="primary-button" type="button" disabled>Producto sin stock</button>`;

    elements.modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <strong class="modal-price">${formatPrice(product.price)}</strong>
                <div class="modal-features">${featuresMarkup}</div>
                ${buttonMarkup}
            </div>
        </div>
    `;

    elements.productModal.classList.add("open");
    elements.productModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
}

function closeProductModal() {
    elements.productModal.classList.remove("open");
    elements.productModal.setAttribute("aria-hidden", "true");

    if (!elements.cartDrawer.classList.contains("open")) {
        document.body.classList.remove("no-scroll");
    }
}

function checkoutWithWhatsApp() {
    const cartDetails = getCartDetails();

    if (cartDetails.length === 0) {
        showToast("Agregá al menos un producto antes de finalizar.");
        return;
    }

    const total = cartDetails.reduce((sum, item) => sum + item.subtotal, 0);
    const productLines = cartDetails
        .map((item) => `• ${item.product.name} x${item.quantity} — ${formatPrice(item.subtotal)}`)
        .join("\n");

    const message = [
        "Hola Mali Make Up 👋",
        "",
        "Quiero realizar el siguiente pedido:",
        "",
        productLines,
        "",
        `Total estimado: ${formatPrice(total)}`,
        "",
        "¿Me confirmás disponibilidad y cómo coordinamos la entrega?"
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("show");

    toastTimer = window.setTimeout(() => {
        elements.toast.classList.remove("show");
    }, 2600);
}

function toggleMobileMenu() {
    const isOpen = elements.mobileNav.classList.toggle("open");
    elements.menuButton.classList.toggle("active", isOpen);
    elements.menuButton.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
    elements.mobileNav.classList.remove("open");
    elements.menuButton.classList.remove("active");
    elements.menuButton.setAttribute("aria-expanded", "false");
}

function initializeAccordion() {
    elements.accordion.addEventListener("click", (event) => {
        const trigger = event.target.closest(".accordion-trigger");

        if (!trigger) {
            return;
        }

        const item = trigger.closest(".accordion-item");
        const content = item.querySelector(".accordion-content");
        const isOpen = item.classList.contains("open");

        document.querySelectorAll(".accordion-item.open").forEach((openItem) => {
            if (openItem !== item) {
                openItem.classList.remove("open");
                openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
                openItem.querySelector(".accordion-content").style.maxHeight = null;
            }
        });

        item.classList.toggle("open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        content.style.maxHeight = isOpen ? null : `${content.scrollHeight}px`;
    });
}

function initializeRevealAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
}

function handleScroll() {
    const isScrolled = window.scrollY > 20;
    elements.siteHeader.classList.toggle("scrolled", isScrolled);
    elements.backToTop.classList.toggle("visible", window.scrollY > 700);
}

function handleProductsClick(event) {
    const addButton = event.target.closest("[data-add-product]");
    const viewButton = event.target.closest("[data-view-product]");
    const imageWrap = event.target.closest("[data-product-id]");

    if (addButton) {
        addToCart(Number(addButton.dataset.addProduct));
        return;
    }

    if (viewButton) {
        openProductModal(Number(viewButton.dataset.viewProduct));
        return;
    }

    if (imageWrap) {
        openProductModal(Number(imageWrap.dataset.productId));
    }
}

function initializeEvents() {
    elements.searchInput.addEventListener("input", (event) => {
        searchTerm = event.target.value;
        renderProducts();
    });

    elements.filterButtons.addEventListener("click", (event) => {
        const filterButton = event.target.closest("[data-filter]");

        if (filterButton) {
            setActiveFilter(filterButton.dataset.filter);
        }
    });

    document.querySelectorAll("[data-category-link]").forEach((button) => {
        button.addEventListener("click", () => {
            setActiveFilter(button.dataset.categoryLink);
            document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
        });
    });

    elements.productsGrid.addEventListener("click", handleProductsClick);

    elements.productsGrid.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            const imageWrap = event.target.closest("[data-product-id]");

            if (imageWrap) {
                event.preventDefault();
                openProductModal(Number(imageWrap.dataset.productId));
            }
        }
    });

    elements.cartItems.addEventListener("click", (event) => {
        const increaseButton = event.target.closest("[data-increase]");
        const decreaseButton = event.target.closest("[data-decrease]");
        const removeButton = event.target.closest("[data-remove]");

        if (increaseButton) {
            updateQuantity(Number(increaseButton.dataset.increase), 1);
        }

        if (decreaseButton) {
            updateQuantity(Number(decreaseButton.dataset.decrease), -1);
        }

        if (removeButton) {
            removeFromCart(Number(removeButton.dataset.remove));
        }
    });

    elements.modalContent.addEventListener("click", (event) => {
        const addButton = event.target.closest("[data-modal-add]");

        if (addButton) {
            addToCart(Number(addButton.dataset.modalAdd));
            closeProductModal();
            openCart();
        }
    });

    elements.openCartButton.addEventListener("click", openCart);
    elements.closeCartButton.addEventListener("click", closeCart);
    elements.overlay.addEventListener("click", closeCart);
    elements.checkoutButton.addEventListener("click", checkoutWithWhatsApp);
    elements.clearCartButton.addEventListener("click", clearCart);
    elements.closeModalButton.addEventListener("click", closeProductModal);

    elements.productModal.addEventListener("click", (event) => {
        if (event.target === elements.productModal) {
            closeProductModal();
        }
    });

    elements.menuButton.addEventListener("click", toggleMobileMenu);

    elements.mobileNav.addEventListener("click", (event) => {
        if (event.target.matches("a")) {
            closeMobileMenu();
        }
    });

    elements.backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1100) {
            closeMobileMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeCart();
            closeProductModal();
            closeMobileMenu();
        }
    });
}

function initializePage() {
    elements.currentYear.textContent = new Date().getFullYear();
    renderProducts();
    renderCart();
    initializeEvents();
    initializeAccordion();
    initializeRevealAnimations();
    handleScroll();
}

initializePage();
