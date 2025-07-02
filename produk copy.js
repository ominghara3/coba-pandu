// JavaScript akan diisi setelah
// Data produk unggulan
const featuredProducts = [
  {
    name: "Apel Fuji Premium",
    price: "Rp 25.000/kg",
    image: "https://images.unsplash.com/photo-1635865165118-917ed9e20936",
  },
  {
    name: "Bayam Segar",
    price: "Rp 8.000/ikat",
    image: "https://images.unsplash.com/photo-1635865165118-917ed9e20936",
  },
  {
    name: "Daging Sapi Premium",
    price: "Rp 120.000/kg",
    image: "https://images.unsplash.com/photo-1635865165118-917ed9e20936",
  },
  {
    name: "Jeruk Manis",
    price: "Rp 18.000/kg",
    image: "https://images.unsplash.com/photo-1635865165118-917ed9e20936",
  },
  {
    name: "Wortel Organik",
    price: "Rp 12.000/kg",
    image: "https://images.unsplash.com/photo-1635865165118-917ed9e20936",
  },
];

// Data kategori
const categories = [
  {
    name: "Buah-buahan",
    description: "Buah segar pilihan terbaik",
    image: "https://images.unsplash.com/photo-1661358789654-b6ab2cb6e0a3",
  },
  {
    name: "Sayuran",
    description: "Sayuran organik dan segar",
    image: "https://images.unsplash.com/photo-1661358789654-b6ab2cb6e0a3",
  },
  {
    name: "Daging",
    description: "Daging berkualitas premium",
    image: "https://images.unsplash.com/photo-1661358789654-b6ab2cb6e0a3",
  },
  {
    name: "Seafood",
    description: "Seafood segar dari laut",
    image: "https://images.unsplash.com/photo-1661358789654-b6ab2cb6e0a3",
  },
  {
    name: "Susu & Telur",
    description: "Produk susu dan telur segar",
    image: "https://images.unsplash.com/photo-1661358789654-b6ab2cb6e0a3",
  },
  {
    name: "Bumbu Dapur",
    description: "Bumbu dan rempah pilihan",
    image: "https://images.unsplash.com/photo-1661358789654-b6ab2cb6e0a3",
  },
];

let currentSlide = 0;

function renderSlider() {
  const wrapper = document.getElementById("slider-wrapper");
  wrapper.innerHTML = "";

  featuredProducts.forEach((product) => {
    const div = document.createElement("div");
    div.className = "slide";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="btn primary">Tambah ke Keranjang</button>
    `;
    wrapper.appendChild(div);
  });

  renderIndicators();
  updateSliderPosition();
}

function renderIndicators() {
  const indicators = document.getElementById("slide-indicators");
  indicators.innerHTML = "";
  for (let i = 0; i < featuredProducts.length; i++) {
    const btn = document.createElement("button");
    if (i === currentSlide) btn.classList.add("active");
    btn.onclick = () => {
      currentSlide = i;
      updateSliderPosition();
      renderIndicators();
    };
    indicators.appendChild(btn);
  }
}

function updateSliderPosition() {
  const wrapper = document.getElementById("slider-wrapper");
  const offset = currentSlide * 260; // slide width + margin
  wrapper.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % featuredProducts.length;
  updateSliderPosition();
  renderIndicators();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + featuredProducts.length) % featuredProducts.length;
  updateSliderPosition();
  renderIndicators();
}

function renderCategories() {
  const grid = document.getElementById("kategori-grid");
  categories.forEach((cat) => {
    const div = document.createElement("div");
    div.className = "kategori-item";
    div.innerHTML = `
      <img src="${cat.image}" alt="${cat.name}" />
      <div class="info">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
      </div>
    `;
    grid.appendChild(div);
  });
}

// Init
renderSlider();
renderCategories();
