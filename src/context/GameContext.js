import { createContext, useState } from 'react'

const GameContext = createContext({
  state: {
    round: 1,
    wins: 0,
    losses: 0,
    draws: 0
  }
})

export const GameProvider = ({ children }) => {
  const initState = {
    round: 1,
    wins: 0,
    losses: 0,
    draws: 0
  }
  const [gameState, setGameState] = useState(initState)
  const [playerOption, setPlayerOption] = useState(0)
  const [machineOption, setMachineOption] = useState(0)

  const playOption = (option) => {
    setMachineOption(0)
    setPlayerOption(option)
  }

  const getGameResult = () => {
    setMachineOption(Math.floor((Math.random() * 5) + 1))
    const round = gameState.round
    const wins = gameState.wins
    const losses = gameState.losses
    const draws = gameState.draws
    if (playerOption === machineOption) {
      setGameState({
        round: round + 1,
        wins,
        losses,
        draws: draws + 1
      })
      return 'Draw'
    }
    switch (playerOption) {
      case 1: // Piedra
        if (machineOption === 3 || machineOption === 4) {
          return Victory(round, wins, losses, draws)
        } else {
          return Loss(round, wins, losses, draws)
        }
      case 2: // Papel
        if (machineOption === 1 || machineOption === 5) {
          return Victory(round, wins, losses, draws)
        } else {
          return Loss(round, wins, losses, draws)
        }
      case 3: // Tijera
        if (machineOption === 2 || machineOption === 4) {
          return Victory(round, wins, losses, draws)
        } else {
          return Loss(round, wins, losses, draws)
        }
      case 4: // Lagarto
        if (machineOption === 2 || machineOption === 5) {
          return Victory(round, wins, losses, draws)
        } else {
          return Loss(round, wins, losses, draws)
        }
      case 5: // Spock
        if (machineOption === 1 || machineOption === 3) {
          return Victory(round, wins, losses, draws)
        } else {
          return Loss(round, wins, losses, draws)
        }
    }
  }

  const Victory = (round, wins, losses, draws) => {
    setGameState({
      round: round + 1,
      wins: wins + 1,
      losses,
      draws
    })
    return 'Victory'
  }

  const Loss = (round, wins, losses, draws) => {
    setGameState({
      round: round + 1,
      wins,
      losses: losses + 1,
      draws
    })
    return 'Loss'
  }

  return (
    <GameContext.Provider value={{ playOption, getGameResult, machineOption, gameState, playerOption }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
