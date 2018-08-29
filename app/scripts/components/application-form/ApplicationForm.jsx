import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'

import FormSection from './FormSection'
import StepsForm from './StepsForm'
import { translate } from './../../i18n/i18n'
import {
  applicationFormSubmittingSelector,
  currentSectionsSelector, isFormCompletedSelector,
  sectionsSelector
} from '../../selectors/application-form-selector'

export class ApplicationForm extends React.Component {
  static propTypes = {
    sections: PropTypes.array
  }

  submitForms = () => {
    alert('submited')
  }

  render() {
    const { sections, submitting, isFormCompleted } = this.props
    //const sections = objectToArray(sectionsObj, 'id')
    console.log('ApplicationForm=', this.props)
    return (
      <div className="app__application-form">
        <h1>{translate('appForm.title')}</h1>
        <StepsForm
          sections={sections}
          submitting={submitting}
        />
        <div>
          {
            sections.map((section, index) =>
              <FormSection
                key={section.id}
                section={section}
                submitting={submitting}
              />
            )
          }
        </div>
        { isFormCompleted && <Button className="form-btn" type="primary" onClick={this.submitForms}>Submit</Button>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
  submitting: applicationFormSubmittingSelector(state),
  isFormCompleted: isFormCompletedSelector(state)
})

export default connect(mapStateToProps)(ApplicationForm)




