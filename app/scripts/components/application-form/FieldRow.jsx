import React from 'react'
import { Input, Icon, Tooltip, Button, Select, FormItem } from 'antd'
import { Field } from 'redux-form'
import { pickAll } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { objectToArrayKeyValue } from '../../utils/function-utils'
import cn from 'classnames'

const Option = Select.Option

const FieldTooltip = ({ title }) =>
  <Tooltip placement="rightTop" trigger="click" title={translate(title)}>
    <Icon type="info-circle" style={{ fontSize: '0.8em', color: '#08c' }} />
  </Tooltip>

const createRenderer = render => ({ input, meta, type, label, optional, help, tooltip, ...rest }) => (
  <div className="form-field">
    <div className={cn(`form-field-${type}`)}>
      <div className={cn({ error: meta.error && meta.touched, active: meta.active })}>
        <label>
          <strong>{translate(label)}</strong> { optional && <span> {'(optional)'}</span> }
        </label>
        { help && <div className="form-help">{help}</div> }
        <div className="form-input">
          { render(input, meta, rest) }
          { tooltip && <FieldTooltip title={tooltip} /> }
        </div>
        <div>{ meta.error && meta.touched && <span>{translate(meta.error)}</span> }</div>
      </div>
    </div>
  </div>
)

const RenderInput = createRenderer((input, meta, { placeholder }) => {
  console.log('RenderInput', placeholder)
  //const xxx = meta.dirty ? input.value : val
  return <Input
    {...input}
    onChange={(event) => input.onChange(event)}
    placeholder={placeholder ? translate(placeholder) : ''}
    value={input.value}
    disabled={false}
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

