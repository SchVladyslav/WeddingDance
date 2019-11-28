const icons = document.querySelectorAll(".offer__list .offer__item");
console.log(icons);

animateCss(icons[0], "swing");
animateCss(icons[1], "shake");
animateCss(icons[2], "bounce");
animateCss(icons[3], "tada");
animateCss(icons[4], "heartBeat");
animateCss(icons[5], "rotateOut");
animateCss(icons[6], "flipInY");
animateCss(icons[7], "jackInTheBox");

function animateCss(element, animation) {
  element.addEventListener("mouseover", evt => {
    element.classList.add("animated", animation);
    setTimeout(() => {
      element.classList.remove("animationend", animation);
    }, 1500);
  });
}
