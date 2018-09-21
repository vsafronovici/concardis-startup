import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Row, Col, Input, Checkbox, Button } from 'antd'
import { Field, getFormValues, reduxForm } from 'redux-form'
import cn from 'classnames'

import { selectedProductSelector, step1FieldsSelector } from '../../selectors/configurator-selector'
import { translate } from '../../i18n/i18n'
import { ConfiguratorPageStep } from '../../utils/constants'
import { email as emailReg } from '../../utils/regexps'
import TermsAndConditions from '../common/modal/TermsAndConditions'
import VoidLink from '../common/VoidLink'
import { signupReq } from '../../actions/configurator-action'

export const EMAIL = 'email'

export const Validator = values => {
  const err = {}
  const email = values[EMAIL]

  if (!emailReg.test(email)) {
    err[EMAIL] = 'err.email.invalidFormat'
  }
  return err
}

// eslint-disable-next-line react/prop-types
const createRenderer = render => ({ input, meta, label, placeholder }) => (
  <div className="form-field">
    <div className={cn({ error: meta.error && meta.touched, active: meta.active })}>
      <div className="form-label">
        {translate(label)}
      </div>
      <div className="form-input">
        { render(input, meta, label, placeholder) }
      </div>
      <div>{ meta.error && meta.touched && <span>{translate(meta.error)}</span> }</div>
    </div>
  </div>
)

const RenderInput = createRenderer((input, meta, label, placeholder) =>
  <Input {...input} onChange={(event) => input.onChange(event)} placeholder={translate(placeholder)} value={input.value} />
)

const constructTADLabel = (str, onClick) => {
  const idx1 = str.indexOf('${')
  const idx2 = str.indexOf('}')
  return (
    <i className="gdpr-label">
      {str.substring(0, idx1)}
      <VoidLink onClick={onClick}>{str.substring(idx1 + 2, idx2)}</VoidLink>
      {str.substring(idx2 + 1)}
    </i>
  )
}


class Step3 extends Component {
  state = {
    showModal: false,
    gdprAccepted: false
  }

  toggleShowTermsAndConditions = showModal => () => {
    this.setState({ ...this.state, showModal })
  }

  onChangeGDPR = e => {
    this.setState({ ...this.state, gdprAccepted: e.target.checked })
  }

  isDisabledBtn = () => {
    const { invalid } = this.props
    const { gdprAccepted } = this.state
    return invalid || !gdprAccepted
  }

  signup = () => {
    const { formValues, selectedProduct, step1Fields } = this.props
    this.props.signupReq({
      productId: selectedProduct.prod.Id,
      email: formValues[EMAIL],
      filters: {
        ...step1Fields
      }
    })
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={12}>
            <div className="con-signup">
              <div className="title1">{translate('configurator.signupPage.title')}</div>
              <div className="title2">{translate('configurator.signupPage.title2')}</div>
              <div>
                <Field
                  name={EMAIL}
                  component={RenderInput}
                  label="configurator.signupPage.email.label"
                  placeholder="configurator.signupPage.email.placeholder"
                />
              </div>
              <div className="gdpr">
                <Checkbox onChange={this.onChangeGDPR} />
                {constructTADLabel(translate('configurator.signupPage.TAC.label'), this.toggleShowTermsAndConditions(true))}
              </div>
              <div>
                <Button disabled={this.isDisabledBtn()} onClick={this.signup}>{translate('btn.signup')}</Button>
              </div>
            </div>
          </Col>
        </Row>
        <TermsAndConditions show={this.state.showModal} onClose={this.toggleShowTermsAndConditions(false)} />
      </div>
    )
  }
}

Step3.propTypes = {
  formValues: PropTypes.object,
  selectedProduct: PropTypes.object,
  step1Fields: PropTypes.object,
  invalid: PropTypes.bool,
  signupReq: PropTypes.func
}

const Form = reduxForm({
  form: ConfiguratorPageStep.STEP3,
  validate: Validator,
})(Step3)

const mapStateToProps = state => ({
  step1Fields: step1FieldsSelector(state),
  selectedProduct: selectedProductSelector(state),
  formValues: getFormValues(ConfiguratorPageStep.STEP3)(state),
})

const mapDispatchToProps = ({
  signupReq
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
