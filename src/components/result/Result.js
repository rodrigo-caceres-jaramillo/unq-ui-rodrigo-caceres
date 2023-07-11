import ResultPopUp from '../resultPopUp/ResultPopUp'

const Result = ({ gameResult }) => {
  if (gameResult === 'Victory') {
    return <ResultPopUp res='Ganaste' />
  } else if (gameResult === 'Loss') {
    return <ResultPopUp res='Perdiste' />
  } else if (gameResult === 'Draw') {
    return <ResultPopUp res='Empate' />
  }
}

export default Result
