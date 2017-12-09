// @flow

import React, { Component } from 'react'
import Flex from './Flex'
import Empty from './Empty'

import R from 'ramda'
import shortid from 'shortid'

const isDefined = (item) => item !== undefined && item !== null

const firstDefined = (...args) => {
  return R.find(isDefined, args)
}


class Spaced extends Component {
  render() {
    const {
      horizontal,
      around,
    } = this.props

    const inner = firstDefined(this.props.inner, this.props.size, 0)
    const outer = firstDefined(this.props.outer, this.props.size, 0)

    const isChild = c => (c !== undefined) && (c !== null) && (c !== false)
    const isAbsolutelyPositioned = c => (c.props && c.props.style && c.props.style.position === 'absolute')

    if (inner || outer) {
      let children = R.flatten(Array.isArray(this.props.children) ? this.props.children : Array(this.props.children))
      children = R.filter(isChild, children)
      const absolutelyPositionedChildren = R.filter(isAbsolutelyPositioned, children)
      children = R.reject(isAbsolutelyPositioned, children)
      const length = children.length

      return (
        <Flex {...this.props}>
          {absolutelyPositionedChildren}
          {children.map((child, i) => {
            let style = {}

            // first
            if (i === 0 && outer) {
              const o = outer
              horizontal ? style.marginLeft = o : style.marginTop = o
            }

            // not last
            if (i < length - 1 && inner) {
              const nextChildDoesntWantSpaceBefore =
                (i + 1 < children.length - 1 &&
                children[i].props.skipBeforeSpace)
              if (!nextChildDoesntWantSpaceBefore) {
                const n = inner
                horizontal ? style.marginRight = n : style.marginBottom = n
              }
            }

            // last
            if (i === length - 1 && outer) {
              const o = outer
              horizontal ? style.marginRight = o : style.marginBottom = o
            }

            return React.cloneElement(child, {
              style: [child.props.style || {}, style],
              key: `spaced-child-${i}`, /// use shortid.generate(), but the problem was that every time i type something, the a textinput rerenders, so the shortid changed, and the keyboard closes.
            })
          })}
        </Flex>
      )
    } else {
      return (
        <Flex
          {...this.props}
          style={[{
            justifyContent: 'space-between',
          }, this.props.style]}
        >
          {around && <Empty />}
          {this.props.children}
          {around && <Empty />}
        </Flex>
      )
    }
  }
}

export default Spaced
