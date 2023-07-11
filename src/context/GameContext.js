import { createContext, useState } from 'react'

const GameContext = createContext({
  state: {
    round: 0,
    wins: 0,
    losses: 0
  }

})

export const GameProvider = ({ children }) => {
  const initState = {
    round: 0,
    wins: 0,
    losses: 0
  }
  const [gameState, setGameState] = useState(initState)
  const [playerOption, setPlayerOption] = useState(0)
  const [machineOption, setMachineOption] = useState(0)

  const playOption = (option) => {
    setPlayerOption(option)
    setMachineOption(Math.floor((Math.random() * 5) + 1))
    return getGameResult()
  }

  const getGameResult = () => {

  }

  return (
    <GameContext.Provider value={{ playOption, gameState }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
