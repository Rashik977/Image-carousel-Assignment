import "./style.css";

const container = document.querySelector(".images") as HTMLDivElement;
const contents = document.querySelector(
  ".container__contents"
) as HTMLDivElement;
const imgLists = document.querySelectorAll(
  ".container--item"
) as NodeListOf<HTMLDivElement>;

const next = document.getElementById("next") as HTMLButtonElement;
const prev = document.getElementById("prev") as HTMLButtonElement;
const listsOfLi = document.querySelectorAll(
  ".dots li"
) as NodeListOf<HTMLLIElement>;

contents.style.left = "0px";
contents.style.transition = "left 0.5s";
container.style.width = "640px";
container.style.height = "320px";
contents.style.width = "100%";
contents.style.height = "100%";
container.style.position = "relative";
contents.style.display = "flex";
container.style.overflow = "hidden";
contents.style.position = "absolute";

let active: number = 0;

const imagesLength = imgLists.length - 1;

setTimeout(() => {
  imageSlider();
}, 1000);

let intervalImgs = setInterval(() => {
  next.click();
}, 4000);

function imageSlider() {
  contents.style.left = -imgLists[active].offsetLeft + "px";
  let lastActive = document.querySelector("li.active") as HTMLLIElement;

  lastActive.classList.remove("active");
  listsOfLi[active].classList.add("active");

  clearInterval(intervalImgs);
  intervalImgs = setInterval(() => {
    next.click();
  }, 4000);
}

next.addEventListener("click", () => {
  if (active < imagesLength) {
    active++;
  } else {
    active = 0;
  }
  imageSlider();
});
prev.addEventListener("click", () => {
  if (active > 0) {
    active--;
  } else {
    active = imagesLength;
  }
  imageSlider();
});
listsOfLi.forEach((li, index) => {
  li.addEventListener("click", () => {
    active = index;

    imageSlider();
  });
});
