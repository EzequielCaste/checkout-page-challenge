const qtyButtons = document.querySelectorAll('.btn')
const qtyDisplay = document.querySelectorAll('.quantity-container p')

qtyButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let num = Number(qtyDisplay[e.target.id].innerText);
    if (e.target.innerText === "+") {
      num = num + 1
    } else if (Number(qtyDisplay[e.target.id].innerText) !== 0) {
      num = num - 1
    }
    qtyDisplay[e.target.id].innerText = num
  })
})

const countryArrow = document.querySelector('.form-control-grid .material-icons');
const countryList = document.querySelector('.country-list')

countryArrow.addEventListener('click', () => {
  countryList.classList.toggle('show')
})

const countries = document.querySelectorAll('.country-list ul li')
const countryInput = document.querySelector('#country')

countries.forEach(node => {
  node.addEventListener('click', (e) => {
    countryInput.value = e.target.innerText;
    countryList.classList.toggle('show')
  })
})

const form = document.querySelector('my-form')
