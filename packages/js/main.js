/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//=========================================================================


document.addEventListener('DOMContentLoaded', function () {
    // Store the projects for each category
    const projects = {
        css: [
          { title: 'CSS Project 1', description: 'A responsive CSS layout.', image: 'path/to/css-project1.jpg' },
          { title: 'CSS Project 2', description: 'An advanced CSS grid design.', image: 'path/to/css-project2.jpg' },
          { title: 'CSS Project 3', description: 'A CSS flexbox gallery.', image: 'path/to/css-project3.jpg' },
        ],
        tailwind: [
          { title: 'Tailwind Project 1', description: 'Tailwind custom components.', image: 'path/to/tailwind-project1.jpg' },
          { title: 'Tailwind Project 2', description: 'A Tailwind-based landing page.', image: 'path/to/tailwind-project2.jpg' },
          { title: 'Tailwind Project 3', description: 'A Tailwind form design.', image: 'path/to/tailwind-project3.jpg' },
        ],
        javascript: [
          { title: 'JavaScript Project 1', description: 'A dynamic to-do app.', image: 'path/to/javascript-project1.jpg' },
          { title: 'JavaScript Project 2', description: 'A weather application.', image: 'path/to/javascript-project2.jpg' },
          { title: 'JavaScript Project 3', description: 'A JavaScript-based calculator.', image: 'path/to/javascript-project3.jpg' },
        ],
        react: [
          { title: 'React Project 1', description: 'A simple React e-commerce app.', image: 'path/to/react-project1.jpg' },
          { title: 'React Project 2', description: 'A blog using React and Firebase.', image: 'path/to/react-project2.jpg' },
          { title: 'React Project 3', description: 'A movie search app built with React.', image: 'path/to/react-project3.jpg' },
          { title: 'React Project 3', description: 'A movie search app built with React.', image: 'path/to/react-project3.jpg' },
        ]
      };
      
  
    // Get all filter buttons and the project container
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectContainer = document.querySelector('.portfolio__projects');
  
    // Function to display projects
    function displayProjects(category) {
        // Clear the container first
        projectContainer.innerHTML = '';
      
        // Get the selected projects
        const selectedProjects = projects[category];
      
        // Create project elements and append them to the container
        selectedProjects.forEach(project => {
          const projectElement = document.createElement('div');
          projectElement.classList.add('portfolio__project');
      
          projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" />
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          `;
      
          projectContainer.appendChild(projectElement);
        });
      }
      
  
    // Add event listeners to buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const category = this.getAttribute('data-filter');
        displayProjects(category);
      });
    });
  
    // Display CSS projects by default on page load
    displayProjects('css');
  });
  



  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'active' class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add the 'active' class to the clicked button
        this.classList.add('active');
    });
});
