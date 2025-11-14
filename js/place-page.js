// js/place-page.js

const currencySelect = document.getElementById("currency-select");
const placeDetailContainer = document.getElementById("place-detail");
const sidebarList = document.getElementById("place-sidebar-list");

// PLACE_ID is set in each placeX.html page on window.PLACE_ID
const placeIdFromPage = window.PLACE_ID || 1;

function convertAmount(amountInBase, targetCurrency) {
  const rate = currencyRates[targetCurrency] || 1;
  return amountInBase * rate;
}

function formatCurrency(amount, currency) {
  return amount.toFixed(0) + " " + currency;
}

function renderSidebar() {
  if (!sidebarList) return;
  sidebarList.innerHTML = "";
  placeCosts.forEach((p) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = `${p.id}. ${p.place}`;
    a.href = `place${p.id}.html`;
    if (p.id === placeIdFromPage) {
      a.classList.add("active");
    }
    li.appendChild(a);
    sidebarList.appendChild(li);
  });
}

function renderPlacePage(selectedCurrency = baseCurrency) {
  const place =
    placeCosts.find((p) => p.id === placeIdFromPage) || placeCosts[0];

  // ---- Budget conversions ----
  const baseTotal =
    place.room + place.food + place.transport + place.activities;

  const room = convertAmount(place.room, selectedCurrency);
  const food = convertAmount(place.food, selectedCurrency);
  const transport = convertAmount(place.transport, selectedCurrency);
  const activities = convertAmount(place.activities, selectedCurrency);
  const total = convertAmount(baseTotal, selectedCurrency);

  // ---- Tourist places list (with currency conversion) ----
  let touristListHtml = "";

  if (place.placesDetails && place.placesDetails.length > 0) {
    touristListHtml = place.placesDetails
      .map((p) => {
        let priceText = "– Free Entry";
        if (p.price && p.price > 0) {
          const converted = convertAmount(p.price, selectedCurrency);
          priceText = "– " + formatCurrency(converted, selectedCurrency);
        }
        return `
          <li class="tourist-item">
            <strong>${p.name}</strong> ${priceText}<br>
            <span class="t-location">Location: ${p.location}</span><br>
            <a href="${p.map}" target="_blank" rel="noopener noreferrer">
              Open in Maps
            </a><br>
            <small class="t-desc">${p.desc}</small>
          </li>
        `;
      })
      .join("");
  } else if (place.highlights && place.highlights.length > 0) {
    // fallback if placesDetails not defined
    touristListHtml = place.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");
  } else {
    touristListHtml = "<li>No tourist places added yet.</li>";
  }

  // ---- Render full detail layout ----
  placeDetailContainer.innerHTML = `
    <div class="detail-layout">
      <article class="detail-text">
        <h2>About ${place.place}</h2>
        <p>${place.about}</p>

        <div class="detail-meta-row">
          <span><strong>Nights:</strong> ${place.nights}</span>
          <span><strong>Location:</strong> ${place.location}</span>
          <a href="${place.mapUrl}" target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>

        <h3>Tourist Places</h3>
        <ul class="tourist-list">
          ${touristListHtml}
        </ul>

        <h3>Budget Breakdown (${selectedCurrency})</h3>
        <table class="budget-table">
          <tbody>
            <tr>
              <td>Room</td>
              <td>${formatCurrency(room, selectedCurrency)}</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>${formatCurrency(food, selectedCurrency)}</td>
            </tr>
            <tr>
              <td>Transport</td>
              <td>${formatCurrency(transport, selectedCurrency)}</td>
            </tr>
            <tr>
              <td>Activities</td>
              <td>${formatCurrency(activities, selectedCurrency)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>${formatCurrency(total, selectedCurrency)}</td>
            </tr>
          </tfoot>
        </table>
      </article>

      <aside class="detail-image-card">
        <img src="${place.image}" alt="${place.place} image" />
        <div class="caption">
          ${place.place} 
        </div>
      </aside>
    </div>
  `;
}

// Currency dropdown
if (currencySelect) {
  currencySelect.addEventListener("change", () => {
    renderPlacePage(currencySelect.value);
  });
}

// Initial render
renderSidebar();
renderPlacePage(currencySelect ? currencySelect.value : baseCurrency);
