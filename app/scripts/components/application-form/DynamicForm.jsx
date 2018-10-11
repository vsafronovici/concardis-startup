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
import { currentSelector } from '../../selectors/application-form-selector'

const fieldNames = map(prop('name'))

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  saveForm = e => {
    const { section: { fields }, touch, goToNextSectionAction, current } = this.props
    //touch(...fieldNames(fields))
    goToNextSectionAction(current + 1)
  }

  render() {
    const { section, fields, current } = this.props
    console.log('DynamicForm', this.props)

    return (
      <div className="dynamic-form">
        <form>
          <div>
            <VoidLink onClick={this.saveForm}>save & close</VoidLink>
          </div>
          <div>
            <FieldTitle title={section.title} subtitle={section.subtitle}/>
            <div>
              { fields.map((field, idx) => <FieldRow key={field.name} field={field} idx={idx} />) }
            </div>

          </div>
          <div>
            {(current > 4 ) ? <Button onClick={this.saveForm} style={{marginLeft: '250px'}}>review</Button> : <Button onClick={this.saveForm}>save</Button>}
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  current: currentSelector(state)
})

const mapDispatchToProps = ({
  goToNextSectionAction: goToNextSection
})
export const ConnectedDynamicForm = connect(mapStateToProps, mapDispatchToProps)(DynamicForm)
