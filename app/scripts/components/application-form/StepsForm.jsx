import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Row, Steps, Icon } from 'antd'

const Step = Steps.Step

const Loading = <Icon type="loading" className="step_loading" />

const StepsForm = props => {

  return(
    <div>
      StepsForm
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(StepsForm)