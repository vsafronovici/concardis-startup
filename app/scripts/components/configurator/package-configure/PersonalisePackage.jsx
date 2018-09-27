import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { OptionCard } from './../OptionCard2'
import { quoteSelector } from './../../../selectors/package-configure-selector'

const PersonalisePackage = props => {

  const { quote } = props
  return(
    <div className="pp-container">
      <Row>
        <Col span={8} offset={4}></Col>
        <Col span={8} offset={4}>
          <OptionCard quote={quote} />
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  quote: quoteSelector(state)
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalisePackage)