/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

//hamburguer menu
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-links");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//------------scroll to up-----------
// Set a variable for our button element.
const scrollToTopButton = document.getElementById("js-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function (e) {
};

//scroll to Projects
function scrollToProjects() {
  var recentProjects = document.getElementById("recent-projects");
  recentProjects.scrollIntoView({behavior: "smooth"});
}

//scroll to Services

function scrollToServices() {
  var services = document.getElementById("our-services");
  services.scrollIntoView({ behavior: "smooth" });
}

//fetch index

let url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));

const mostrarData = (data) => {
  console.log(data);
  let card = "";
  let size = 3;
  let items = data.slice(0, size).map((singleCard) => {
    return (card += `<div class="card">
               <div class="div-img-card">
                 <img class ="img-card" src="./resources/images/projects-section/1.jpg" alt="">
               </div>
               <div class="container-info-card">
                 <p class="titulo-card">${singleCard.title}</p>
                 <p class="descripcion-card">${singleCard.body}</p>
                 <p class="learn-more-class"><a href="./project-card-${singleCard.id}.html">Learn More</a></p>
               </div>
     
               </div>`);
  });

  document.getElementById("container-card").innerHTML = card;
};
