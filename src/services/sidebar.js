export function toggleSidebar() {
  if (
    document.getElementById('x') &&
    document.getElementById('nav') &&
    document.getElementById('menu-bg')
  ) {
    document.getElementById('x').classList.toggle('change')
    document.getElementById('nav').classList.toggle('change')
    document.getElementById('menu-bg').classList.toggle('change-bg')
  }
}
