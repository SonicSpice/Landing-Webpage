const linkData = [
  { label: "Home", url: "#Home" },
  { label: "ShoeShop", url: "#ShoeShop" },
  { label: "Youtube", url: "#Youtube" },
  { label: "Linkedin", url: "#Linkedin" },
  { label: "Udacity", url: "#Udacity" },
  { label: "Blog", url: "#Blog" },
  { label: "WeatherApp", url: "#WeatherApp" },
  { label: "MerryChristmas", url: "#MerryChristmas" },
  { label: "README", url: "#README" },
];

for (const link of linkData) {
  const newAnchor = document.createElement("a");
  newAnchor.setAttribute("href", link.url);
  newAnchor.classList.add("item");
  newAnchor.innerText = link.label;
  document.getElementById("navbar").appendChild(newAnchor);
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// on scroll event listener
document.addEventListener('scroll', () => {
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
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
