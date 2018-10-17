import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SubmitStatus} from "../../utils/constants";
import { finalSubmitSelector } from '../../selectors/application-form-selector'
import { SuccessSubmitPage } from './SuccessSubmitPage'
import { ErrorSubmitPage } from './ErrorSubmitPage'
import ReviewYourApplication from './ReviewYourApplicaiton'
import { Loader } from '../Loader'
import { LoadingPage } from './LoadingPage'

const ApplicationFormRouter = props => {
  const { finalSubmit: { status, submitting } } = props
  console.log('ROUTERPROPS', props)
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
      {/*<LoadingPage/>*/}
      { submitting && <LoadingPage /> }
      { !submitting && getRoute(status) }
    </div>
  )
}

const mapStateToProps = state => ({
  finalSubmit: finalSubmitSelector(state)
})

ApplicationFormRouter.propTypes = {
}

export default connect(mapStateToProps)(ApplicationFormRouter)
