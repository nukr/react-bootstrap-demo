import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Alert from 'react-bootstrap/lib/Alert'
import Button from 'react-bootstrap/lib/Button'

class Test extends Component {
  render () {
    return (
      <div>
        Hihi
        <Alert bsStyle='danger'>Alert</Alert>
        <Button>GGGG</Button>
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('root'))
