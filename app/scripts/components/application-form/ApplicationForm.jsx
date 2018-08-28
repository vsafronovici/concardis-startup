import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FormSection from './FormSection'
import { StepsForm } from './StepsForm'
import { translate } from './../../i18n/i18n'
import {
  applicationFormSubmittingSelector,
  currentSectionsSelector,
  sectionsSelector,
} from '../../selectors/application-form-selector'

export class ApplicationForm extends React.Component {
  static propTypes = {
    sections: PropTypes.array
  }

  render() {
    const { current, sections, sectionsState, fields, fieldsValues, submitting } = this.props
    //const sections = objectToArray(sectionsObj, 'id')
    console.log('ApplicationForm=', this.props)
    return (
      <div className="app__application-form">
        <h1>{translate('appForm.title')}</h1>
        <StepsForm
          sections={sections}
          current={current}
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




