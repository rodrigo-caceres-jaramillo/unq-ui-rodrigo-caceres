const ButtonOption = ({ children, funtion, text }) => {
  return (
    <button className='button-option' onClick={funtion}>
      {children}<span className='button-text'>{text}</span>
    </button>
  )
}

export default ButtonOption
