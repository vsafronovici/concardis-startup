import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Icon, Button } from 'antd'
import { translate } from './../../../i18n/i18n'
import { signUpCodeSelector, userSelector } from './../../../selectors/configurator-selector'
import { SignUpCode } from './../../../utils/constants'
import { withButton, getButtonTitle, getTitle, withTitle3, getTitle2, getTitle3, withName } from './utils/step4-utils'

const ATScenario = props => <div className="scenario-at-check"><Icon type="check-circle" theme="outlined" style={{ fontSize: '26px', color: '#7CB342' }} /></div> 

const BTNScenario = props => <div><Button className="ant-btn">{props.btnText}</Button></div>

const ScenarioComponent = props => {

  const { signupCode, user } = props

  return (
    <Row>
      <Col span={24}>
        <div>
          <div className="scenario-title">
            {getTitle(signupCode)} {(withName(signupCode) && user) ? user.firstName : null}
          </div>
          <div className="scenario-container-content">
            {(signupCode === SignUpCode.SCEN1) ? <ATScenario /> : null}
            <div className="scenario-content">
              <div className="scenario-title2">
                {getTitle2(signupCode)}
              </div>
              {withTitle3(signupCode) && <div className="scenario-title3">{getTitle3(signupCode)}</div>}
            </div>
          </div>
          {withButton(signupCode) && <BTNScenario btnText={getButtonTitle(signupCode)} />}
        </div>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({
  signupCode: signUpCodeSelector(state),
  user: userSelector(state)
})

const mapDispatchToProps = ({

})

ScenarioComponent.propTypes = {
  signupCode: PropTypes.string,
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioComponent)
