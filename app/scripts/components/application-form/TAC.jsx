import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import { closeTACModal, openTACModal, agreeTAC } from '../../actions/application-form-action'
import { tacSelector } from '../../selectors/application-form-selector'
import TermsAndConditionsModal from './modal/TermsAndConditionsModal'

const TAC = props => {

  console.log('TAC', props)
  const { TAC: { show }, openTACModalAction, closeTACModalAction, agreeTACAction } = props

  return(
    <div>
      <Button className="steps-btn" onClick={openTACModalAction}>Temrs & Conditions</Button>
      <TermsAndConditionsModal show={show} onClose={closeTACModalAction} onOk={agreeTACAction} />
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
