import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { reduxForm, Field } from 'redux-form'
import cn from 'classnames'


import { ConfiguratorPageStep } from '../../../utils/constants'
import { translate } from './../../../i18n/i18n'

export const DISCOUNT = 'discount'

const Validator = values => {
  const err = {}
  const discount = values[DISCOUNT]
  if (!discount || discount.trim() === '') {
    err[DISCOUNT] = 'Required'
  }
  return err
}

const createRenderer = render => ({ input, meta, label, placeholder }) => {
  return (

    <div className={cn({ error: meta.error && meta.touched, active: meta.active })}>
      <div className="eo-question">
        {translate(label)}
      </div>
      <div className="eo-input">
        { render(input, meta, label, placeholder) }
        <div>{ meta.error && meta.touched && <span>{meta.error}</span> }</div>
      </div>

    </div>
  )
}

const RenderInput = createRenderer((input, meta, label, placeholder) => {
  //const xxx = meta.dirty ? input.value : val
  return <Input {...input} onChange={(event) => input.onChange(event)} placeholder={translate(placeholder)} value={input.value} />
})


const DiscountField = props => {
  return <Field name={DISCOUNT} component={RenderInput} label="configurator.discount.label" placeholder="configurator.discount.placeholder"/>
}


export default reduxForm({
  form: ConfiguratorPageStep.STEP3,
  validate: Validator,
})(DiscountField)
