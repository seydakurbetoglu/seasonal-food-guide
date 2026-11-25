const monthNames = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const foods = [
  {
    name: "Ispanak",
    category: "Sebze",
    months: [0, 1, 2, 10, 11],
    benefit: "Demir, folat ve K vitamini içerir; kış aylarında güçlü bir yeşil seçenektir.",
    storage: "Yıkamadan buzdolabı poşetinde sakla, 2-3 gün içinde tüket.",
    recipe: "Zeytinyağlı ıspanak veya yumurtalı ıspanak olarak hızlıca hazırlanabilir.",
  },
  {
    name: "Brokoli",
    category: "Sebze",
    months: [0, 1, 2, 10, 11],
    benefit: "C vitamini ve lif açısından zengindir.",
    storage: "Kapalı kapta buzdolabında tut, haşladıktan sonra bekletme.",
    recipe: "Yoğurtlu brokoli salatası veya fırında sarımsaklı brokoli iyi gider.",
  },
  {
    name: "Enginar",
    category: "Sebze",
    months: [2, 3, 4],
    benefit: "Lif ve antioksidan desteği sağlar.",
    storage: "Limonlu suda bekletip aynı gün pişirmek lezzetini korur.",
    recipe: "Zeytinyağlı enginar, bezelye ve dereotu ile servis edilebilir.",
  },
  {
    name: "Domates",
    category: "Sebze",
    months: [5, 6, 7, 8],
    benefit: "Likopen ve C vitamini içerir.",
    storage: "Oda sıcaklığında sakla; çok olgunlaştığında buzdolabına al.",
    recipe: "Çoban salata, menemen veya taze domates sosu için idealdir.",
  },
  {
    name: "Kabak",
    category: "Sebze",
    months: [4, 5, 6, 7, 8],
    benefit: "Hafif, su oranı yüksek ve düşük kalorili bir yaz sebzesidir.",
    storage: "Buzdolabında delikli poşette 4-5 gün saklanabilir.",
    recipe: "Mücver, kabak sandal veya yoğurtlu kabak salatası yapılabilir.",
  },
  {
    name: "Karnabahar",
    category: "Sebze",
    months: [0, 1, 10, 11],
    benefit: "Lifli yapısıyla tok tutar ve kış sofralarına uygundur.",
    storage: "Çiçeklerine ayırmadan buzdolabında sakla.",
    recipe: "Fırında baharatlı karnabahar veya karnabahar graten deneyebilirsin.",
  },
  {
    name: "Çilek",
    category: "Meyve",
    months: [3, 4, 5],
    benefit: "C vitamini yüksektir ve ilkbaharın en sevilen meyvelerindendir.",
    storage: "Yıkamadan sakla, tüketmeden hemen önce yıka.",
    recipe: "Yoğurt, yulaf ve bal ile pratik bir ara öğün yapılabilir.",
  },
  {
    name: "Kiraz",
    category: "Meyve",
    months: [5, 6],
    benefit: "Antioksidan içerir ve yaz başında tazeliği yüksektir.",
    storage: "Saplarını koparmadan buzdolabında sakla.",
    recipe: "Soğuk komposto veya sade atıştırmalık olarak tüketilebilir.",
  },
  {
    name: "Üzüm",
    category: "Meyve",
    months: [7, 8, 9],
    benefit: "Doğal şeker, potasyum ve antioksidan sağlar.",
    storage: "Yıkamadan kapalı kapta sakla, servis öncesi yıka.",
    recipe: "Peynir tabağına veya cevizli salatalara yakışır.",
  },
  {
    name: "Nar",
    category: "Meyve",
    months: [8, 9, 10, 11],
    benefit: "Antioksidan ve C vitamini desteği sunar.",
    storage: "Bütün halde serin yerde, ayıklanmış halde buzdolabında sakla.",
    recipe: "Salatalara, yoğurda veya kahvaltılık kaselere eklenebilir.",
  },
  {
    name: "Mandalina",
    category: "Meyve",
    months: [0, 1, 10, 11],
    benefit: "C vitamini açısından güçlü bir kış meyvesidir.",
    storage: "Serin ve kuru yerde sakla, ezilenleri ayır.",
    recipe: "Ara öğün olarak veya yeşil salatada ferah tat için kullan.",
  },
  {
    name: "Karpuz",
    category: "Meyve",
    months: [5, 6, 7],
    benefit: "Su oranı yüksektir, sıcak günlerde ferahlık sağlar.",
    storage: "Kesildikten sonra streçleyip buzdolabında tut.",
    recipe: "Beyaz peynir ve nane ile yaz salatası yapılabilir.",
  },
  {
    name: "Hamsi",
    category: "Balık",
    months: [0, 1, 10, 11],
    benefit: "Omega-3 ve protein bakımından değerlidir.",
    storage: "Satın alındığı gün pişir; bekleyecekse temizleyip dondur.",
    recipe: "Fırında hamsi veya hamsili pilav olarak hazırlanabilir.",
  },
  {
    name: "Palamut",
    category: "Balık",
    months: [8, 9, 10],
    benefit: "Sonbaharda lezzeti artan protein kaynaklarından biridir.",
    storage: "Buz üzerinde taşı, aynı gün pişirmeye çalış.",
    recipe: "Fırında soğanlı palamut veya palamut buğulama yapılabilir.",
  },
  {
    name: "Levrek",
    category: "Balık",
    months: [3, 4, 5, 6, 7, 8],
    benefit: "Hafif ve protein açısından iyi bir seçenektir.",
    storage: "Temizlenmiş halde buzdolabında en fazla 1 gün beklet.",
    recipe: "Izgara levrek veya kağıtta sebzeli levrek denenebilir.",
  },
];

const state = {
  month: new Date().getMonth(),
  category: "all",
  query: "",
  favorites: new Set(JSON.parse(localStorage.getItem("favorites") || "[]")),
  shopping: new Set(JSON.parse(localStorage.getItem("shopping") || "[]")),
};

const elements = {
  dateLabel: document.querySelector("#dateLabel"),
  monthTitle: document.querySelector("#monthTitle"),
  monthSelect: document.querySelector("#monthSelect"),
  searchInput: document.querySelector("#searchInput"),
  foodGrid: document.querySelector("#foodGrid"),
  resultCount: document.querySelector("#resultCount"),
  favoriteCount: document.querySelector("#favoriteCount"),
  seasonName: document.querySelector("#seasonName"),
  shoppingList: document.querySelector("#shoppingList"),
  shoppingEmpty: document.querySelector("#shoppingEmpty"),
  clearList: document.querySelector("#clearList"),
  clearFilters: document.querySelector("#clearFilters"),
  themeToggle: document.querySelector("#themeToggle"),
  dialog: document.querySelector("#detailDialog"),
  closeDialog: document.querySelector("#closeDialog"),
  detailCategory: document.querySelector("#detailCategory"),
  detailName: document.querySelector("#detailName"),
  detailMonths: document.querySelector("#detailMonths"),
  detailBenefit: document.querySelector("#detailBenefit"),
  detailStorage: document.querySelector("#detailStorage"),
  detailRecipe: document.querySelector("#detailRecipe"),
};

function getSeason(month) {
  if ([11, 0, 1].includes(month)) return "Kış";
  if ([2, 3, 4].includes(month)) return "İlkbahar";
  if ([5, 6, 7].includes(month)) return "Yaz";
  return "Sonbahar";
}

function saveSets() {
  localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("shopping", JSON.stringify([...state.shopping]));
}

function getVisibleFoods() {
  const query = state.query.trim().toLocaleLowerCase("tr-TR");
  return foods.filter((food) => {
    const matchesMonth = query.length > 0 || food.months.includes(state.month);
    const matchesCategory = state.category === "all" || food.category === state.category;
    const matchesQuery = food.name.toLocaleLowerCase("tr-TR").includes(query);
    return matchesMonth && matchesCategory && matchesQuery;
  });
}

function renderMonthOptions() {
  elements.monthSelect.innerHTML = monthNames
    .map((month, index) => `<option value="${index}">${month}</option>`)
    .join("");
  elements.monthSelect.value = String(state.month);
}

function renderCards() {
  const visibleFoods = getVisibleFoods();
  elements.foodGrid.innerHTML = "";

  if (visibleFoods.length === 0) {
    elements.foodGrid.innerHTML = '<p class="empty-note">Bu filtrelere uygun ürün bulunamadı.</p>';
  }

  visibleFoods.forEach((food) => {
    const card = document.createElement("article");
    card.className = "food-card";
    card.innerHTML = `
      <header>
        <div>
          <h3>${food.name}</h3>
          <p>${food.months.map((month) => monthNames[month]).join(", ")}</p>
        </div>
        <span class="category-pill">${food.category}</span>
      </header>
      <p>${food.benefit}</p>
      <div class="card-actions">
        <button type="button" data-action="add">${state.shopping.has(food.name) ? "Listede" : "Listeye ekle"}</button>
        <button class="favorite" type="button" data-action="favorite" aria-label="Favoriye ekle" title="Favoriye ekle">
          ${state.favorites.has(food.name) ? "★" : "☆"}
        </button>
      </div>
    `;

    card.addEventListener("click", (event) => {
      const action = event.target.dataset.action;
      if (action === "add") {
        state.shopping.add(food.name);
        saveSets();
        render();
        return;
      }

      if (action === "favorite") {
        state.favorites.has(food.name) ? state.favorites.delete(food.name) : state.favorites.add(food.name);
        saveSets();
        render();
        return;
      }

      openDetail(food);
    });

    elements.foodGrid.appendChild(card);
  });

  elements.resultCount.textContent = visibleFoods.length;
  elements.favoriteCount.textContent = state.favorites.size;
}

function renderShoppingList() {
  elements.shoppingList.innerHTML = "";
  elements.shoppingEmpty.classList.toggle("hidden", state.shopping.size > 0);

  [...state.shopping].forEach((name) => {
    const item = document.createElement("li");
    item.className = "list-item";
    item.innerHTML = `
      <span>${name}</span>
      <button type="button" aria-label="${name} ürününü kaldır" title="Kaldır">×</button>
    `;
    item.querySelector("button").addEventListener("click", () => {
      state.shopping.delete(name);
      saveSets();
      renderShoppingList();
    });
    elements.shoppingList.appendChild(item);
  });
}

function openDetail(food) {
  elements.detailCategory.textContent = food.category;
  elements.detailName.textContent = food.name;
  elements.detailMonths.textContent = `Mevsimi: ${food.months.map((month) => monthNames[month]).join(", ")}`;
  elements.detailBenefit.textContent = food.benefit;
  elements.detailStorage.textContent = food.storage;
  elements.detailRecipe.textContent = food.recipe;
  elements.dialog.showModal();
}

function renderHeader() {
  elements.dateLabel.textContent = `${monthNames[state.month]} ayı için öneriler`;
  elements.monthTitle.textContent = `${getSeason(state.month)} ürünleri`;
  elements.seasonName.textContent = getSeason(state.month);
}

function render() {
  renderHeader();
  renderCards();
  renderShoppingList();
}

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".segmented button.active").classList.remove("active");
    button.classList.add("active");
    state.category = button.dataset.category;
    renderCards();
  });
});

elements.monthSelect.addEventListener("change", (event) => {
  state.month = Number(event.target.value);
  render();
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

elements.clearFilters.addEventListener("click", () => {
  state.category = "all";
  state.query = "";
  elements.searchInput.value = "";
  document.querySelector(".segmented button.active").classList.remove("active");
  document.querySelector('[data-category="all"]').classList.add("active");
  renderCards();
});

elements.clearList.addEventListener("click", () => {
  state.shopping.clear();
  saveSets();
  renderShoppingList();
});

elements.themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "" : "dark";
  elements.themeToggle.querySelector("span").textContent = isDark ? "☾" : "☀";
});

elements.closeDialog.addEventListener("click", () => elements.dialog.close());

renderMonthOptions();
render();
