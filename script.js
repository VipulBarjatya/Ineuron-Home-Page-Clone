// Smooth Scroll
// import Scrollbar from "smooth-scrollbar";

// const option = {
//   damping: 0.06,
//   alwaysShowTracks: true,
// };

// Scrollbar.init(document.querySelector("#my-scrollbar"), option);

// import { CountUp } from "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js";

// function countStart() {
//   const $counters = document.querySelectorAll(".js-count-up"),
//     options = {
//       useEasing: true,
//       useGrouping: true,
//       separator: ",",
//       decimal: ".",
//     };

//   $counters.forEach((item) => {
//     const value = item.dataset.value;
//     const counter = new CountUp(item, value, options);
//     counter.start();
//   });
// }

// new Waypoint({
//   element: document.querySelector(".level"),
//   handler: function () {
//     countStart();
//     //this.destroy() //for once
//   },
//   offset: "50%",
// });

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// relax js code

if (window.innerWidth > 568) {
  let rellax = new Rellax(".rellax", {
    center: true,
  });
}

console.log("hello World!");
// sticky nav
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
