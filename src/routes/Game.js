import React from 'react'
import { FaHandLizard, FaHandRock, FaHandPaper, FaHandScissors, FaHandSpock } from 'react-icons/fa'
import ButtonOption from '../components/buttonOption/ButtonOption'

const Game = () => {
  return (
    <div id='game'>
      <ButtonOption text='piedra'><FaHandRock /></ButtonOption>
      <ButtonOption text='papel'><FaHandPaper /></ButtonOption>
      <ButtonOption text='tijera'><FaHandScissors /></ButtonOption>
      <ButtonOption text='lagarto'><FaHandLizard /></ButtonOption>
      <ButtonOption text='spock'><FaHandSpock /></ButtonOption>
    </div>
  )
}

export default Game
