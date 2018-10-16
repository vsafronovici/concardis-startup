import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { connect } from 'react-redux'

import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'
import VoidLink from '../common/VoidLink'
import { FieldTitle } from '../common/FieldTitle'
import { getReview, save } from '../../actions/application-form-action'
import { currentSelector } from "../../selectors/application-form-selector";
import { i18nSelector} from '../../selectors/i18n-selector'
import { fieldsToShow } from '../../utils/application-form-utils'

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  submitForm = values  => {
    const { current, saveAction } = this.props
    return saveAction({ currentChapterIdx: current, formValues: values})
  }

  render() {
    const { chapter, rValues, current, i18n, getReviewAction, touch, handleSubmit } = this.props
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
          <div>
            {
              (current === 5 )
              ? <Button onClick={() => getReviewAction(true)} style={{marginLeft: '250px'}}>{translate('btn_applicationForm_reviewApplication')}</Button>
              : <button type="submit">{translate('btn_applicationForm_nextSection')}</button>
            }
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  current: currentSelector(state),
  i18n: i18nSelector(state)
})

const mapDispatchToProps = ({
  getReviewAction: getReview,
  saveAction: save
})

export default connect(mapStateToProps, mapDispatchToProps)(DynamicForm)
