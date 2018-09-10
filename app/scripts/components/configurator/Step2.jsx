import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'
import { OptionCard } from './OptionCard'
import { cardOptionValueSelector, productsSelector, step2SummarySelector } from '../../selectors/configurator-selector'
import { changeFieldValue, goToStep } from '../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../utils/constants'
import { Loader } from '../Loader'

export class Step2 extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  onChooseOption = id => {
    this.props.changeFieldValue({ name: 'cardOption', value: id })
  }

  render() {
    console.log('Step1', this.props)
    const { products, cardOption, summary, goToStep } = this.props
    const [f1, f2, f3, f4] = summary
    return !products
      ? <Loader />
      : (
      <div>
        <Row type="flex" justify="center">
          {
            products.map(p => (
              <Col span={4} offset={1}>
                <OptionCard
                  id={p.Id}
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  items={p.items}
                  active={cardOption === p.Id}
                  onChooseOption={this.onChooseOption} />
              </Col>
            ))
          }
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
  products: productsSelector(state)
})

const mapDispatchToProps = ({
  changeFieldValue,
  goToStep
})

export default connect(mapStateToProps, mapDispatchToProps)(Step2)




