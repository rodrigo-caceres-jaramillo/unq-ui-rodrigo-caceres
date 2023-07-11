import incognito from '../../assets/incognito.png'
import piedra from '../../assets/piedra.png'
import papel from '../../assets/papel.png'
import tijera from '../../assets/tijera.png'
import lagarto from '../../assets/lagarto.png'
import spock from '../../assets/spock.png'

const DisplayOption = ({ option }) => {
  let imageUrl
  switch (option) {
    case 0:
      imageUrl = incognito
      break
    case 1:
      imageUrl = piedra
      break
    case 2:
      imageUrl = papel
      break
    case 3:
      imageUrl = tijera
      break
    case 4:
      imageUrl = lagarto
      break
    case 5:
      imageUrl = spock
      break
    default:
      imageUrl = 'ruta-de-imagen-por-defecto.jpg'
      break
  }

  return (
    <img src={imageUrl} alt={option} />
  )
}

export default DisplayOption
