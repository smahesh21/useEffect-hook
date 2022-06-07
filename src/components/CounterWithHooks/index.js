import {useState, useEffect} from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('useEffect-Updating document title')
    document.title = `You clicked ${count} times`
  }, [count])
  return (
    <div>
      <p>With useEffect Hook</p>
      <input
        type="text"
        value={name}
        placeholder="Enter here"
        onChange={e => setName(e.target.value)}
      />
      <button type="button" onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
    </div>
  )
}

export default ClickCounter
