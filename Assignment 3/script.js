document.addEventListener("DOMContentLoaded", () => {
  // Burger Menu Functionality
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("fullscreen");
    burgerMenu.classList.toggle("active");
  });

  // Smooth Scrolling with Dynamic Offset
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); 
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const navbarHeight = document.querySelector('.sidebar').offsetHeight;
        const offset = targetId === "gift-certificates-section" ? 20 : navbarHeight;
        const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Read More Button
  const readMoreBtn = document.getElementById("read-more-btn");
  const extraContent = document.getElementById("extra-content");

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
      extraContent.classList.toggle("hidden");
      readMoreBtn.textContent = extraContent.classList.contains("hidden") ? "Read More" : "Read Less";
    });
  }
  // Gift section
  const gifts = [
    {
      name: "Single Class Gift",
      price: "$69",
      description: "Redeemable for a hands-on pottery class, includes materials, valid for 12 months, perfect creative gift.",
    },
    {
      name: "4-Pack Gift",
      price: "$229",
      description: "Redeemable for four pottery classes, includes materials, valid for 12 months, ideal for hobbyists.",
    },
    {
      name: "6-Pack Gift",
      price: "$299",
      description: "Redeemable for six pottery classes, includes materials, valid for 12 months, perfect for pottery enthusiasts.",
    },
  ];
  
  let currentGiftIndex = 0;

  const giftName = document.getElementById("gift-name");
  const giftDescription = document.getElementById("gift-description");
  const nextGiftBtn = document.getElementById("next-gift-btn");

  nextGiftBtn.addEventListener("click", () => {
    currentGiftIndex = (currentGiftIndex + 1) % gifts.length; 
    giftName.textContent = `${gifts[currentGiftIndex].name}: ${gifts[currentGiftIndex].price}`;
    giftDescription.textContent = gifts[currentGiftIndex].description;
});
});