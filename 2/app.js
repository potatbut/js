const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

placeholders.forEach(function(e) {
  e.addEventListener('dragover', dragover)
  e.addEventListener('dragenter', dragenter)
  e.addEventListener('dragleave', dragleave)
  e.addEventListener('drop', dragdrop)
})

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(e) {
  e.target.classList.add('hold')
  setTimeout(() => e.target.classList.add('hide'), 0)
  
}

function dragend(e) {
  e.target.classList.remove('hold', 'hide')
}

function dragover(e) {
  e.preventDefault()
}

function dragenter(e) {
  e.target.classList.add('hovered')
}

function dragleave(e) {
  e.target.classList.remove('hovered')
}

function dragdrop(e) {
  e.target.classList.remove('hovered')
  e.target.append(item)
}