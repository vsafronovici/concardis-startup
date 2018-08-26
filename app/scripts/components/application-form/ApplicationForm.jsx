import React from 'react'
import PropTypes from 'prop-types'

import { FormSection } from './FormSection'
import { StepsForm } from './StepsForm'
import { translate } from './../../i18n/i18n'
import { objectToArray } from '../../utils/function-utils'
import {
  applicationFormSubmittingSelector, currentSectionsSelector,
  sectionsSelector
} from '../../selectors/application-form-selector'
import { connect } from 'react-redux'

import { Col, Row } from 'antd'

export class ApplicationForm extends React.Component {
  static propTypes = {
    sections: PropTypes.array
  }

  render() {
    const { current, sections, submitting } = this.props
    //const sections = objectToArray(sectionsObj, 'id')
    console.log('ApplicationForm=', sections)
    return (
      <div className="app__application-form">
        <Row>
          <Col lg={{span: 24 }}>
          <h1>{translate('appForm.title')}</h1>
            <StepsForm sections={sections} current={current} submitting={submitting} />
          </Col>
        </Row>
        <div>
          { sections.map((section, index) => <FormSection key={section.id} section={section} submitting={submitting} /> ) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
  current: currentSectionsSelector(state),
  submitting: applicationFormSubmittingSelector(state)
})

export default connect(mapStateToProps)(ApplicationForm)




