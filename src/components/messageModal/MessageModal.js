import './MessageModal.css'

const MessageModal = ({ children, state, setState }) => {
  return (
    <>
      {state &&
        <div id='message-modal'>
          <div className='box'>
            <button className='close' onClick={() => setState(!state)}>X</button>
            {children}
          </div>
        </div>}
    </>
  )
}
export default MessageModal
