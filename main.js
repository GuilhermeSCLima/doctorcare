window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function showNavOnScroll() {
  let navMenu =
    scrollY > 0
      ? navigation.classList.add("scroll")
      : navigation.classList.remove("scroll");
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showBackToTopButonOnScroll() {
  let backToTop =
    scrollY > 441
      ? backToTopButton.classList.add("show")
      : backToTopButton.classList.remove("show");
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  `
    #home,
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .cards,
    #services .card,
    #about,
    #about header,
    #about .content
    #contact
    #contact header
    #contact .content
  `
);
