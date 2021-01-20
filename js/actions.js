const $toogleTheme = document.getElementById('toogleTheme');

$toogleTheme.addEventListener('click', () => {
  if (document.documentElement.className === 'light-theme') {
    document.documentElement.className = 'dark-theme';
  } else {
    document.documentElement.className = 'light-theme';
  }
});
