let dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach((dropdown) => {
  let dropdownButton = dropdown.querySelector('.dropdown-button')
  let dropdownMenu = dropdown.querySelector('.dropdown-menu')
  
  dropdownButton.onclick = () => {
    dropdown.classList.toggle('opened')
  }
  
  let dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item')
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.onclick = () => {
      dropdownItems.forEach((dropdownItem) => {
        dropdownItem.classList.remove('selected')
      })
      dropdownButton.innerHTML = dropdownItem.innerHTML
      dropdown.classList.remove('opened')
      dropdownItem.classList.add('selected')
    }
  })
})