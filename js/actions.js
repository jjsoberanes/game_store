// Cambio de tema
const $toogleTheme = document.getElementById('toogleTheme');

$toogleTheme.addEventListener('click', () => {
  if (document.documentElement.className === 'light-theme') {
    document.documentElement.className = 'dark-theme';
  } else {
    document.documentElement.className = 'light-theme';
  }
});

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
