import ClickCounter from './components/CounterWithHooks'
import Counter from './components/CounterCodeWithClassComponent'

import './App.css'
import ClassMouse from './components/ClassMouse'
import MouseContainer from './components/MouseContainer'

const App = () => (
  <div>
    <Counter />
    <ClickCounter />
    <ClassMouse />
    <MouseContainer />
  </div>
)

export default App
