import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'

import { OptionCard } from './OptionCard'
import { cardOptionValueSelector, productsSelector, step2SummarySelector } from '../../selectors/configurator-selector'
import { changeFieldValue, goToStep } from '../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../utils/constants'
import { Loader } from '../Loader'
import { translate } from './../../i18n/i18n'
import { valuesFormatter } from './../../transformers/configurator-transformer'


export class Step2 extends React.Component {
  static propTypes = {
    sections: PropTypes.array
  }

  componentDidMount() {
    console.log('DidMount', this.props)
  }

  onChooseOption = id => {
    this.props.changeFieldValue({ name: 'cardOption', value: id, step: ConfiguratorPageStep.STEP2 })
  }

  render() {
    console.log('Step2', this.props)
    const { products, cardOption, summary, goToStep } = this.props
    const [f1, f2, f3, f4] = summary
    return !products.length
      ? <Loader />
      : (
        <div>
          <Row>
            <Col xxl={{ span: 18, offset: 3 }}>
              <Row type="flex" justify="center">
                {
                  products.map(p => (
                    <Col span={7} offset={1} key={p.Id}>
                      <OptionCard
                        id={p.Id}
                        name={p.name}
                        description={p.description}
                        price={p.price}
                        items={p.items}
                        active={cardOption === p.Id}
                        onChooseOption={this.onChooseOption}
                      />
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
          <div className="oc-summary">
            <Row type="flex" justify="space-around" align="middle">
              <Col span={16}>
                <div className="oc-s-row">
                  <div className="oc-s-col oc-s-label">{translate(f1.label)}</div>
                  <div className="oc-s-col oc-s-value">€{valuesFormatter(f1.value)}</div>
                  <div className="oc-s-col oc-s-label">{translate(f2.label)}</div>
                  <div className="oc-s-col oc-s-value">€{valuesFormatter(f2.value)}</div>
                </div>
                <div className="oc-s-row">
                  <div className="oc-s-col oc-s-label">{translate(f3.label)}</div>
                  <div className="oc-s-col oc-s-value">€{valuesFormatter(f3.value)}</div>
                  <div className="oc-s-col oc-s-label">{translate(f4.label)}</div>
                  <div className="oc-s-col oc-s-value">{f4.value}</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="oc-s-btns">
                  <Button onClick={() => goToStep(ConfiguratorPageStep.STEP1)}>
                    {translate('btn.Back')}
                  </Button>
                  <Button onClick={() => goToStep(ConfiguratorPageStep.STEP3)} style={{ marginLeft: 30 }} disabled={!cardOption}>
                    {translate('btn.Continue')}
                  </Button>
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

