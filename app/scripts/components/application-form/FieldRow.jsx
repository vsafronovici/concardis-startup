import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import cn from 'classnames'

import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { FieldInputText } from '../common/FieldInputText'
import { FieldVerticalRadioBtns } from '../common/FieldVerticalRadioBtns'
import { FieldBoxedRadioBtns } from '../common/FieldBoxedRadioBtns'
import { FieldBoxedCheckbox } from '../common/FieldBoxedCheckbox'
import { FieldCheckbox } from '../common/FieldCheckbox'
import { FieldBoxedCheckboxGroup } from '../common/FieldBoxedCheckboxGroup'
import { FieldDropDown } from '../common/FieldDropDown'
import { FieldHorizontalRadioBtns } from '../common/FieldHorizontalRadioBtns'
import { FieldDate } from '../common/FieldDate'
import { FieldTextBold } from '../common/FieldTextBold'
import { FieldTitle } from '../common/FieldTitle'
import { FieldWarning } from '../common/FieldWarning'
import { onChangeCheckBox } from '../../utils/application-form-utils'

/* eslint-disable react/prop-types */
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
/* eslint-enable react/prop-types */

const RenderInput = createRenderer((input, meta, rest) => (
  <FieldInputText
    input={input}
    onChange={(event) => input.onChange(event)}
    value={input.value}
    {...rest}
  />
))

const RenderTextBold = createRenderer((input, meta, rest) => {
  const { touch } = rest

  return <FieldTextBold
    input={input}
    onChange={(event) => input.onChange(event)}
    onBlur={event => { touch(input.name) }}
    value={input.value}
    {...rest}
  />
})

const RenderVerticalRadioBtns = createRenderer((input, meta, rest) => {
  const { touch } = rest

  return <FieldVerticalRadioBtns
    onChange={(event) => input.onChange(event)}
    onBlur={e => { touch(input.name) }}
    value={input.value}
    {...rest}
    meta={meta}
    input={input}
  />
})

const RenderBoxedRadioBtns = createRenderer((input, meta, rest) => {
  const { touch } = rest
  return <FieldBoxedRadioBtns
    onChange={(event) => input.onChange(event)}
    value={input.value}
    input={input}
    onBlur={event => { touch(input.name) }}
    {...rest}
  />
})

const RenderBoxedCheckbox = createRenderer((input, meta, rest) => {
  const { touch } = rest
  console.log('RENDER_BOXED_CHECK', rest, input, meta)
  return (
    <FieldBoxedCheckbox
      onChange={event => onChangeCheckBox(event, input, touch)}
      input={input}
      value={input.value}
      //onBlur={event => touch(input.name)}
      {...rest}
    />
  )
})

const RenderCheckbox = createRenderer((input, meta, rest) => {
  const { touch } = rest
  return (
    <FieldCheckbox
      onChange={event => onChangeCheckBox(event, input, touch)}
      input={input}
      value={input.value}
      {...rest}
    />
  )
})

const RenderBoxedCheckboxGroup = createRenderer((input, meta, rest) => {
  const { touch } = rest

  return (
    <FieldBoxedCheckboxGroup
      onChange={event => onChangeCheckBox(event, input, touch)}
      input={input}
      value={input.value}
      //onFocus={event => { touch(input.name) }}
      {...rest}
    />
  )
})

const RenderDropDown = createRenderer((input, meta, rest) => {
  const { touch } = rest
  return (
    <FieldDropDown
      onChange={(event) => input.onChange(event)}
      value={input.value}
      input={input}
      onBlur={event => { touch(input.name) }}
      meta={meta}
      {...rest}
    />
  )
})

const RenderHorizontalRadioBtns = createRenderer((input, meta, rest) => {
  const { touch } = rest
  return (
    <FieldHorizontalRadioBtns
      onChange={event => input.onChange(event)}
      input={input}
      value={input.value}
      onBlur={event => { touch(input.name) }}
      {...rest}
    />
  )
})

const RenderDate = createRenderer((input, meta, rest) => {
  const { touch } = rest
  return (
    <FieldDate
      onChange={event => input.onChange(event)}
      input={input}
      value={input.value}
      onBlur={event => { touch(input.name) }}
      {...rest}
    />
  )
})


const renderFieldComponent = ({ idx, field, i18n, touch, reviewMode, formValues, changeFormValue }) => {
  const { type } = field

  const fieldProps = { ...field, touch }

  if (!i18n[fieldProps.description]) {
    fieldProps.description = null
  }
  if (!i18n[fieldProps.hint]) {
    fieldProps.hint = null
  }
  if (!i18n[fieldProps.helpText]) {
    fieldProps.helpText = null
  }

  if (idx === 0) {
    fieldProps.autoFocus = true
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
    case FieldType.CHECKBOX: {
      return <Field {...fieldProps} component={RenderCheckbox} />
    }
    case FieldType.DROPDOWN: {
      return <Field {...fieldProps} component={RenderDropDown} formValues={formValues} changeFormValue={changeFormValue} />
    }
    case FieldType.BOXED_CHECKBOX_GROUP: {
      return <Field {...fieldProps} component={RenderBoxedCheckboxGroup} />
    }
    case FieldType.HORIZONTAL_RADIO_BTNS: {
      return <Field {...fieldProps} component={RenderHorizontalRadioBtns} />
    }
    case FieldType.DATE: {
      return <Field {...fieldProps} component={RenderDate} />
    }
    case FieldType.TEXT_BOLD: {
      return <Field {...fieldProps} component={RenderTextBold} />
    }
    case FieldType.TITLE: {
      return <FieldTitle {...fieldProps} />
    }
    case FieldType.WARNING: {
      return reviewMode && <FieldWarning {...fieldProps} />
    }
    default: {
      return null
    }
  }
}

export const FieldRow = props => (
  <div className="form-field-row">
    <div style={{ display: 'none' }}>{props.field.name}</div>
    { renderFieldComponent(props) }
  </div>
)

FieldRow.propTypes = {
  idx: PropTypes.number,
  field: PropTypes.any,
  i18n: PropTypes.any,
  touch: PropTypes.any,
}
