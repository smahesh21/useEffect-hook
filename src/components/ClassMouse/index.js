import {Component} from 'react'

class ClassMouse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition)
  }

  logMousePosition = e => {
    this.setState({x: e.clientX, y: e.clientY})
  }

  render() {
    const {x, y} = this.state
    return (
      <div>
        <p>Mouse movement Using class component</p>X - {x} Y - {y}
      </div>
    )
  }
}

export default ClassMouse
