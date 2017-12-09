// @flow

import React, { Component } from 'react'
import {
  View,
  // ViewPropTypes,
} from 'react-native'

type Props = {
  // ...ViewPropTypes,

  noflex: boolean,
  horizontal: boolean,
  centered: boolean,
  flex: number,
}

export default class Flex extends Component {
  // props: Props

  static defaultProps = {
    noflex: false,
    horizontal: false,
  }

  render() {
    const { style } = this.props
    const { flex, noflex, horizontal, centered } = this.props

    return (
      <View
        {...this.props}
        style={[
          { flex: noflex ? 0 : flex ? flex : 1 },
          (horizontal && { flexDirection: 'row' }),
          (centered && { alignItems: 'center', justifyContent: 'center' }),
          style,
        ]}
      >
        {this.props.children}
      </View>
    )
  }
}
