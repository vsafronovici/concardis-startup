import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Col, Modal } from 'antd'

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


 

  success = () => {
    const modal = Modal.success({
      title: 'Registration is finished',
      content: 'Your registration was done with successful',
    });
    return <div>{modal}</div>
    
  }

  render() {
    const { sections, submitting, isFormCompleted } = this.props
    console.log('ApplicationForm=', this.props)
    return (
      <div className="app__application-form">
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
        { isFormCompleted && <div style={{width: '100%', textAlign: 'center'}}><Button className="form-btn" type="primary" onClick={this.success}>Submit</Button></div>}
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




