export function updateSummary(selectedSeats, moviePrice) {
  const countElement = document.getElementById("count");
  const totalElement = document.getElementById("total");

  countElement.textContent = selectedSeats;
  totalElement.textContent = selectedSeats * moviePrice;
}

