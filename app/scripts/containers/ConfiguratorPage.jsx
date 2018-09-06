import React from 'react'
import { connect } from 'react-redux'
import Configurator from '../components/configurator/Configurator'
import { initData } from '../actions/configurator-action'

export class ConfiguratorPage extends React.Component {

  static propTypes = {
  }

  componentWillMount() {
    this.props.initData()
  }


  render() {
    const { } = this.props
    return (
      <div className="configurator">
        <Configurator />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = ({
  initData
})


export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPage)




