
let edad = 28
const nacionalidad = 'mx'
let residencia = 'mx'
let ine = true

if (edad >= 18) {
  if (nacionalidad === 'mx') {
    if (ine === true) {
      if (residencia === 'mx') {
        console.log('Acude a tu modulo más cercano')
      } else {
        console.log('Acude a la embajada')
      }
    } else {
      console.log('Debes tener INE')
    }
  } else {
    console.log('Debes ser mexicano')
  }
} else {
  console.log('Debes ser mayor de edad')
}

