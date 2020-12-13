const linkData = [
  { label: "Home", url: "HomeLink" },
  { label: "ShoeShop", url: "ShoeShopLink" },
  { label: "README", url: "READMELink" },
  { label: "Linkedin", url: "LinkedinLink" },
];

for (const link of linkData) {
  const newAnchor = document.createElement("a");
  newAnchor.setAttribute("id", link.url);
  newAnchor.classList.add("item");
  if (link.label === "Home") {
    newAnchor.classList.add("active");
  }
  newAnchor.innerText = link.label;
  document.getElementById("navbar").appendChild(newAnchor);
}

const hambugerMenuBtn = document.getElementById("hambuger-menu-btn");
const navbar = document.getElementById("navbar");

hambugerMenuBtn.addEventListener("click", () => {
  if (navbar.classList.contains("hideNav")) {
    navbar.classList.remove("hideNav");
  } else {
    navbar.classList.add("hideNav");
  }
});

const homelink = document.getElementById("HomeLink");
const homesection = document.getElementById("Home");
const shoeshoplink = document.getElementById("ShoeShopLink");
const shoeshopsection = document.getElementById("ShoeShop");
const linkedinlink = document.getElementById("LinkedinLink");
const linkedinsection = document.getElementById("Linkedin");
const readmelink = document.getElementById("READMELink");
const readmesection = document.getElementById("README");

homelink.addEventListener("click", () => {
  window.scrollTo({
    top: homesection.offsetTop - 48,
    behavior: "smooth",
  });
});

shoeshoplink.addEventListener("click", () => {
  window.scrollTo({
    top: shoeshopsection.offsetTop - 48,
    behavior: "smooth",
  });
});

linkedinlink.addEventListener("click", () => {
  window.scrollTo({
    top: linkedinsection.offsetTop - 48,
    behavior: "smooth",
  });
});

readmelink.addEventListener("click", () => {
  window.scrollTo({
    top: readmesection.offsetTop - 48,
    behavior: "smooth",
  });
});

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// on scroll event listener
document.addEventListener("scroll", () => {
  navHighlighter();
});

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset || document.documentElement.scrollTop;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("a[id*=" + sectionId + "]")
        .classList.add("active");

      document
        .getElementById(sectionId + "-content")
        .classList.add("bounce-animation");
    } else {
      document
        .querySelector("a[id*=" + sectionId + "]")
        .classList.remove("active");

      document
        .getElementById(sectionId + "-content")
        .classList.remove("bounce-animation");
    }
  });
}
