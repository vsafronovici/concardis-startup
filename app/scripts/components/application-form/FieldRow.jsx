import React from 'react'
import { Input, Button, Select } from 'antd'
import { Field } from 'redux-form'
import { pickAll } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { objectToArrayKeyValue } from '../../utils/function-utils'
import cn from 'classnames'
import { FieldInputText } from '../common/FieldInputText'
import { FieldVerticalRadioBtns } from '../common/FieldVerticalRadioBtns'
import { FieldBoxedRadioBtns } from '../common/FieldBoxedRadioBtns'
import { FieldBoxedCheckbox } from '../common/FieldBoxedCheckbox'

const Option = Select.Option

const createRenderer = render => ({ input, meta, type, ...rest }) => (
  <div className="form-field">
    <div className={cn(`form-field-${type}`)}>
      <div className={cn({ error: meta.error && meta.touched, active: meta.active })}>
        <div>
          { render(input, meta, rest) }
        </div>
        <div>{ meta.error && meta.touched && <span>{translate(meta.error)}</span> }</div>
      </div>
    </div>
  </div>
)


const RenderInput = createRenderer((input, meta, rest) => {
  return <FieldInputText
    input={input}
    onChange={(event) => input.onChange(event)}
    value={input.value}
    {...rest}
  />
})

const RenderVerticalRadioBtns = createRenderer((input, meta, rest) => {
  console.log('RenderVerticalRadioBtns', {input, meta})
  return <FieldVerticalRadioBtns
    onChange={(event) => input.onChange(event)}
    value={input.value}
    {...rest}
  />
})

const RenderBoxedRadioBtns = createRenderer((input, meta, rest) => {
  return <FieldBoxedRadioBtns
    onChange={(event) => input.onChange(event)}
    value={input.value}
    {...rest}
  />
})

const RenderBoxedCheckbox = createRenderer((input, meta, rest) => {
  console.log('RenderBoxedCheckbox', {input, meta})
  return <FieldBoxedCheckbox
    onChange={(event) => input.onChange(event)}
    input={input}
    value={input.value}
    {...rest}
  />
})

const RenderSelect = createRenderer((input, meta, label, { options, val, readOnly }) => (
  <Select onChange={(event) => input.onChange(event)} defaultValue={input.value} disabled={readOnly}>
    { objectToArrayKeyValue(options.items).map(entry => <Option key={entry.key} value={entry.key}>{entry.value}</Option>) }
  </Select>
))

const renderFieldComponent = ({ idx, field }) => {
  const { type } = field

  const fieldProps = {
    ...field
  }


  switch (type) {
    case FieldType.TEXT: {
      return <Field {...fieldProps} component={RenderInput} />
    }
    case FieldType.VERTICAL_RADIO_BTNS: {
      return <Field {...fieldProps} component={RenderVerticalRadioBtns} />
    }
    case FieldType.BOXED_RADIO_BTNS: {
      return <Field {...fieldProps} component={RenderBoxedRadioBtns} />
    }
    case FieldType.BOXED_CHECKBOX: {
      return <Field {...fieldProps} component={RenderBoxedCheckbox} />
    }
    default: {
      return null
    }
  }
}

export const FieldRow = ({ idx, field }) => (
  <div className="form-field-row">
    { renderFieldComponent({ idx, field }) }
  </div>
)

