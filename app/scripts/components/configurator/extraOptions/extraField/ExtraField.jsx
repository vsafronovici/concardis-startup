import React , { Component } from 'react';
import { Checkbox } from 'antd';

class ExtraField extends Component {

    handleChange = value => {
        const name = this.props.exField.name
        this.props.changeFieldValue({value, name})
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



export default ExtraField;