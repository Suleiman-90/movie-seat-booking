export default class SeatManager {
  constructor(containerSelector, onSeatChange) {
    this.container = document.querySelector(containerSelector);
    this.onSeatChange = onSeatChange;

    this.initializeSeatClickHandling();
  }

  initializeSeatClickHandling() {
    this.container.addEventListener("click", (event) => {
      const seat = event.target;

      if (!seat.classList.contains("seat")) return;
      if (seat.classList.contains("occupied")) return;

      seat.classList.toggle("selected");

      if (this.onSeatChange) {
        this.onSeatChange(this.getSelectedSeatCount());
      }
    });
  }

  getSelectedSeatCount() {
    return this.container.querySelectorAll(".seat.selected").length;
  }
}


