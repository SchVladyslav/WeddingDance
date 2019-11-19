const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", evt => {
  isDown = true;
  startX = evt.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mousemove", evt => {
  if (!isDown) return;
  evt.preventDefault();
  const x = evt.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
  console.log(scrollLeft);
});
