const RoundCounter = ({ gameState }) => {
  return (
    <div className='round-counter'>
      <span className='counter-numer'>Ronda:{gameState.round}</span>
      <span className='counter-numer'>Victorias:{gameState.wins}</span>
      <span className='counter-numer'>Perdidas:{gameState.losses}</span>
      <span className='counter-numer'>Empates:{gameState.draws}</span>
    </div>
  )
}

export default RoundCounter
