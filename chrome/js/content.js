const snip = () => {
  cnosole.log("snip", arguments)
}

const actionMenu = document.createElement('div')

actionMenu.id = "webclipper-action-menu"
actionMenu.style.position = "fixed"
actionMenu.style.backgroundColor = "rgba(0,0,0,0.7)"
actionMenu.style.color = "white"
actionMenu.innerHTML = "<textarea placeholder='add a comment'></textarea><input type='button' onClick='snip' value='Save'/>"
document.body.appendChild(actionMenu)

document.onmouseup = (e) => {
  actionMenu.remove()
  const selection = document.getSelection()
  const text = selection.toString()
  console.log(text)
  if (!text || !text.trim()) return
  const { x, y } = e
  const rect = selection.getRangeAt(0).getBoundingClientRect();
  actionMenu.style.left = `${x}px`
  actionMenu.style.top = `${y}px`
  document.body.appendChild(actionMenu)
}

document.onkeyup = e => {
  if (e.key === 'Escape') {
    actionMenu.remove()
  }
}