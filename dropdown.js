let dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach((dropdown) => {
  let dropdownButton = dropdown.querySelector('.dropdown-button')
  let dropdownMenu = dropdown.querySelector('.dropdown-menu')
  
  dropdownButton.onclick = () => {
    dropdown.classList.toggle('opened')
  }
})