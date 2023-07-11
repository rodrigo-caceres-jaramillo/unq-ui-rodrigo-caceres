import React, { useContext, useState } from 'react'
import ButtonOption from '../components/buttonOption/ButtonOption'
import GameContext from '../context/GameContext'
import RoundCounter from '../components/roundCounter/RoundCounter'
import Options from '../components/options/Options'
import Display from '../components/display/Display'
import Result from '../components/result/Result'

const Game = () => {
  const { playerOption, getGameResult } = useContext(GameContext)
  const [result, setResult] = useState(0)

  const handleGame = () => {
    setResult(getGameResult())
  }

  return (
    <div id='game'>
      <RoundCounter />
      <Display />
      <Result gameResult={result} />
      <Options />
      {playerOption ? <ButtonOption text='Jugar' funtion={(() => handleGame())} /> : null}
    </div>
  )
}

export default Game
