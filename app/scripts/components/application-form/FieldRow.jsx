import React from 'react'
import { Input, Icon, Tooltip, Button } from 'antd'
import { Field } from 'redux-form'
import { pickAll } from 'ramda'
import { translate } from './../../i18n/i18n'
import { FieldType } from '../../utils/constants'

const createRenderer = render => ({ input, meta, label, help, ...rest }) => (
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label className="label-field">
      <strong>{translate(label)}</strong>
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

const RenderInput = createRenderer((input, label) =>
  <Input {...input} placeholder={translate(label)} />
)

const RenderSelect = createRenderer((input, label, { children }) => (
    <select {...input}>
      {children}
    </select>
  )
)

const getFieldComponent = field => {
  const { type, name, label, help } = field

  const fieldProps = pickAll(['name', 'label', 'help'], field)
  console.log('fieldProps=', fieldProps)

  switch(type) {
    case FieldType.TEXT: {
      return <Field {...fieldProps} component={RenderInput} />
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


