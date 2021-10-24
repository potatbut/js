const slides = document.querySelectorAll('.slide')

slides.forEach(function(e) {
  e.addEventListener('click', function() {
    removeClass()
    e.classList.add('active')
  })
})

function removeClass() {
  slides.forEach(function(e) {
    e.classList.remove('active')
  })
}

