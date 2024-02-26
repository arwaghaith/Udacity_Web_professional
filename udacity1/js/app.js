/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nvLst = document.getElementById("navbar__list");
const Top = document.getElementById("to-top");
const header = document.querySelector(".page__header");
var c = 0;
/**
* End Global Variables
* Start Helper Functions
* 
*/
const createSection = () => {
  c++;
  const addSec = `<section id="section${c}" data-nav="Section ${c}">
    <div class="landing__container">
    <h2>Section ${c}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("span").insertAdjacentHTML("beforeend", addSec);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

const createNavItems = () => {
  nvLst.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const lstItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    nvLst.insertAdjacentHTML("beforeend", lstItem);
  });
};

// Add class 'active' to section when near top of viewport



window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    let activeLink = nvLst.querySelector(`[data-nav=${active.id}]`);
    if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) {

      active.classList.add("your-active-class");
      activeLink.classList.add("active-link");

    }
    else {
      active.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
}

nvLst.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});

/**
 * create four-section dynamically by javascript instead of HTML
 * create them links
 * ability to observe sections
 */
for (let i = 0; i < 4; i++) {
  createSection();

}
createNavItems();
// observingSections();

// creating more sections by click on the button
document.getElementById("btn").addEventListener("click", () => {
  createSection();
  createNavItems();
  // observingSections();
});



// Clicking the icon the document will scroll to the top smoothly
Top.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll to anchor ID using scrollTO event

let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
  isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);

  window.scrollY > 700
    ? (lstItem.style.display = "block")
    : (lstItem.style.display = "none");
};