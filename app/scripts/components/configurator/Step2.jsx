import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'
import { OptionCard } from './OptionCard'
import { cardOptionValueSelector, step2SummarySelector } from '../../selectors/configurator-selector'
import { changeFieldValue, goToStep } from '../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../utils/constants'

export class Step2 extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  onChooseOption = id => {
    this.props.changeFieldValue({ name: 'cardOption', value: id })
  }

  render() {
    const { cardOption, summary, goToStep } = this.props
    const [f1, f2, f3, f4] = summary
    console.log('--sum', summary)
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={4}>
            <OptionCard id={1} active={cardOption === 1} onChooseOption={this.onChooseOption} />
          </Col>
          <Col span={4} offset={2}>
            <OptionCard id={2} active={cardOption === 2} onChooseOption={this.onChooseOption} />
          </Col>
          <Col span={4} offset={2}>
            <OptionCard id={3} active={cardOption === 3} onChooseOption={this.onChooseOption} />
          </Col>
        </Row>
        <div className="oc-summary">
          <Row type="flex" justify="space-around" align="middle">
            <Col span={16}>
              <div className="oc-s-row">
                <div className="oc-s-col oc-s-label">{f1.title}</div>
                <div className="oc-s-col oc-s-value">€{f1.value}</div>
                <div className="oc-s-col oc-s-label">{f2.title}</div>
                <div className="oc-s-col oc-s-value">€{f2.value}</div>
              </div>
              <div className="oc-s-row">
                <div className="oc-s-col oc-s-label">{f3.title}</div>
                <div className="oc-s-col oc-s-value">€{f3.value}</div>
                <div className="oc-s-col oc-s-label">{f4.title}</div>
                <div className="oc-s-col oc-s-value">{f4.value}</div>
              </div>
            </Col>
            <Col span={8}>
              <div className="oc-s-btns">
                <Button onClick={() => goToStep(ConfiguratorPageStep.STEP1)}>Back</Button>
                <Button onClick={() => goToStep(ConfiguratorPageStep.STEP3)} style={{ marginLeft: 30 }}>Continue</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cardOption: cardOptionValueSelector(state),
  summary: step2SummarySelector(state),
})

const mapDispatchToProps = ({
  changeFieldValue,
  goToStep
})

export default connect(mapStateToProps, mapDispatchToProps)(Step2)




