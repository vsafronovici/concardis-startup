import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'
import { OptionCard } from './OptionCard'

const SUMMARY_SPAN = 5

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
            <OptionCard active />
          </Col>
          <Col span={4} offset={2}>
            <OptionCard />
          </Col>
        </Row>
        <div className="oc-summary">
          <Row type="flex" justify="space-around" align="middle">
            <Col span={16}>
              <div className="oc-s-row">
                <div className="oc-s-col oc-s-label">label</div>
                <div className="oc-s-col oc-s-value">€56,000</div>
                <div className="oc-s-col oc-s-label">label</div>
                <div className="oc-s-col oc-s-value">value</div>
              </div>
              <div className="oc-s-row">
                <div className="oc-s-col oc-s-label">label</div>
                <div className="oc-s-col oc-s-value">value</div>
                <div className="oc-s-col oc-s-label">label</div>
                <div className="oc-s-col oc-s-value">value</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="oc-s-btns">
                <Button>Back</Button>
                <Button style={{ marginLeft: 30 }}>Continue</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Step1)




