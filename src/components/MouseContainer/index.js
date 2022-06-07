import {useState, useEffect} from 'react'
import HookMouseMove from '../MouseMoveWithHooks'

function MouseContainer() {
  const [display, setDisplay] = useState(true)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse Events')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('Updating Position')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  })

  return (
    <div>
      <hr />
      <p>Mouse Position with cleanup way</p>
      <button type="button" onClick={() => setDisplay(!display)}>
        Toggle Display
      </button>
      {display && <HookMouseMove />}
    </div>
  )
}
export default MouseContainer
