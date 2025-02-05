const slider = document.querySelector(".slider");
const subscriptionMode = document.querySelector(".subscription-mode");
const contentTitle = document.querySelector(".content-title");
const payments = document.querySelectorAll(".payment");
const months = document.querySelectorAll(".month");

let mode = false;

const content = {
  0: {
    "page-views": "10K pageviews",
    "per-month": "$8.00",
    "per-year": "$72.00",
  },
  25: {
    "page-views": "50K pageviews",
    "per-month": "$12.00",
    "per-year": "$108.00",
  },
  50: {
    "page-views": "100K pageviews",
    "per-month": "$16.00",
    "per-year": "$144.00",
  },
  75: {
    "page-views": "500K pageviews",
    "per-month": "$24.00",
    "per-year": "$216.00",
  },
  100: {
    "page-views": "1M pageviews",
    "per-month": "$36.00",
    "per-year": "$324.00",
  },
};

const stepValues = [0, 25, 50, 75, 100];

function updatePricing() {
  const value = stepValues[slider.value];
  contentTitle.textContent = content[value]["page-views"];
  payments.forEach((payment) => {
    payment.textContent = content[value][mode ? "per-year" : "per-month"];
  });
  months.forEach((month) => {
    month.textContent = mode ? "/ year" : "/ month";
  });
  const percentage = (slider.value / slider.max) * 100;
  slider.style.background = `linear-gradient(to right, var(--strong-cyan) ${percentage}%, var(--light-grayish-blue-empty-slider) ${percentage}%)`;
}

slider.addEventListener("input", updatePricing);

subscriptionMode.addEventListener("change", () => {
  mode = subscriptionMode.checked;
  updatePricing();
});
