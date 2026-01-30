export default class SeatManager {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);

    if (!this.container) {
      throw new Error("Seat container not found");
    }

    this.initializeSeatClickHandling();
  }

  initializeSeatClickHandling() {
    this.container.addEventListener("click", (event) => {
      const clickedElement = event.target;

      if (!clickedElement.classList.contains("seat")) {
        return;
      }

      if (clickedElement.classList.contains("occupied")) {
        return;
      }

      clickedElement.classList.toggle("selected");
    });
  }

  getSelectedSeatCount() {
    return this.container.querySelectorAll(".seat.selected").length;
  }
}


