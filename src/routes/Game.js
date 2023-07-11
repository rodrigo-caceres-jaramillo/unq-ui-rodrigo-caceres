import React, { useContext } from 'react'
import { FaHandLizard, FaHandRock, FaHandPaper, FaHandScissors, FaHandSpock } from 'react-icons/fa'
import ButtonOption from '../components/buttonOption/ButtonOption'
import GameContext from '../context/GameContext'
import RoundCounter from '../components/roundCounter/RoundCounter'

const Game = () => {
  const { playOption, getGameResult, machineOption, gameState } = useContext(GameContext)

  const handleGame = () => {
    const res = getGameResult()
    console.log(res)
    console.log(machineOption)
  }

  return (
    <div id='game'>
      <RoundCounter gameState={gameState} />
      <div>
        <ButtonOption text='piedra' funtion={(() => playOption(1))}><FaHandRock /></ButtonOption>
        <ButtonOption text='papel' funtion={(() => playOption(2))}><FaHandPaper /></ButtonOption>
        <ButtonOption text='tijera' funtion={(() => playOption(3))}><FaHandScissors /></ButtonOption>
        <ButtonOption text='lagarto' funtion={(() => playOption(4))}><FaHandLizard /></ButtonOption>
        <ButtonOption text='spock' funtion={(() => playOption(5))}><FaHandSpock /></ButtonOption>
        <ButtonOption text='Jugar' funtion={(() => handleGame())} />
      </div>
    </div>
  )
}

export default Game
