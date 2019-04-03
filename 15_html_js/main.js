let nombre = document.getElementById('nombre')
let boton = document.getElementById('boton')
let texto = document.getElementById('texto')

const handleClick = () => {
  let inputText = nombre.value

  texto.innerHTML = inputText
}

boton.addEventListener('click', handleClick)

