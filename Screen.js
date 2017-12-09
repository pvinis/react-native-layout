// @flow

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Flex from './Flex'
import Shadow from './Shadow'

class Screen extends Component {
  render() {
    return (
      <Flex
        {...this.props}
        style={[
          (this.props.transparent ? styles.transparent : styles.background),
          this.props.style,
        ]}
      >
        {!this.props.noshadow &&
          <Shadow />
        }
        {this.props.children}
      </Flex>
    )
  }
}

const styles = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
  },
  background: {
    backgroundColor: '#eee',
  },
})

export default Screen
