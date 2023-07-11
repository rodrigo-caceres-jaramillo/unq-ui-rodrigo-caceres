import React, { useContext } from 'react'
import ButtonOption from '../components/buttonOption/ButtonOption'
import GameContext from '../context/GameContext'
import RoundCounter from '../components/roundCounter/RoundCounter'
import Options from '../components/options/Options'
import Display from '../components/display/Display'

const Game = () => {
  const { getGameResult, machineOption } = useContext(GameContext)

  const handleGame = () => {
    const res = getGameResult()
    console.log(res)
    console.log(machineOption)
  }

  return (
    <div id='game'>
      <RoundCounter />
      <Display />
      <Options />
      <ButtonOption text='Jugar' funtion={(() => handleGame())} />
    </div>
  )
}

export default Game
