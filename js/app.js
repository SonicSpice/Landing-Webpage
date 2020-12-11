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

/* <navbar>
  <ul>
    <li class="item"><a href="#Home"></a></li>
    <li class="item"><a href="#Linkedin"></a></li>
    <li class="item"><a href="#ShoeStore"></a></li>
  </ul>
</navbar> */

for (const link of linkData) {
  const newAnchor = document.createElement("A");
  newAnchor.setAttribute("href", link.url);
  const newSpan = document.createElement("SPAN");
  newSpan.classList.add("item");
  newAnchor.innerText = link.label;
  newSpan.appendChild(newAnchor);
  document.getElementById("navbar").appendChild(newSpan);
}

/* https://codepen.io/ivanmt07/pen/pxONrw https://codepen.io/dbilanoski/pen/LabpzG
make it blue by using :active */
function onScroll(event) {
  var sections = document.querySelectorAll("#menu-center a");
  var scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  for (var i = 0; i < sections.length; i++) {
    var currLink = sections[i];
    var val = currLink.getAttribute("active");
    var refElement = document.querySelector("active");
    if (
      refElement.offsetTop <= scrollPos &&
      refElement.offsetTop + refElement.offsetHeight > scrollPos
    ) {
      document.querySelector("#menu-center ul li a").classList.remove("active");
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  }
}

window.document.addEventListener("scroll", onScroll);

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("active");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const anchorTags = document.querySelectorAll('a[href*="#"]');
for (const anchorTag of anchorTags) {
  anchorTag.addEventListener("click", changeColor);
}

function changeColor(e) {
  console.log(e);
  // const id = this.getAttribute("href"); // ex: Home then id = '#Home'
  const anchorTags = document.querySelectorAll('a[href*="#"]');

  for (const anchorTag of anchorTags) {
    anchorTag.classList.remove("active");
  }

  this.classList.add("active");
  // document.querySelector("a[href*='" + id + "']").classList.add("active");
}
/* smooth scroll */
var scroll = new SmoothScroll('a[href*="#"]');
