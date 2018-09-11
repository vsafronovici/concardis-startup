import React , { Component } from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import { stepSelector } from '../../../../selectors/configurator-selector';

class ExtraField extends Component {

    componentWillMount() {
        const name = this.props.exField.name;
        const step = this.props.step;
        const value = false;
        this.props.changeFieldValue({ value, name, step })
    }

    handleChange = value => {
        const name = this.props.exField.name;
        const step = this.props.step;
        this.props.changeFieldValue({ value, name, step });
    }

    render() {

        const { exField: { exTitle, exSubTitle, monthly, name }} = this.props;
        return (
            <div className="ef-container">
                <div className="ef-checkbox">
                    <Checkbox onChange={(e) => this.handleChange(e.target.checked)} />
                </div>
                <div className="ef-content">
                    <div className="ef-content-title">
                        {exTitle}
                    </div>
                    <div className="ef-content-subtitle">
                        {exSubTitle}
                    </div>
                    <div className="ef-content-monthly">
                        {monthly}
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    step: stepSelector(state)
})

export default connect(mapStateToProps)(ExtraField);