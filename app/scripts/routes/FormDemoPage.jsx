import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Button, Input } from 'antd'

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      {label}
    </label>
    { render(input, label, rest) }
    {
      meta.error && meta.touched
        ? <span>{meta.error}</span>
        : null
    }
  </div>
)

const RenderInput = createRenderer((input, label) =>
  <Input {...input} placeholder={label} />
)

const RenderSelect = createRenderer((input, label, { children }) => (
    <select {...input}>
      {children}
    </select>
  )
)

const validate = values => {
  const errors = {}
  if (values.firstName && values.firstName.includes('xxx')) {
    errors.firstName = 'Required'
  }
  if (values.firstName2 && values.firstName2.includes('xxx')) {
    errors.firstName2 = 'Required2'
  }
  return errors
}

export class FormDemoPage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    console.log('--', this.props)
    return (
      <form>
        <Field name="firstName" component={RenderInput} placeholder="Street" />
        <Field name="firstName2" component={RenderInput} placeholder="Street" />
        <Button>xxx</Button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'myForm',
  validate
})(FormDemoPage)

