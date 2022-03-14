const pointer = document.querySelector(".pointer");
const coordinates = document.querySelector(".coordinates");
const verticalLine = document.querySelector(".verticalLine");
const horizontaLine = document.querySelector(".horizontaLine");

function MovePointer(event) {
  pointer.style.top = `${event.clientY}px`;
  pointer.style.left = `${event.clientX}px`;
  verticalLine.style.left = `${event.clientX}px`;
  horizontaLine.style.top = `${event.clientY}px`;
  coordinates.style.top = `${event.clientY}px`;
  coordinates.style.left = `${event.clientX}px`;
  coordinates.innerHTML = `${event.clientX}px, ${event.clientY}px`;
}

window.addEventListener("mousemove", (event) => {
  MovePointer(event);
  console.log(event);
});
