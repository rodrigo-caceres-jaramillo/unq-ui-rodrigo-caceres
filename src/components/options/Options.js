import { useContext } from 'react'
import ButtonOption from '../buttonOption/ButtonOption'
import GameContext from '../../context/GameContext'
import { FaHandLizard, FaHandPaper, FaHandRock, FaHandScissors, FaHandSpock } from 'react-icons/fa'

const Options = () => {
  const { playOption } = useContext(GameContext)
  return (
    <>
      <ButtonOption text='piedra' funtion={(() => playOption(1))}><FaHandRock /></ButtonOption>
      <ButtonOption text='papel' funtion={(() => playOption(2))}><FaHandPaper /></ButtonOption>
      <ButtonOption text='tijera' funtion={(() => playOption(3))}><FaHandScissors /></ButtonOption>
      <ButtonOption text='lagarto' funtion={(() => playOption(4))}><FaHandLizard /></ButtonOption>
      <ButtonOption text='spock' funtion={(() => playOption(5))}><FaHandSpock /></ButtonOption>
    </>
  )
}

export default Options
