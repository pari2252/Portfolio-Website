// Toggle menu when hamburger icon is clicked
document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isClickInsideMenu = menu.contains(event.target) || icon.contains(event.target);

  if (!isClickInsideMenu && menu.classList.contains("open")) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const categorySelect = document.getElementById("category");
  const dateSelect = document.getElementById("date");

  categorySelect.addEventListener("change", filterActivities);
  dateSelect.addEventListener("change", sortActivities);

  function filterActivities() {
      const category = categorySelect.value;
      const activities = document.querySelectorAll(".activity-card");
      
      activities.forEach(activity => {
          const activityCategory = activity.getAttribute("data-category");
          if (category === "all" || activityCategory === category) {
              activity.style.display = "block";
          } else {
              activity.style.display = "none";
          }
      });
  }

  function sortActivities() {
      const activitiesContainer = document.querySelector(".activity-container");
      const activities = Array.from(activitiesContainer.children);
      const sortBy = dateSelect.value;

      activities.sort((a, b) => {
          const aDate = new Date(a.getAttribute("data-date"));
          const bDate = new Date(b.getAttribute("data-date"));

          if (sortBy === "newest") {
              return bDate - aDate;
          } else {
              return aDate - bDate;
          }
      });

      activities.forEach(activity => activitiesContainer.appendChild(activity));
  }
});
// Function to move the background based on mouse movement
document.addEventListener('mousemove', (e) => {
  const background = document.querySelector('.background');
  const x = (window.innerWidth - e.pageX * 2) / 100;
  const y = (window.innerHeight - e.pageY * 2) / 100;

  background.style.backgroundPosition = `${x}% ${y}%`;
});
