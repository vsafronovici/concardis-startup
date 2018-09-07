import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'
import { OptionCard } from './OptionCard'


export class Step1 extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  render() {
    const { } = this.props
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={4}>
            <OptionCard />
          </Col>
          <Col span={4} offset={2}>
            <OptionCard />
          </Col>
          <Col span={4} offset={2}>
            <OptionCard />
          </Col>
        </Row>
        <div className="oc-summary">
          <Row type="flex" justify="space-around" align="middle">
            <Col span={12}>
              <div className="oc-s-row"></div>
            </Col>
            <Col span={6} offset={2}>y</Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Step1)




