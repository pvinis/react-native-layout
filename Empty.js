// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

type Props = View.propTypes

class Empty extends Component {
  render() {
    return <View {...this.props} />
  }
}

export default Empty
