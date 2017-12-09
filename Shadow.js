// @flow

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Flex from './Flex'

class Shadow extends Component {
  render() {
    return (
      <Flex noflex
        style={[styles.base, this.props.style]}
        shadowColor='#00000d'
        shadowOffset={{ height: 6 }}
        shadowRadius={4}
        shadowOpacity={.1}
      />
    )
  }
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 20,
    marginTop: -20,
  },
})

export default Shadow
