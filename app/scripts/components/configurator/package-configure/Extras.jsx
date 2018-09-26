import React, { Component } from 'react'
import { connect } from 'react-redux'
import { curry } from 'ramda'
import { InputNumber } from 'antd'

import { changeExtraQnty } from '../../../actions/package-configure-action'
import { extraFieldsSelector } from '../../../selectors/package-configure-selector'

const onChangeQtyCurried = curry((action, fieldName, fieldValue) => {
  action({ [fieldName]: fieldValue })
})

const Extras = props => {
  console.log('Extras', props)
    const { extras, extraFields } = props
    const onChangeQty = onChangeQtyCurried(props.changeExtraQnty)
    return (
      <div className="">
        { extras.map(item =>
            <div key={item.name}>
              <InputNumber min={1} max={10} defaultValue={extraFields[item.name]} onChange={value => onChangeQty(item.name, value)} />
            </div>
        )}
      </div>
    )
}

const mapStateToProps = state => ({
  extraFields: extraFieldsSelector(state)
})

const mapDispatchToProps = ({
  changeExtraQnty
})

export default connect(mapStateToProps, mapDispatchToProps)(Extras)
