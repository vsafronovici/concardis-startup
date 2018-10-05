import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { map, prop } from 'ramda'

import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'

const fieldNames = map(prop('name'))

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  saveForm = e => {
    const { section: { fields }, touch } = this.props
    touch(...fieldNames(fields))
  }

  render() {
    const { section: { fields } } = this.props
    console.log('DynamicForm', this.props)

    return (
      <form>
        { fields.map((field, idx) => <FieldRow key={field.name} field={field} idx={idx} />) }
        <div>
          <Button onClick={this.saveForm}>save</Button>
        </div>
      </form>
    )
  }
}

