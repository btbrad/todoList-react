import React, { Component, Fragment } from 'react'
import './animation.css'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  handleClick= () => {
    const { show } = this.state
    this.setState({
      show: !show
    })
  }

  render() {
    const { show } = this.state
    return (
      <Fragment>
        <div className={show ? 'show' : 'hide'}>Hello</div>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    )
  }
}