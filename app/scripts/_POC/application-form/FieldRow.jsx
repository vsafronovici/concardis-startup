import React from 'react'
import { Input, Icon, Tooltip, Button, Select, FormItem, Radio } from 'antd'
import { Field } from 'redux-form'
import { pickAll } from 'ramda'
import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { objectToArrayKeyValue } from '../../utils/function-utils'

const Option = Select.Option

const RadioGroup = Readio.Group

const createRenderer = render => ({ input, meta, label, required, help, ...rest }) => (
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      <strong>{translate(label)}</strong> {required && <span className="require-symbol">*</span>}
    </label>
    { help &&
    <Tooltip placement="rightTop" trigger="click" title={translate(help)}>
      <Icon type="info-circle" style={{ fontSize: '0.8em', color: '#08c' }} />
    </Tooltip>
    }

    { render(input, meta, label, rest) }

    { meta.error && meta.touched && <span>{meta.error}</span> }
  </div>
)

const RenderInput = createRenderer((input, meta, label, { val, readOnly }) => {
  const xxx = meta.dirty ? input.value : val
  return <Input
    {...input} onChange={(event) => input.onChange(event)} placeholder={translate(label)} value={input.value}
    disabled={readOnly}
  />
})

const RenderRadio = createRenderer((input, { options }) => (
  <RadioGroup onChange={(event) => input.onChange(event)}>
    {options.map( radio => <Radio value={input.value}></Radio>)}
  </RadioGroup>
))

const RenderSelect = createRenderer((input, meta, label, { options, val, readOnly }) => (
  <Select onChange={(event) => input.onChange(event)} defaultValue={input.value} disabled={readOnly}>
    { objectToArrayKeyValue(options.items).map(entry => <Option key={entry.key} value={entry.key}>{entry.value}</Option>) }
  </Select>
))

const renderFieldComponent = ({ field, readOnly }) => {
  const { type, name, label, validation: { required }, value } = field

  const fieldProps = pickAll(['name', 'label', 'required', 'help'], field)
  fieldProps.readOnly = readOnly
  if (value) {
    fieldProps.val = value
  }


  switch (type) {
    case FieldType.TEXT: {
      return <Field {...fieldProps} component={RenderInput} required={required} />
    }

    case FieldType.DROPDOWN: {
      const customProps = { defaultValue: 'No' }
      return <Field
        {...fieldProps} component={RenderSelect} options={field.options} required={required}
        props={customProps}
      />
    }
    case FieldType.RADIO: {
      return <Field 
        {...fieldProps} component={RenderRadio} options={field.options}
      />
    }
    default: {
      return <Field name={name} label={translate(label)} placeholder={label} component={RenderInput} />
    }
  }
}

export const FieldRow = ({ field, readOnly }) => (
  <div className="field-row">
    { renderFieldComponent({ field, readOnly }) }
  </div>
)

