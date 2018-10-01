import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { OptionCard } from '../OptionCard2'
import { quoteSelector } from '../../../selectors/package-configure-selector'
import PackageDescription from './PackageDescription'

const PersonalisePackage = props => {
  const { quote } = props
  return (
    <div className="pp-container">
      <Row>
        <Col span={6} offset={4}>
          <PackageDescription />
        </Col>
        <Col span={8} offset={1}>
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

PersonalisePackage.propTypes = {
  quote: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalisePackage)
