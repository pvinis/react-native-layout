// @flow

import React, { Component } from 'react'
import Flex from './Flex'
import Separator from './Separator'

class Split extends Component {
  render() {
    const { vertical } = this.props
    const horizontal = !vertical

    return (
      <Flex
        {...this.props}
        style={[
          (horizontal && { flexDirection: 'row' }),
          this.props.style,
        ]}
      >
        {this.props.children[0]}
        <Separator vertical={horizontal} />
        {this.props.children[1]}
      </Flex>
    )
  }
}

export default Split
