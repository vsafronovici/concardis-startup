import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SubmitStatus} from "../../utils/constants";
import { statusSelector, submittingSelector } from '../../selectors/application-form-selector'
import { SuccessSubmitPage } from './SuccessSubmitPage'
import { ErrorSubmitPage } from './ErrorSubmitPage'
import ReviewYourApplication from './ReviewYourApplicaiton'
import { Loader } from '../Loader'

const ApplicationFormRouter = props => {
  const { status, submitting } = props
  const getRoute = status => {
    switch (status) {
      case SubmitStatus.SUCCESS:
        return <SuccessSubmitPage {...props} />
      case SubmitStatus.ERROR:
        return <ErrorSubmitPage {...props} />
      default:
        return <ReviewYourApplication {...props}/>
    }
  }
  return (
    <div>
      { submitting && <Loader />}
      {!submitting && getRoute(status)}
    </div>
  )
}

const mapStateToProps = state => ({
  status: statusSelector(state),
  submitting: submittingSelector(state)
})

ApplicationFormRouter.propTypes = {
}

export default connect(mapStateToProps)(ApplicationFormRouter)
