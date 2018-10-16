import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { map, prop } from 'ramda'
import { connect } from 'react-redux'

import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'
import VoidLink from '../common/VoidLink'
import { FieldTitle } from '../common/FieldTitle'
import { getReview, save } from '../../actions/application-form-action'
import { currentSelector } from "../../selectors/application-form-selector";
import { i18nSelector} from '../../selectors/i18n-selector'
import { fieldsToShow } from '../../utils/application-form-utils'

const fieldNames = map(prop('name'))

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  saveForm = e => {
    const { touch, rValues, current, saveAction } = this.props
    //touch(...fieldNames(fieldsToDisplay))
    saveAction({ currentChapterIdx: current, formValues: rValues})
  }

  render() {
    const { chapter, rValues, current, i18n, getReviewAction } = this.props
    console.log('DynamicForm', this.props)

    const fieldsToDisplay = fieldsToShow(chapter, rValues)

    return (
      <div className="dynamic-form">
        {current === 4 && (
          <div className="dynamic-form-receipt">
            <img src={window.configSettings.resources.imgs.receipt} />
          </div>)
        }
        <form>
          <div className="flex-row-justify-end">
            <div ><VoidLink onClick={this.saveForm}>{translate('link_applicationForm_saveAndClose')}</VoidLink></div>
          </div>
          <div>
            <FieldTitle title={chapter.title} subtitle={chapter.subtitle}/>
            <div>
              { fieldsToDisplay.map((field, idx) => <FieldRow key={field.name} field={field} idx={idx} i18n={i18n}/>) }
            </div>

          </div>
          <div>
            {
              (current === 5 )
              ? <Button onClick={() => getReviewAction(true)} style={{marginLeft: '250px'}}>{translate('btn_applicationForm_reviewApplication')}</Button>
              : <Button onClick={this.saveForm}>{translate('btn_applicationForm_nextSection')}</Button>
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
