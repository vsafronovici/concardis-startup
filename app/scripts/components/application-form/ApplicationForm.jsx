import React from 'react'
import PropTypes from 'prop-types'

import { FormSection } from './FormSection'
import { StepsForm } from './StepsForm'
import { translate } from './../../i18n/i18n'
import { objectToArray } from '../../utils/function-utils'

export class ApplicationForm extends React.Component {
  static propTypes = {
    sections: PropTypes.object
  }

  render() {
    const { sections: sectionsObj } = this.props
    const sections = objectToArray(sectionsObj, 'id')
    console.log('sections=', sections)
    return (
      <div className="app__application-form">
        <h1>{translate('appForm.title')}</h1>
        <StepsForm sections={sections} />
        <div>
          { sections.map((section, index) => <FormSection key={section.id} sectionIndex={index} section={section} /> ) }
        </div>
      </div>
    )
  }
}


