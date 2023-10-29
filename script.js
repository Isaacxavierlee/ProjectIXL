// Get references to the menu icon and the navigation list
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation list
  navList.classList.toggle('active');
});
