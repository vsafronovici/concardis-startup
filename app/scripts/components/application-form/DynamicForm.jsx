import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  saveForm = e => {
  }

  render() {
    const { section: { fields } } = this.props
    console.log('DynamicForm', this.props)

    return (
      <form>
        { fields.map((field, idx) => <FieldRow key={field.name} field={field} idx={idx} />) }
      </form>
    )
  }
}

