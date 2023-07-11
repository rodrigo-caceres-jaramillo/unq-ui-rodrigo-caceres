import { useContext } from 'react'
import './RoundCounter.css'
import GameContext from '../../context/GameContext'

const RoundCounter = () => {
  const { gameState } = useContext(GameContext)
  return (
    <div className='round-counter'>
      <h4 className='counter-numer'>Ronda:<span>{gameState.round}</span></h4>
      <h4 className='counter-numer'>Victorias:<span>{gameState.wins}</span></h4>
      <h4 className='counter-numer'>Perdidas:<span>{gameState.losses}</span></h4>
      <h4 className='counter-numer'>Empates:<span>{gameState.draws}</span></h4>
    </div>
  )
}

export default RoundCounter
