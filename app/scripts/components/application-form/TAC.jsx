import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'antd'

import { closeTACModal, openTACModal, agreeTAC } from '../../actions/application-form-action'
import { tacSelector } from '../../selectors/application-form-selector'
import TermsAndConditionsModal from './modal/TermsAndConditionsModal'
import { translate } from './../../i18n/i18n'


const TAC = props => {
  const { TAC: { show }, openTACModalAction, closeTACModalAction, agreeTACAction } = props

  return (
    <div>
      <Button className="steps-btn" onClick={openTACModalAction}>{translate('appForm.btn.TAD')}</Button>
      <TermsAndConditionsModal id="TAC_1" show={show} onClose={closeTACModalAction} onOk={agreeTACAction} />
    </div>
  )
}

const mapStateToProps = state => ({
  TAC: tacSelector(state)
})

const mapDispatchToProps = ({
  openTACModalAction: openTACModal,
  closeTACModalAction: closeTACModal,
  agreeTACAction: agreeTAC
})

export default connect(mapStateToProps, mapDispatchToProps)(TAC)

TAC.propTypes = {
  TAC: PropTypes.any,
  openTACModalAction: PropTypes.func,
  closeTACModalAction: PropTypes.func,
  agreeTACAction: PropTypes.func
}
