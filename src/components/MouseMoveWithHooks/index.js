import {useState, useEffect} from 'react'

function HookMouseMove() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('mouse events')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('Updating Mouse Positions')
    window.addEventListener('mousemove', logMousePosition)
  }, [])

  return (
    <div>
      <p>Mouse with Hooks</p>X - {x} Y - {y}
    </div>
  )
}
export default HookMouseMove
