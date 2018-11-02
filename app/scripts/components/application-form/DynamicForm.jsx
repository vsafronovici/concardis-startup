import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'
import VoidLink from '../common/VoidLink'
import FormError from '../common/FormError'
import { FieldMainTitle } from '../common/FieldMainTitle'
import { save, saveAndClose } from '../../actions/application-form-action'
import { currentSelector, nrOfChaptersSelector, reviewModeSelector } from '../../selectors/application-form-selector'
import { i18nSelector } from '../../selectors/i18n-selector'
import { fieldsToShow } from '../../utils/application-form-utils'
import { RESPONSE_STATUS } from '../../utils/constants'

export class DynamicForm extends React.Component {
  static propTypes = {
    current: PropTypes.number,
    saveAction: PropTypes.func,
    saveAndCloseAction: PropTypes.func,
    nrOfChapters: PropTypes.any,
    reviewMode: PropTypes.bool,
    chapter: PropTypes.object,
    rValues: PropTypes.any,
    i18n: PropTypes.any,
    touch: PropTypes.any,
    handleSubmit: PropTypes.func,
    error: PropTypes.any,
    submitting: PropTypes.bool
  }

  submitForm = values => {
    const { current, saveAction } = this.props

    return new Promise(resolve => {
      const callback = response => {
        resolve(response)
      }
      saveAction({ currentChapterIdx: current, formValues: values, callback })
    }).then(res => {
      if (res.status === RESPONSE_STATUS.ERR) {
        throw new SubmissionError({ _error: res.errorMessage || 'validation errorMessage missing' })
      }
    })
  }

  saveAndClose = () => {
    const { chapter, rValues, rSyncErrors, saveAndCloseAction } = this.props
    saveAndCloseAction({ chapter, formValues: rValues, formErrors: rSyncErrors })
  }

  getBtnName = () => {
    const { current, nrOfChapters, reviewMode } = this.props
    /* eslint-disable */ 
    return reviewMode ? 'appForm.btn.saveSection': current === nrOfChapters - 1
      ? 'btn_applicationForm_reviewApplication' : 'btn_applicationForm_nextSection'
    /* eslint-enable */
  }

  render() {
    const { chapter, rValues, current, i18n, touch, handleSubmit, error, reviewMode, submitting, change: changeFormValue } = this.props

    const fieldsToDisplay = fieldsToShow(chapter, rValues)

    return (
      <div className="dynamic-form">

        { current === 4 && !reviewMode &&
          <div className="dynamic-form-receipt">
            <img src={window.configSettings.resources.imgs.receipt} alt="img" />
          </div>
        }

        { !reviewMode &&
          <div className="flex-row-justify-end">
            <div><VoidLink onClick={this.saveAndClose}>{translate('link_applicationForm_saveAndClose')}</VoidLink></div>
          </div>
        }

        <form onSubmit={handleSubmit(this.submitForm)} className={(reviewMode && 'form-chapter-review') || ''}>
          <div>
            <FieldMainTitle title={chapter.title} subtitle={chapter.subtitle} reviewMode={reviewMode}/>
            <div>
              { fieldsToDisplay.map((field, idx) =>
                <FieldRow
                  key={field.name + idx}
                  field={field}
                  idx={idx}
                  i18n={i18n}
                  touch={touch}
                  reviewMode={reviewMode}
                  formValues={rValues}
                  changeFormValue={changeFormValue}
                />
              )}
            </div>
          </div>
          <div className="button-container">
            { error && <FormError error={error} /> }
            <div className="button-submit"><Button htmlType="submit" loading={submitting} disabled={submitting}>{translate(this.getBtnName())}</Button></div>
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
  reviewMode: reviewModeSelector(state)
})

const mapDispatchToProps = ({
  saveAction: save,
  saveAndCloseAction: saveAndClose
})

export default connect(mapStateToProps, mapDispatchToProps)(DynamicForm)
