import { useContext } from 'react'
import DisplayOption from '../displayOption/DisplayOption'
import GameContext from '../../context/GameContext'
import './Display.css'

const Display = () => {
  const { playerOption, machineOption } = useContext(GameContext)
  return (
    <div id='display'>
      <DisplayOption option={playerOption} />
      <DisplayOption option={machineOption} />
    </div>

  )
}

export default Display
