// Interactive gradient background that follows the mouse throughout the entire page
const gradient = document.getElementById("gradient");

// Set initial position in the center of the viewport
let gradientX = window.innerWidth / 2;
let gradientY = window.innerHeight / 2;
gradient.style.left = `${gradientX}px`;
gradient.style.top = `${gradientY}px`;

document.addEventListener("mousemove", (e) => {
  // Get mouse position relative to the viewport
  gradientX = e.clientX;
  gradientY = e.clientY;

  // Apply position with smooth transition
  gradient.style.left = `${gradientX}px`;
  gradient.style.top = `${gradientY}px`;

  // Change gradient colors based on position within the page
  const xRatio = gradientX / window.innerWidth;
  const yRatio = gradientY / window.innerHeight;

  const hue1 = 20 + xRatio * 30; // Orange range
  const hue2 = 0 + yRatio * 40; // Red range

  gradient.style.background = `radial-gradient(
             circle,
             hsla(${hue1}, 100%, 70%, 0.7) 0%,
             hsla(${hue2}, 100%, 65%, 0.5) 70%
         )`;
});

// Add window resize event to ensure gradient stays properly positioned
window.addEventListener("resize", () => {
  // Update gradient position on window resize
  gradientX = window.innerWidth / 2;
  gradientY = window.innerHeight / 2;
  gradient.style.left = `${gradientX}px`;
  gradient.style.top = `${gradientY}px`;
});

// Typewriter effect
const typewriterElement = document.getElementById("typewriter");
const phrases = ["Graphic Designer", "Web Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // Deleting text
    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50; // Faster when deleting
  } else {
    // Typing text
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100; // Normal typing speed
  }

  // If we've finished typing the current phrase
  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at the end of typing
    isDeleting = true;
    typingSpeed = 1500; // Wait before deleting
  }
  // If we've finished deleting the current phrase
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    // Move to next phrase
    phraseIndex = (phraseIndex + 1) % phrases.length;
    // Pause before typing next phrase
    typingSpeed = 500;
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", function () {
  // App data
  const apps = [
    // First row
    {
      id: 1,
      name: "Illustrator",
      icon: "./logos programas/1.png?height=100&width=100",
    },
    {
      id: 2,
      name: "Photoshop",
      icon: "./logos programas/2.png?height=100&width=100",
    },
    {
      id: 3,
      name: "InDesign",
      icon: "./logos programas/3.png?height=100&width=100",
    },
    {
      id: 4,
      name: "After Effects",
      icon: "./logos programas/4.png?height=100&width=100",
    },
    {
      id: 5,
      name: "Lightroom",
      icon: "./logos programas/5.png?height=100&width=100",
    },
    {
      id: 6,
      name: "Premiere Pro",
      icon: "./logos programas/6.png?height=100&width=100",
    },
    {
      id: 7,
      name: "Express",
      icon: "./logos programas/7.png?height=100&width=100",
    },
    {
      id: 8,
      name: "Canva",
      icon: "./logos programas/7.png?height=100&width=100",
    },
    // Second row
    {
      id: 9,
      name: "HTML5",
      icon: "./logos programas/8.png?height=100&width=100",
    },
    {
      id: 10,
      name: "CSS3",
      icon: "./logos programas/9.png?height=100&width=100",
    },
    {
      id: 11,
      name: "JavaScript",
      icon: "./logos programas/11.png?height=100&width=100",
    },
    {
      id: 12,
      name: "WordPress",
      icon: "./logos programas/12.png?height=100&width=100",
    },
    {
      id: 13,
      name: "Figma",
      icon: "./logos programas/13.png?height=100&width=100",
    },
    {
      id: 14,
      name: "Blender",
      icon: "./logos programas/14.png?height=200&width=200",
    },
  ];

  const appIconsContainer = document.getElementById("appIcons");
  const banner = document.getElementById("appBanner2");

  // Create app icons
  apps.forEach((app, index) => {
    const iconDiv = document.createElement("div");
    iconDiv.className = "app-icon";
    iconDiv.dataset.index = index;

    const img = document.createElement("img");
    img.src = app.icon;
    img.alt = app.name;
    img.className = "icon-image";

    iconDiv.appendChild(img);
    appIconsContainer.appendChild(iconDiv);
  });

  // Show banner with animation
  setTimeout(() => {
    banner.classList.add("visible");

    // Animate icons with delay
    const icons = document.querySelectorAll(".app-icon");
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("animate");
      }, 300 + index * 100); // 300ms initial delay, then 100ms between each icon
    });
  }, 500);
});

//banner 3

document.addEventListener("DOMContentLoaded", function () {
  // Project data
  const projects = [
    {
      id: 1,
      number: "01.",
      title: "Proyecto #1",
      image: "zenelif.png?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
    {
      id: 2,
      number: "02.",
      title: "Proyecto #1",
      image: "mere.png?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",

      hasLogo: true,
    },
    {
      id: 3,
      number: "03.",
      title: "Proyecto #1",
      image: "bevous.png?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
    {
      id: 4,
      number: "04.",
      title: "Proyecto #1",
      image: "mbcapital.png?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
    {
      id: 5,
      number: "05.",
      title: "Proyecto #1",
      image: "placeholder.svg?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
    {
      id: 6,
      number: "06.",
      title: "Proyecto #1",
      image: "placeholder.svg?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
    {
      id: 7,
      number: "07.",
      title: "Proyecto #1",
      image: "placeholder.svg?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
    {
      id: 8,
      number: "08.",
      title: "Proyecto #1",
      image: "placeholder.svg?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
    {
      id: 9,
      number: "09.",
      title: "Proyecto #1",
      image: "placeholder.svg?height=280&width=250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    },
  ];

  const carousel = document.getElementById("projectsCarousel");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentIndex = 0;
  const projectsPerView = getProjectsPerView();
  const totalSlides = Math.ceil(projects.length / projectsPerView);
  let isAnimating = false;

  // Determine how many projects to show based on screen width
  function getProjectsPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  }

  // Create project elements
  function renderProjects() {
    carousel.innerHTML = "";
    carousel.style.width = `${totalSlides * 100}%`;

    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.className = "banner3-project";

      let projectContent = `
          <div class="banner3-project-number">${project.number}</div>
          <div class="banner3-project-image-container">
            <img src="${project.image}" alt="${project.title}" class="banner3-project-image">
            <div class="ver-mas-btn">Ver más</div>
        `;

      if (project.hasLogo) {
        projectContent += `
            <div class="banner3-project-logo">

            </div>
          `;
      }

      if (project.brand) {
        projectContent += `
            <div class="banner3-project-brand">
              <h3>${project.brand}</h3>
              <p>${project.brandSubtitle || "Brand"} <span>${
          project.year
        }</span></p>
            </div>
          `;
      }

      projectContent += `
          </div>
          <h3 class="banner3-project-title">${project.title}</h3>
          <p class="banner3-project-description">${project.description}</p>
        `;

      projectElement.innerHTML = projectContent;
      carousel.appendChild(projectElement);
    });

    updateCarouselPosition();
  }

  // Update carousel position
  function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${
      (currentIndex * 100) / totalSlides
    }%)`;
  }

  // Next slide
  function nextSlide() {
    if (isAnimating) return;

    isAnimating = true;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarouselPosition();

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  // Previous slide
  function prevSlide() {
    if (isAnimating) return;

    isAnimating = true;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarouselPosition();

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  // Event listeners
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Handle window resize
  window.addEventListener("resize", () => {
    const newProjectsPerView = getProjectsPerView();
    if (newProjectsPerView !== projectsPerView) {
      // Recalculate and re-render if the number of visible projects changes
      renderProjects();
    }
  });

  // Initial render
  renderProjects();

  // Adicionalmente, agregar un evento click al botón "Ver más"
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ver-mas-btn")) {
      // Obtener el proyecto relacionado
      const projectContainer = e.target.closest(".banner3-project");
      const projectTitle = projectContainer.querySelector(
        ".banner3-project-title"
      ).textContent;

      // Implementar la acción deseada (por ejemplo, redirigir o mostrar más información)
      console.log(`Ver más detalles del proyecto: ${projectTitle}`);
      // Aquí puedes añadir código para mostrar más detalles, abrir un modal, etc.
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Añadir al inicio del DOMContentLoaded para certificados
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.overflowX = "hidden";
  // Certificate data
  const certificates = [
    // Design certificates
    {
      id: 1,
      title: "Fundamentos de Diseño de Interfaces UX/UI",
      image: "./diploma1.jpg?height=200&width=300",
      category: "design",
    },
    {
      id: 2,
      title: "Diseño para Redes Sociales",
      image: "./diploma1.jpg?height=200&width=300",
      category: "design",
    },
    {
      id: 3,
      title: "Diseño de Logotipos",
      image: "./diploma1.jpg?height=200&width=300",
      category: "design",
    },
    {
      id: 4,
      title: "Diseño Editorial",
      image: "./diploma1.jpg?height=200&width=300",
      category: "design",
    },
    {
      id: 5,
      title: "Adobe Photoshop Avanzado",
      image: "./diploma1.jpg?height=200&width=300",
      category: "design",
    },

    // Web certificates
    {
      id: 6,
      title: "Programación Básica",
      image: "./diploma1.jpg?height=200&width=300",
      category: "web",
    },
    {
      id: 7,
      title: "Desarrollo Frontend con React",
      image: "./diploma1.jpg?height=200&width=300",
      category: "web",
    },
    {
      id: 8,
      title: "JavaScript Profesional",
      image: "./diploma1.jpg?height=200&width=300",
      category: "web",
    },
    {
      id: 9,
      title: "Node.js Básico",
      image: "./diploma1.jpg?height=200&width=300",
      category: "web",
    },
    {
      id: 10,
      title: "Responsive Design",
      image: "./diploma1.jpg?height=200&width=300",
      category: "web",
    },
  ];

  // DOM elements
  const carouselInner = document.getElementById("carouselInner");
  const tabButtons = document.querySelectorAll(".tab-button");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");

  let currentIndex = 0;
  let currentCategory = "design";
  let visibleCertificates = [];

  // Filter certificates by category and render them
  function filterAndRenderCertificates(category) {
    currentCategory = category;
    visibleCertificates = certificates.filter(
      (cert) => cert.category === category
    );

    carouselInner.innerHTML = "";

    visibleCertificates.forEach((cert, index) => {
      const certificateElement = document.createElement("div");
      certificateElement.className = `certificate ${
        index === 0 ? "active" : ""
      }`;
      certificateElement.innerHTML = `<img src="${cert.image}" alt="${cert.title}">`;

      carouselInner.appendChild(certificateElement);
    });

    // Reset carousel
    currentIndex = 0;
    updateCarouselPosition();
  }

  // Update carousel position
  function updateCarouselPosition() {
    const certificateWidth =
      carouselInner.querySelector(".certificate").offsetWidth;
    const gap = 20; // Same as in CSS

    const translateValue = -(currentIndex * (certificateWidth + gap));
    carouselInner.style.transform = `translateX(${translateValue}px)`;

    // Update active certificate
    const certificates = carouselInner.querySelectorAll(".certificate");
    certificates.forEach((cert, index) => {
      if (index === currentIndex) {
        cert.classList.add("active");
      } else {
        cert.classList.remove("active");
      }
    });
  }

  // Event listeners for tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const category = this.dataset.category;
      filterAndRenderCertificates(category);
    });
  });

  // Event listeners for navigation arrows
  prevArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarouselPosition();
    }
  });

  nextArrow.addEventListener("click", function () {
    if (currentIndex < visibleCertificates.length - 1) {
      currentIndex++;
      updateCarouselPosition();
    }
  });

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(function () {
      updateCarouselPosition();
    }, 250)
  );

  // Debounce function to limit resize events
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Initial render
  filterAndRenderCertificates("design");
});

//banner 5 y 6
document.addEventListener("DOMContentLoaded", function () {
  // Opinion data
  const opinions = [
    // First row (3 opinions)
    {
      id: 1,
      name: "Persona #1",
      title: "CEO de empresa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 5,
      avatar: "placeholder.svg?height=40&width=40",
      row: 1,
    },
    {
      id: 2,
      name: "Persona #1",
      title: "CEO de empresa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 5,
      avatar: "placeholder.svg?height=40&width=40",
      row: 1,
    },
    {
      id: 3,
      name: "Persona #1",
      title: "CEO de empresa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 5,
      avatar: "placeholder.svg?height=40&width=40",
      row: 1,
    },

    // Second row (4 opinions)
    {
      id: 4,
      name: "Persona #1",
      title: "CEO de empresa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 5,
      avatar: "placeholder.svg?height=40&width=40",
      row: 2,
    },
    {
      id: 5,
      name: "Persona #1",
      title: "CEO de empresa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 5,
      avatar: "placeholder.svg?height=40&width=40",
      row: 2,
    },
    {
      id: 6,
      name: "Persona #1",
      title: "CEO de empresa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      stars: 5,
      avatar: "placeholder.svg?height=40&width=40",
      row: 2,
    },
    {
      id: 7,
      name: "Persona #1",
      title: "CEO de empresa",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      stars: 5,
      avatar: "placeholder.svg?height=40&width=40",
      row: 2,
    },
  ];

  // DOM elements
  const opinionsRow1 = document.getElementById("opinionsRow1");
  const opinionsRow2 = document.getElementById("opinionsRow2");
  const prevOpinionBtn = document.getElementById("prevOpinion");
  const nextOpinionBtn = document.getElementById("nextOpinion");
  const coffeeIllustration = document.getElementById("coffeeIllustration");

  // Set coffee illustration
  coffeeIllustration.src = "./caapybaraa.png";

  let currentIndex = 0;
  let isAnimating = false;

  // Render opinion cards
  function renderOpinions() {
    // Clear existing opinions
    opinionsRow1.innerHTML = "";
    opinionsRow2.innerHTML = "";

    // Filter opinions by row
    const row1Opinions = opinions.filter((opinion) => opinion.row === 1);
    const row2Opinions = opinions.filter((opinion) => opinion.row === 2);

    // Render first row (3 opinions)
    row1Opinions.forEach((opinion) => {
      const opinionCard = createOpinionCard(opinion);
      opinionsRow1.appendChild(opinionCard);
    });

    // Render second row (4 opinions)
    row2Opinions.forEach((opinion) => {
      const opinionCard = createOpinionCard(opinion);
      opinionsRow2.appendChild(opinionCard);
    });
  }

  // Create opinion card element
  function createOpinionCard(opinion) {
    const opinionCard = document.createElement("div");
    opinionCard.className = "opinion-card";

    const starsHTML = "★".repeat(opinion.stars) + "☆".repeat(5 - opinion.stars);

    opinionCard.innerHTML = `
       <div class="opinion-header">
         <div class="opinion-avatar">
           <img src="${opinion.avatar}" alt="${opinion.name}">
         </div>
         <div class="opinion-author">
           <div class="opinion-name">${opinion.name}</div>
           <div class="opinion-title">${opinion.title}</div>
         </div>
       </div>
       <div class="opinion-text">${opinion.text}</div>
       <div class="opinion-stars">${starsHTML}</div>
     `;

    return opinionCard;
  }

  // Carousel functionality for mobile view
  function setupMobileCarousel() {
    if (window.innerWidth <= 1200) {
      // Add touch scrolling for mobile
      const rows = document.querySelectorAll(".opinions-row");
      rows.forEach((row) => {
        row.addEventListener("scroll", function () {
          // You can add scroll indicators here if needed
        });
      });
    }
  }

  // Next slide animation (for visual effect only in this layout)
  function nextSlide() {
    if (isAnimating) return;

    isAnimating = true;

    // Add a subtle animation effect
    const cards = document.querySelectorAll(".opinion-card");
    cards.forEach((card) => {
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "scale(0.95)";

      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 300);
    });

    setTimeout(() => {
      isAnimating = false;
    }, 600);
  }

  // Previous slide animation (for visual effect only in this layout)
  function prevSlide() {
    if (isAnimating) return;

    isAnimating = true;

    // Add a subtle animation effect
    const cards = document.querySelectorAll(".opinion-card");
    cards.forEach((card) => {
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "scale(0.95)";

      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 300);
    });

    setTimeout(() => {
      isAnimating = false;
    }, 600);
  }

  // Event listeners
  prevOpinionBtn.addEventListener("click", prevSlide);
  nextOpinionBtn.addEventListener("click", nextSlide);

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(function () {
      setupMobileCarousel();
    }, 250)
  );

  // Debounce function to limit resize events
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Gradient animation
  function animateGradient() {
    const banner5 = document.querySelector(".banner5");
    const banner6 = document.querySelector(".banner6");

    let hue = 0;

    setInterval(() => {
      hue = (hue + 1) % 360;
      const color1 = "#000000";
      const color2 = `hsl(${hue}, 100%, 20%)`;

      banner5.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
      banner6.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
    }, 100);
  }

  // Initial render
  renderOpinions();
  setupMobileCarousel();
  animateGradient();
});

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contactButton");

  contactButton.addEventListener("click", function () {
    // You can replace this with your desired contact action
    // For example, scroll to contact section, open modal, or navigate to contact page
    alert("Contact action triggered!");

    // Example: Scroll to contact section
    // document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' });

    // Example: Navigate to contact page
    // window.location.href = '/contact';
  });

  // Optional: Add smooth scroll for footer links
  const footerLinks = document.querySelectorAll(".footer-link");

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // If the link has a hash, use smooth scroll
      const href = this.getAttribute("href");
      if (href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});

// Modificar la función updateCarouselPosition para asegurar que las flechas funcionen en responsive
function updateCarouselPosition() {
  const certificateWidth = document.querySelector(".certificate")
    ? document.querySelector(".certificate").offsetWidth
    : 0;
  const gap = 20; // Same as in CSS

  if (certificateWidth > 0) {
    const translateValue = -(currentIndex * (certificateWidth + gap));
    carouselInner.style.transform = `translateX(${translateValue}px)`;

    // Update active certificate
    const certificates = carouselInner.querySelectorAll(".certificate");
    certificates.forEach((cert, index) => {
      if (index === currentIndex) {
        cert.classList.add("active");
      } else {
        cert.classList.remove("active");
      }
    });

    // Actualizar visibilidad de flechas
    if (currentIndex === 0) {
      prevArrow.style.opacity = "0.3";
      prevArrow.style.pointerEvents = "none";
    } else {
      prevArrow.style.opacity = "1";
      prevArrow.style.pointerEvents = "auto";
    }

    if (currentIndex >= visibleCertificates.length - 1) {
      nextArrow.style.opacity = "0.3";
      nextArrow.style.pointerEvents = "none";
    } else {
      nextArrow.style.opacity = "1";
      nextArrow.style.pointerEvents = "auto";
    }
  }
}

// Asegurar que las flechas sean visibles y funcionales en todos los tamaños de pantalla
window.addEventListener("resize", function () {
  // Recalcular posición del carrusel
  updateCarouselPosition();

  // Asegurar que las flechas estén visibles
  prevArrow.style.display = "flex";
  nextArrow.style.display = "flex";
});
