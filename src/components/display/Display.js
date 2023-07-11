import { useContext } from 'react'
import DisplayOption from '../displayOption/DisplayOption'
import GameContext from '../../context/GameContext'

const Display = () => {
  const { playerOption, machineOption } = useContext(GameContext)
  return (
    <div>
      <div>
        <DisplayOption option={machineOption} />
      </div>
      <div>
        <DisplayOption option={playerOption} />
      </div>
    </div>

  )
}

export default Display
