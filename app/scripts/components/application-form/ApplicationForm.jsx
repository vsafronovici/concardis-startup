import React from 'react'
import PropTypes from 'prop-types'
import { FormSection } from './FormSection'
import { StepsForm } from './StepsForm'
import { translate } from './../../i18n/i18n'


export class ApplicationForm extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const { data } = this.props
    return (
      <div className="app__application-form">
        <h1>{translate('appForm.title')}</h1>
        <StepsForm sections={data.sections} />
        <div>
          { data.sections.map((section, index) => <FormSection key={section.id} index={index} section={section} /> ) }
        </div>
      </div>
    )
  }
}


