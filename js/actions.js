// Cambio de tema
// const $toogleTheme = document.getElementById('toogleTheme');

// $toogleTheme.addEventListener('click', () => {
//   if (document.documentElement.className === 'light-theme') {
//     document.documentElement.className = 'dark-theme';
//   } else {
//     document.documentElement.className = 'light-theme';
//   }
// });

/**
 * @param {string} elementId
 * @param {string} direction
 */
function scrollProducts(elementId, direction) {
  const $section = document.getElementById(elementId);
  const actualScroll = $section.scrollLeft;
  const numberOfColumns = document.documentElement.clientWidth > 768 ? 4 : 2;
  const scrollSize = $section.clientWidth / numberOfColumns;

  switch (direction) {
    case 'left':
      $section.scroll({
        left: actualScroll - scrollSize - 16,
        behavior: 'smooth',
      });
      break;
    case 'right':
      $section.scroll({
        left: actualScroll + scrollSize + 16,
        behavior: 'smooth',
      });
      break;

    default:
      break;
  }
}

/*======= MOSTRAR MENU ========*/
const ShowMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

ShowMenu('nav-toggle', 'nav-menu');

/*========== REMOVER MENU DESPLEGABLE =======*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  //Link activado
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  //Remover menu movil
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
