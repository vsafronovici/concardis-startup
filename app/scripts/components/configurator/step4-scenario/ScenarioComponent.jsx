import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Icon, Button } from 'antd'
import { signUpCodeSelector } from './../../../selectors/configurator-selector'
import { SignUpCode } from './../../../utils/constants'

const ATScenario = props => <div className="scenario-at-check"><Icon type="check-circle" theme="outlined" style={{ fontSize: '26px', color: '#7CB342' }}/></div>

const BTNScenario = props => <div><Button className="ant-btn">Button text</Button></div>

const ScenarioComponent = props => {

  const { scen1, scen2, scen3, scen4, scen5, btn, signupCode } = props


const withButton = (code) => {
  const result = code === (SignUpCode.SCEN2 || SignUpCode.SCEN3 || SignUpCode.SCEN5)
 return result
}


 return(
  <Row>
   <Col span={24}>
    <div>
     <div className="scenario-title">
      Title3
     </div>
     <div className="scenario-container-content">
      {scen1 ? <ATScenario /> : null}
      <div className="scenario-content">
        <p>
         Content
        </p>
      </div>
     </div>
      {withButton(signupCode) ? <BTNScenario /> : null}
    </div>
   </Col>
  </Row>
 )
}

const mapStateToProps = state => ({
  signupCode: signUpCodeSelector(state)
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps)(ScenarioComponent)