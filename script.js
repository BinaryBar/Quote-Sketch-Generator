const quotes = [
  "Creativity is intelligence having fun.",
  "Every artist was first an amateur.",
  "Art enables us to find ourselves.",
];

const sketches = [
  "assets/sketch1.jpg",
  "assets/sketch2.jpg",
  "assets/sketch3.jpg",
];

function generateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = `"${quotes[index]}"`;
  document.getElementById("sketch").src = sketches[index];
}
