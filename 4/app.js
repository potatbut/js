const board = document.querySelector('#board')
const SQUARES_NUMBER = 400


for(let i = 0 ; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => 
    setColor(square)
  )

  square.addEventListener('mouseleave', () => 
    removeColor(square)
  )

  board.append(square)
}

function setColor(e) {
  let color = getRandomColor()

  if(color.toString().length === 6) {
    e.style.backgroundColor = `#${color}`
    e.style.boxShadow = `0 0 2px #${color}, 0 0 20px #${color}`
  }

}

function removeColor(e) {
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * 999999)
  return index
}

