import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { OptionCard } from './OptionCard';
import ExtraOptions from './extraOptions/ExtraOptions'
import { initData3 } from '../../actions/configurator-action'

class Step3 extends Component {
    
    componentWillMount() {
        this.props.initData3()
    }

    render() {
        return(
            <div className="step3-container">
                <Row>
                    <Col xl={{span: '14', offset: '5'}}>
                        <Row>
                            <Col xl={{span: '9', offset: '1'}}>
                                <OptionCard />
                            </Col>
                            <Col xl={{span:'11', offset: '1'}}>
                                <ExtraOptions />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({
    initData3
})

export default connect(mapStateToProps, mapDispatchToProps)(Step3);