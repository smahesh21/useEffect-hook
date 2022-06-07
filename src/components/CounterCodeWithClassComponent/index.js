import {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: '',
    }
  }

  componentDidMount() {
    const {count} = this.state
    document.title = `Clicked ${count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    const {count} = this.state
    if (prevState.count !== count) {
      console.log('Updating document title')
      document.title = `Clicked ${count} times`
    }
  }

  render() {
    const {count, name} = this.state
    return (
      <div>
        <p>With class component</p>
        <input
          type="text"
          value={name}
          placeholder="Enter here"
          onChange={e => (name: e.target.value)}
        />
        <button type="button" onClick={() => this.setState({count: count + 1})}>
          Click {count}
        </button>
      </div>
    )
  }
}

export default Counter
