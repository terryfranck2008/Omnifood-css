const h1 = document.querySelector(".heading-primary");
console.log(h1);

// h1.addEventListener('click', (evt) => {
//   h1.textContent = "Ciao Mondo";
//   h1.style.backgroundColor = "red"
//   h1.style.padding = "5rem"
// })

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to the top
    // switch (true) {
    //   case href === "#":
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth",
    //     });
    //     break;
    // }
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if(href !== "#" && href.startsWith('#')){
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    //close mobile navigation
    if(link.classList.contains("main-nav-link")){
      headerEl.classList.toggle("nav-open");
    }

  });
});

////////////////////////////////////////////////////////////
// Sticky Navigation

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  //one entry will always appear when loading the page with isIntersecting = true
  console.log(ent)
  const bodyEl = document.body;
  if(!ent.isIntersecting){
    bodyEl.classList.add('sticky');
  }else{
    bodyEl.classList.remove("sticky");
  }
  
  // if(ent.isIntersecting){
  //   bodyEl.classList.remove("sticky")
  // }
}
,{
  // In the viewport
  root: null,
  // as soon the hero section it's 0 percent into the viewport height
  threshold: 0,
  rootMargin: "-80px" //same value as heigth of the header
});

obs.observe(document.querySelector(".section-hero"));

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
