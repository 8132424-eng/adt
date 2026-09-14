// ============================================================
// AUTHORS CONFIGURATION
// ============================================================
// To add a NEW AUTHOR:
//   1. Add his entry to the list below, at the marked spot.
//   2. Create a new file in js/quotes/ (copy _TEMPLATE.js,
//      rename it to <id>.js, and fill in the quotes).
// ============================================================

window.AUTHORS = [
  {
    id: "tocqueville",
    name: "Alexis de Tocqueville",
    years: "1805 – 1859"
  },
  {
    id: "jefferson",
    name: "Thomas Jefferson",
    years: "1743 – 1826"
  }

  // ==========================================================
  // ▼▼▼ ADD NEW AUTHOR HERE ▼▼▼
  //
  // ,{
  //   id: "machiavelli",
  //   name: "Niccolò Machiavelli",
  //   years: "1469 – 1527"
  // }
  //
  // ▲▲▲ ADD NEW AUTHOR HERE ▲▲▲
  // ==========================================================
];

window.QUOTES = window.QUOTES || {};
window.registerAuthorQuotes = function(id, quotes) {
  window.QUOTES[id] = quotes;
};

