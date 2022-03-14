addEventListener("load", () => {
  const pointer = document.querySelector(".pointer");
  const coordinates = document.querySelector(".coordinates");
  const verticalLine = document.querySelector(".verticalLine");
  const horizontaLine = document.querySelector(".horizontaLine");

  function MovePointer(event) {
    pointer.style.transform = `translate(${
      event.clientX - pointer.getBoundingClientRect().width / 2
    }px, ${event.clientY - pointer.getBoundingClientRect().height / 2}px)`;
    verticalLine.style.transform = `translateX(${event.clientX}px)`;
    horizontaLine.style.transform = `translateY(${event.clientY}px)`;
    coordinates.style.transform = `translate(${event.clientX + 20}px,${
      event.clientY
    }px)`;
    coordinates.innerHTML = `${event.clientX}px, ${event.clientY}px`;
  }

  window.addEventListener("mousemove", (event) => {
    MovePointer(event);
  });
});
