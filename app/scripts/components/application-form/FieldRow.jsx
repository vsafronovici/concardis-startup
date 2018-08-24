import React from 'react'
import { Input, Icon, Tooltip, Button, Select, FormItem } from 'antd'
import { Field } from 'redux-form'
import { pickAll } from 'ramda'
import { translate } from './../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { objectToArrayKeyValue } from '../../utils/function-utils'

const Option = Select.Option

const createRenderer = render => ({ input, meta, label, required, help, ...rest }) => {
  console.log('createRenderer', {label, rest})
  return (
    <div
      className={[
        meta.error && meta.touched ? 'error' : '',
        meta.active ? 'active' : ''
      ].join(' ')}
    >
      <label>
        {translate(label)} {required && <span className="require-symbol">*</span>}
      </label>
      { help &&
        <Tooltip placement="rightTop" trigger="click" title={translate(help)}>
          <Icon type="info-circle" style={{ fontSize: '0.8em', color: '#08c' }} />
        </Tooltip>
      }

      { render(input, label, rest) }
      {
        meta.error && meta.touched
          ? <span>{meta.error}</span>
          : null
      }
    </div>
  )
}

const RenderInput = createRenderer((input, label, { val }) => {
  //input.value = val
  return <Input   placeholder={translate(label)} defaultValue={val} value={val}/>
})


const RenderSelect = createRenderer((input, label, { options, val }) => {
  // input.value = val
  console.log('RenderSelect', { options, val, input })
  return (
    <Select onChange={(event) => input.onChange(event)} defaultValue={val}>
      { objectToArrayKeyValue(options.items).map(entry => <Option key={entry.key} value={entry.key}>{entry.value}</Option>) }
    </Select>
  )
})

const getFieldComponent = field => {
  const { type, name, label, validation: { required }, value } = field

  const fieldProps = pickAll(['name', 'label', 'required', 'help'], field)
  if (value) {
    fieldProps.val = value
  }

  console.log('fieldProps=', fieldProps)

  switch(type) {
    case FieldType.TEXT: {
      // return <Field {...fieldProps} component={TextField} />
      return <Field {...fieldProps} component={RenderInput} required={required} />
    }

    case FieldType.DROPDOWN: {
      const customProps = { defaultValue: 'No'}
      return <Field {...fieldProps} component={RenderSelect} options={field.options} required={required} props={customProps} />
    }
    default: {
      return <Field name={name} label={translate(label)} placeholder={label} component={RenderInput} />
    }
  }
}

export const FieldRow = ({ field }) => {
  console.log('xxx', {field})
  return (
    <div className="field-row">
      {getFieldComponent(field)}
    </div>
  )
}


