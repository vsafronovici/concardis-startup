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
import { FieldCheckbox} from '../common/FieldCheckbox'
import { FieldBoxedCheckboxGroup} from '../common/FieldBoxedCheckboxGroup'
import { FieldDropDown} from '../common/FieldDropDown'
import { FieldHorizontalRadioBtns } from '../common/FieldHorizontalRadioBtns'
import { FieldDate } from '../common/FieldDate'
import { FieldTextBold } from '../common/FieldTextBold'


const Option = Select.Option

const createRenderer = render => ({ input, meta, type, ...rest }) => { console.log('createRenderer ', meta); return (

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
)}


const RenderInput = createRenderer((input, meta, rest) => {
  return <FieldInputText
    input={input}
    onChange={(event) => input.onChange(event)}
    value={input.value}
    {...rest}
  />
})
const RenderTextBold = createRenderer((input, meta, rest) => {
  return <FieldTextBold
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

const RenderCheckbox = createRenderer((input, meta, rest) => {
  return <FieldCheckbox
    onChange={(event) => input.onChange(event)}
    input={input}
    value={input.value}
    {...rest}
  />
})

const RenderBoxedCheckboxGroup = createRenderer((input, meta, rest) => {
  return <FieldBoxedCheckboxGroup
    onChange={(event) => input.onChange(event)}
    input={input}
    value={input.value}
    {...rest}
  />
})

const RenderDropDown = createRenderer((input, meta, rest) => {
  return <FieldDropDown
        onChange={(event) => input.onChange(event)}
        value={input.value}
        input={input}
        {...rest}
  />
})

const RenderHorizontalRadioBtns = createRenderer((input, meta, rest) => {
  return <FieldHorizontalRadioBtns
    onChange={event => input.onChange(event)}
    input={input}
    value={input.value}
    {...rest}
  />
})

const RenderDate = createRenderer((input, meta, rest) => {
  return <FieldDate
    onChange={event => input.onChange(event)}
    input={input}
    value={input.value}
    {...rest}
  />
})

const renderFieldComponent = ({ idx, field }) => {
  const { type } = field

  const fieldProps = { ...field }

  if (idx === 0) {
    fieldProps.autoFocus = true
  }

  switch (type) {
    // case FieldType.TEXT: {
    //   return <Field {...fieldProps} component={RenderInput} />
    // }
    // case FieldType.VERTICAL_RADIO_BTNS: {
    //   return <Field {...fieldProps} component={RenderVerticalRadioBtns} />
    // }
    // case FieldType.BOXED_RADIO_BTNS: {
    //   return <Field {...fieldProps} component={RenderBoxedRadioBtns} />
    // }
    case FieldType.BOXED_CHECKBOX: {
      return <Field {...fieldProps} component={RenderBoxedCheckbox} />
    }
    // case FieldType.CHECKBOX: {
    //   return <Field {...fieldProps} component={RenderCheckbox} />
    // }
    // case FieldType.DROPDOWN: {
    //   return <Field {...fieldProps} component={RenderDropDown} />
    // }
    case FieldType.BOXED_CHECKBOX_GROUP: {
      return <Field {...fieldProps} component={RenderBoxedCheckboxGroup}/>
    }
    // case FieldType.HORIZONTAL_RADIO_BTNS: {
    //   return <Field {...fieldProps} component={RenderHorizontalRadioBtns}/>
    // }
    // case FieldType.DATE: {
    //   return <Field {...fieldProps} component={RenderDate}/>
    // }
    // case FieldType.TEXT_BOLD: {
    //   return <Field {...fieldProps} component={RenderTextBold}/>
    // }
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

