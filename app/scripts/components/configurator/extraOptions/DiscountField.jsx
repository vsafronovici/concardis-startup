import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import { reduxForm, Field } from 'redux-form'
import cn from 'classnames'

import { translate } from './../../../i18n/i18n'
import { ConfiguratorPageStep, RESPONSE_STATUS } from '../../../utils/constants'
import { memoizedSFAction } from '../../../modules/client'

export const DISCOUNT = 'discountCode'

export const Validator = values => {
  const err = {}
  const discount = values[DISCOUNT]
  if (discount && !new RegExp('^([a-zA-Z0-9]{6})$').test(discount)) {
    err[DISCOUNT] = 'page3.discounterror'
  }
  return err
}

export const AsyncValidator = productId => (values/*, dispatch */) => {
  const action = {
    actionName: configSettings.remoteActions.getDiscount,
    args: JSON.stringify({
      productId: productId,
      [DISCOUNT]: values[DISCOUNT]
    })
  }

  return memoizedSFAction(action, { buffer: true, escape: false }).then(res => {
    console.log('AsyncValidator', res)
    const { data } = res
    if (data.status === RESPONSE_STATUS.ERR) {
      throw { [DISCOUNT]: data.errorCode }
    }
  })
}

const createRenderer = render => ({ input, meta, label, placeholder }) => {
  return (

    <div className={cn({ error: meta.error && meta.touched, active: meta.active })}>
      <div className="eo-question">
        {translate(label)}
      </div>
      <div className="eo-input-container">
        <div className="eo-input">
          { render(input, meta, label, placeholder) }
          { meta.asyncValidating && <Icon type="loading" theme="outlined" /> }
        </div>
        <div>{ meta.error && meta.touched && <span>{translate(meta.error)}</span> }</div>
      </div>
    </div>
  )
}

const RenderInput = createRenderer((input, meta, label, placeholder) => {
  return <Input {...input} onChange={(event) => input.onChange(event)} placeholder={translate(placeholder)} value={input.value} />
})

export const DiscountField = props => {
  console.log('DiscountField', props)
  return <Field name={DISCOUNT} component={RenderInput} label="configurator.discount.label" placeholder="configurator.discount.placeholder"/>
}
