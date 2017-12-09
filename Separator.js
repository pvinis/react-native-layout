// @flow

import React, { Component } from 'react'
import Flex from './Flex'

class Separator extends Component {
  render() {
    const { vertical } = this.props
    const horizontal = !vertical

    return (
      <Flex noflex
        {...this.props}
        style={[
          { backgroundColor: 'red' },
          (horizontal && { width: '100%', height: 1 }),
          (vertical && { width: 1, height: '100%' }),
          this.props.style,
        ]}
      />
    )
  }
}

export default Separator
