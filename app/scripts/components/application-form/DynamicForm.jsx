import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { connect } from 'react-redux'

import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'
import VoidLink from '../common/VoidLink'
import { FieldTitle } from '../common/FieldTitle'
import { getReview, save } from '../../actions/application-form-action'
import { currentSelector, nrOfChaptersSelector } from "../../selectors/application-form-selector";
import { i18nSelector} from '../../selectors/i18n-selector'
import { fieldsToShow } from '../../utils/application-form-utils'
import {SubmissionError} from 'redux-form'
import { RESPONSE_STATUS } from '../../utils/constants'

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  submitForm = values  => {
    const { current, saveAction } = this.props

    return new Promise(resolve => {
      const callback = response => {
        resolve(response)
      }
      saveAction({ currentChapterIdx: current, formValues: values, callback})
    }).then(res => {
      if (res.status === RESPONSE_STATUS.ERR) {
        throw new SubmissionError({ _error: res.errorMessage || 'validation errorMessage missing'})
      }
    })
  }

  getBtnName = () => {
    const { current, nrOfChapters } = this.props
    return current === nrOfChapters - 1 ? 'btn_applicationForm_reviewApplication' : 'btn_applicationForm_nextSection'
  }

  render() {
    const { chapter, rValues, current, i18n, getReviewAction, touch, handleSubmit, error, nrOfChapters } = this.props
    console.log('DynamicForm', this.props)

    const fieldsToDisplay = fieldsToShow(chapter, rValues)

    return (
      <div className="dynamic-form">
        {current === 4 && (
          <div className="dynamic-form-receipt">
            <img src={window.configSettings.resources.imgs.receipt} />
          </div>)
        }
        <form onSubmit={handleSubmit(this.submitForm)}>
          <div className="flex-row-justify-end">
            <div><VoidLink onClick={this.saveForm}>{translate('link_applicationForm_saveAndClose')}</VoidLink></div>
          </div>
          <div>
            <FieldTitle title={chapter.title} subtitle={chapter.subtitle}/>
            <div>
              { fieldsToDisplay.map((field, idx) => <FieldRow key={field.name} field={field} idx={idx} i18n={i18n} touch={touch} />) }
            </div>

          </div>

          { error && <div className="form-field-row form-field"><div className="error">{error}</div></div> }

          <div>
              <button type="submit" className="ant-btn">{translate(this.getBtnName())}</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  current: currentSelector(state),
  i18n: i18nSelector(state),
  nrOfChapters: nrOfChaptersSelector(state),
})

const mapDispatchToProps = ({
  getReviewAction: getReview,
  saveAction: save
})

export default connect(mapStateToProps, mapDispatchToProps)(DynamicForm)
