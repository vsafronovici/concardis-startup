import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { map, prop } from 'ramda'
import { connect } from 'react-redux'

import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'
import VoidLink from '../common/VoidLink'
import { FieldTitle } from '../common/FieldTitle'
import { goToNextSection } from '../../actions/application-form-action'
import { currentSelector, fieldsToDisplaySelector } from "../../selectors/application-form-selector";

const fieldNames = map(prop('name'))

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  saveForm = e => {
    const { section: { fieldsToDisplay }, touch, goToNextSectionAction, current } = this.props
    touch(...fieldNames(fieldsToDisplay))
    goToNextSectionAction(current + 1)
  }

  render() {
    const { section, fields, fieldsToDisplay, current } = this.props
    console.log('DynamicForm', this.props)

    return (
      <div className="dynamic-form">
        {current === 4 && (
          <div className="dynamic-form-receipt">
            <img src={window.configSettings.resources.imgs.receipt} />
          </div>)
        }
        <form>
          <div>
            <VoidLink onClick={this.saveForm}>save & close</VoidLink>
          </div>
          <div>
            <FieldTitle title={section.title} subtitle={section.subtitle}/>
            <div>
              { fieldsToDisplay.map((field, idx) => <FieldRow key={field.name} field={field} idx={idx} />) }
            </div>

          </div>
          <div>
            {(current === 5 ) ? <Button onClick={this.saveForm} style={{marginLeft: '250px'}}>review</Button> : <Button onClick={this.saveForm}>save</Button>}
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  current: currentSelector(state),
  fieldsToDisplay: fieldsToDisplaySelector(state)
})

const mapDispatchToProps = ({
  goToNextSectionAction: goToNextSection
})

export default connect(mapStateToProps, mapDispatchToProps)(DynamicForm)
